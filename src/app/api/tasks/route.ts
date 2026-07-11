import { NextResponse } from "next/server";

import { tasks } from "@/lib/mockTasks";

export async function GET() {
  return NextResponse.json(tasks);
}


export async function POST(
  request: Request
) {
  const body = await request.json();

  const newTask = {
    id: Date.now().toString(),
    ...body,
  };

  tasks.push(newTask);

  return NextResponse.json(
    newTask,
    {
      status: 201,
    }
  );
}