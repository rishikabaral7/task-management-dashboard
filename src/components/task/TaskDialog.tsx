"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import TaskForm from "./TaskForm";

import {
  useCreateTaskMutation,
  useUpdateTaskMutation,
} from "@/services/taskApi";

import { TaskFormValues } from "@/lib/validations/taskSchema";

import { toast } from "sonner";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: "Todo" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
};

type TaskDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task?: Task;
};

export default function TaskDialog({
  open,
  onOpenChange,
  task,
}: TaskDialogProps) {
  const [createTask, { isLoading: isCreating }] =
    useCreateTaskMutation();

  const [updateTask, { isLoading: isUpdating }] =
    useUpdateTaskMutation();

  const isLoading = isCreating || isUpdating;

  const handleSubmit = async (
    values: TaskFormValues
  ) => {
    try {
      if (task) {
        await updateTask({
          id: task.id,
          ...values,
        }).unwrap();

        toast.success(
          "Task updated successfully"
        );
      } else {
        await createTask(values).unwrap();

        toast.success(
          "Task created successfully"
        );
      }

      onOpenChange(false);

    } catch (error) {
      console.error(
        "Failed to save task:",
        error
      );

      toast.error(
        "Failed to save task"
      );
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {task
              ? "Edit Task"
              : "Create Task"}
          </DialogTitle>
        </DialogHeader>

        <TaskForm
          defaultValues={
            task
              ? {
                  title: task.title,
                  description:
                    task.description ?? "",
                  status: task.status,
                  priority: task.priority,
                }
              : undefined
          }
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
}