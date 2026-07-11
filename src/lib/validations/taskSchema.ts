import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters long"),
  description: z.string().trim().max(280, "Description must be 280 characters or fewer").optional().or(z.literal("")),
  status: z.enum(["Todo", "In Progress", "Completed"]),
  priority: z.enum(["Low", "Medium", "High"]),
});

export type TaskFormValues = z.infer<typeof taskSchema>;