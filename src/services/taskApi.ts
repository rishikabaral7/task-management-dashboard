import { baseApi } from "./baseApi";

type Task = {
  id: string;
  title: string;
  description?: string;
  status: "Todo" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  dueDate?: string;
};

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",

      providesTags: ["Task"],
    }),

    getTask: builder.query<Task, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: (result, error, id) => [{ type: "Task", id }],
    }),

    createTask: builder.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),

      invalidatesTags: ["Task"],
    }),

    updateTask: builder.mutation<
      Task,
      Partial<Task> & { id: string }
    >({
      query: ({ id, ...task }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: task,
      }),

      invalidatesTags: ["Task"],
    }),

    deleteTask: builder.mutation<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;