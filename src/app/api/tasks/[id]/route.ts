import { NextResponse } from "next/server";

import { tasks } from "@/lib/mockTasks";


export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  const { id } = await params;


  const task = tasks.find(
    (task) => task.id === id
  );


  if (!task) {
    return NextResponse.json(
      {
        message:
          "Task not found",
      },
      {
        status:404,
      }
    );
  }


  return NextResponse.json(task);
}



export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      id:string;
    }>;
  }
) {

  const {id}=await params;

  const body=await request.json();


  const index=tasks.findIndex(
    (task)=>task.id===id
  );


  if(index===-1){

    return NextResponse.json(
      {
        message:"Task not found"
      },
      {
        status:404
      }
    );

  }


  tasks[index]={
    ...tasks[index],
    ...body,
  };


  return NextResponse.json(
    tasks[index]
  );
}



export async function DELETE(
  request:Request,
  {
    params,
  }:{
    params:Promise<{
      id:string;
    }>
  }
){

  const {id}=await params;


  const index=tasks.findIndex(
    (task)=>task.id===id
  );


  if(index===-1){

    return NextResponse.json(
      {
        message:"Task not found"
      },
      {
        status:404
      }
    );

  }


  const deletedTask =
    tasks.splice(index,1)[0];


  return NextResponse.json(
    deletedTask
  );
}