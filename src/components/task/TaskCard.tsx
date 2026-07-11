"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Pencil,
  Trash2,
  Flag,
  CircleCheckBig,
} from "lucide-react";

type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
};

type TaskCardProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
};

export default function TaskCard({
  task,
  onEdit,
  onDelete,
}: TaskCardProps) {
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
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="transition-shadow hover:shadow-xl">
        <CardContent className="space-y-5 p-6">
          <div>
            <h2 className="text-xl font-semibold">
              {task.title}
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              {task.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge
              variant={statusVariant}
              className="flex items-center gap-1"
            >
              <CircleCheckBig className="h-3 w-3" />
              {task.status}
            </Badge>

            <Badge
              variant={priorityVariant}
              className="flex items-center gap-1"
            >
              <Flag className="h-3 w-3" />
              {task.priority}
            </Badge>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onEdit}
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>

            <Button
              variant="destructive"
              onClick={onDelete}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}