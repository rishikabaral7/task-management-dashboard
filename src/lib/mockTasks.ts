export type Task = {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
};

export let tasks: Task[] = [
  {
    id: "1",
    title: "Finish Assignment",
    description: "Complete Task Dashboard",
    status: "Todo",
    priority: "High",
    dueDate: "2026-07-15",
  },
  {
    id: "2",
    title: "Prepare Interview",
    description: "Revise React and Next.js",
    status: "Completed",
    priority: "Medium",
    dueDate: "2026-07-18",
  },
];