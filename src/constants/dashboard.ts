import {ClipboardList, CircleCheckBig, Clock3, TriangleAlert } from 'lucide-react'

export const dashboardStats = [
  {
    title: "Total Tasks",
    value: 24,
    icon:ClipboardList,
  },
  {
    title: "Completed",
    value: 8,
    icon:CircleCheckBig
  },
  {
    title: "Pending",
    value: 4,
    icon: Clock3
  },
  {
    title: "Overdue",
    value: 2,
    icon: TriangleAlert
  },
];