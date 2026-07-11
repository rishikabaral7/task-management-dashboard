import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["Todo", "In Progress", "Completed"]),
  priority: z.enum(["Low", "Medium", "High"]),
});

export type TaskFormValues = z.infer<typeof taskSchema>;