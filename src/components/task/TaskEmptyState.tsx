"use client";

import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";

type TaskEmptyStateProps = {
  onAddTask: () => void;
};

export default function TaskEmptyState({ onAddTask }: TaskEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
      <ClipboardList className="mb-4 h-12 w-12 text-muted-foreground" />

      <h2 className="text-xl font-semibold">No tasks found</h2>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Your task list is empty right now. Create a task to get started.
      </p>

      <Button className="mt-5" onClick={onAddTask}>
        Create Task
      </Button>
    </div>
  );
}
