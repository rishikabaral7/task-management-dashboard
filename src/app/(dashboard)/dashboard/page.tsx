"use client";

import {
  CheckCircle2,
  ListTodo,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back! Here is a quick overview of your tasks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Tasks" value={24} icon={ListTodo} />
        <StatsCard title="Completed" value={12} icon={CheckCircle2} />
        <StatsCard title="Pending" value={8} icon={AlertTriangle} />
        <StatsCard title="High Priority" value={4} icon={TrendingUp} />
      </div>
    </div>
  );
}
