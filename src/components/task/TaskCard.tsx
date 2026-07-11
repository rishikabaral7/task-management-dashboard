"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CircleCheckBig, Eye, Flag, Pencil, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
};

type TaskCardProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const statusVariant =
    task.status === "Completed"
      ? "default"
      : task.status === "In Progress"
        ? "secondary"
        : "outline";

  const priorityVariant =
    task.priority === "High"
      ? "destructive"
      : task.priority === "Medium"
        ? "secondary"
        : "outline";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}>
      <Card className="transition-shadow hover:shadow-xl">
        <CardContent className="space-y-5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {task.description || "No description provided."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant={statusVariant}
                className="flex items-center gap-1">
                <CircleCheckBig className="h-3 w-3" />
                {task.status}
              </Badge>

              <Badge
                variant={priorityVariant}
                className="flex items-center gap-1">
                <Flag className="h-3 w-3" />
                {task.priority}
              </Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" onClick={onEdit}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>

            <Link
              href={`/tasks/${task.id}`}
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]">
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </Link>

            <Button variant="destructive" onClick={onDelete}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
