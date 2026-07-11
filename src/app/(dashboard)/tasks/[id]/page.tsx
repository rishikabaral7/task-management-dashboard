"use client";

import Link from "next/link";
import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, Flag, ListChecks } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetTaskQuery } from "@/services/taskApi";

export default function TaskDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: task, isLoading, error } = useGetTaskQuery(id);

  if (isLoading) {
    return <p className="text-muted-foreground">Loading task…</p>;
  }

  if (error || !task) {
    return (
      <div className="space-y-4">
        <Link
          href="/tasks"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
          <ArrowLeft className="h-4 w-4" />
          Back to tasks
        </Link>
        <p className="text-muted-foreground">Task not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6">
      <Link
        href="/tasks"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-muted">
        <ArrowLeft className="h-4 w-4" />
        Back to tasks
      </Link>

      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle className="text-2xl">{task.title}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                {task.description || "No description provided."}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <ListChecks className="h-3 w-3" />
                {task.status}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Flag className="h-3 w-4" />
                {task.priority}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Due {task.dueDate || "No due date"}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
