"use client";

import {
  AlertTriangle,
  CheckCircle2,
  ListTodo,
  TrendingUp,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";
import { useGetTasksQuery } from "@/services/taskApi";

type TaskSummary = {
  status?: string;
  priority?: string;
};

export default function DashboardPage() {
  const { data: tasks = [] } = useGetTasksQuery();

  const stats = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(
      (task: TaskSummary) => task.status === "Completed",
    ).length,
    pendingTasks: tasks.filter(
      (task: TaskSummary) => task.status !== "Completed",
    ).length,
    highPriorityTasks: tasks.filter(
      (task: TaskSummary) => task.priority === "High",
    ).length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back! Here is a quick overview of your tasks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value={stats.totalTasks}
          icon={ListTodo}
        />
        <StatsCard
          title="Completed"
          value={stats.completedTasks}
          icon={CheckCircle2}
        />
        <StatsCard
          title="Pending"
          value={stats.pendingTasks}
          icon={AlertTriangle}
        />
        <StatsCard
          title="High Priority"
          value={stats.highPriorityTasks}
          icon={TrendingUp}
        />
      </div>
    </div>
  );
}
