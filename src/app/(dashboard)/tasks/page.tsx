"use client";

import { useMemo, useState } from "react";

import TaskCard from "@/components/task/TaskCard";
import TaskDialog from "@/components/task/TaskDialog";
import TaskEmptyState from "@/components/task/TaskEmptyState";
import TaskSkeleton from "@/components/task/TaskSkeleton";
import TaskToolbar from "@/components/task/TaskToolbar";
import { useDeleteTaskMutation, useGetTasksQuery } from "@/services/taskApi";
import { toast } from "sonner";

export default function TasksPage() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("Newest");

  const { data: tasks = [], isLoading, error } = useGetTasksQuery();

  const [deleteTask] = useDeleteTaskMutation();

  const filteredTasks = useMemo(() => {
    let filtered = tasks.filter((task: any) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase());

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

    if (sort === "Oldest") {
      filtered = [...filtered];
    }

    return filtered;
  }, [tasks, search, status, priority, sort]);

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id).unwrap();

      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  if (isLoading) {
    return <TaskSkeleton />;
  }

  if (error) {
    return <h1>Error fetching tasks.</h1>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Tasks</h1>

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
          filteredTasks.map((task: any) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => {
                setSelectedTask(task);
                setOpen(true);
              }}
              onDelete={() => handleDelete(task.id)}
            />
          ))
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
    </div>
  );
}
