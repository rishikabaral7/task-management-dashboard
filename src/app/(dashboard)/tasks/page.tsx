"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, GripVertical } from "lucide-react";
import { toast } from "sonner";

import TaskCard from "@/components/task/TaskCard";
import TaskDialog from "@/components/task/TaskDialog";
import TaskEmptyState from "@/components/task/TaskEmptyState";
import TaskSkeleton from "@/components/task/TaskSkeleton";
import TaskToolbar from "@/components/task/TaskToolbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDebounce } from "@/hooks/use-debounce";
import { useDeleteTaskMutation, useGetTasksQuery } from "@/services/taskApi";

export default function TasksPage() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [taskToDelete, setTaskToDelete] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [orderedTasks, setOrderedTasks] = useState<any[]>([]);

  const debouncedSearch = useDebounce(search, 250);
  const { data: tasks = [], isLoading, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();

  useEffect(() => {
    if (tasks.length) {
      setOrderedTasks(tasks);
    }
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    let filtered = orderedTasks.filter((task: any) => {
      const description = task.description?.toLowerCase() ?? "";
      const matchesSearch =
        task.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        description.includes(debouncedSearch.toLowerCase());

      const matchesStatus = status === "All" || task.status === status;
      const matchesPriority = priority === "All" || task.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });

    if (sort === "Priority") {
      const priorityOrder: Record<string, number> = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      filtered = [...filtered].sort(
        (a: any, b: any) =>
          priorityOrder[a.priority] - priorityOrder[b.priority],
      );
    }

    if (sort === "Newest") {
      filtered = [...filtered].reverse();
    }

    return filtered;
  }, [orderedTasks, debouncedSearch, status, priority, sort]);

  const handleDelete = async () => {
    if (!taskToDelete) return;

    try {
      await deleteTask(taskToDelete.id).unwrap();
      toast.success("Task deleted successfully");
      setTaskToDelete(null);
    } catch {
      toast.error("Failed to delete task");
    }
  };

  const handleDrop = (targetId: string) => {
    if (!draggedTaskId || draggedTaskId === targetId) {
      setDraggedTaskId(null);
      return;
    }

    setOrderedTasks((currentTasks) => {
      const reordered = [...currentTasks];
      const fromIndex = reordered.findIndex(
        (task) => task.id === draggedTaskId,
      );
      const toIndex = reordered.findIndex((task) => task.id === targetId);

      if (fromIndex < 0 || toIndex < 0) {
        return currentTasks;
      }

      const [moved] = reordered.splice(fromIndex, 1);
      reordered.splice(toIndex, 0, moved);
      return reordered;
    });

    toast.success("Task ordering updated");
    setDraggedTaskId(null);
  };

  if (isLoading) {
    return <TaskSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-xl">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Unable to load tasks</AlertTitle>
        <AlertDescription>
          The task service could not be reached. Please refresh the page or try
          again shortly.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-sm text-muted-foreground">
            Track your priorities and keep work moving forward.
          </p>
        </div>
      </div>

      <TaskToolbar
        search={search}
        status={status}
        priority={priority}
        sort={sort}
        onSearchChange={setSearch}
        onStatusChange={(value) => setStatus(value ?? "All")}
        onPriorityChange={(value) => setPriority(value ?? "All")}
        onSortChange={(value) => setSort(value ?? "Newest")}
        onAddTask={() => {
          setSelectedTask(null);
          setOpen(true);
        }}
      />

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <TaskEmptyState
            onAddTask={() => {
              setSelectedTask(null);
              setOpen(true);
            }}
          />
        ) : (
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task: any) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                draggable
                onDragStart={() => setDraggedTaskId(task.id)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={() => handleDrop(task.id)}
                onDragEnd={() => setDraggedTaskId(null)}>
                <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                  <GripVertical className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wide">
                    Drag to reorder
                  </span>
                </div>
                <TaskCard
                  task={task}
                  onEdit={() => {
                    setSelectedTask(task);
                    setOpen(true);
                  }}
                  onDelete={() => setTaskToDelete(task)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      <TaskDialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);

          if (!value) {
            setSelectedTask(null);
          }
        }}
        task={selectedTask}
      />

      <AlertDialog
        open={Boolean(taskToDelete)}
        onOpenChange={(value) => {
          if (!value) {
            setTaskToDelete(null);
          }
        }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this task?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The task will be removed from your
              list.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}
