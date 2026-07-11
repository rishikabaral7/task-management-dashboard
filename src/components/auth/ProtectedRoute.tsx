"use client";


import { useSelector } from "react-redux";

import { useRouter } from "next/navigation";

import { useEffect } from "react";


export default function ProtectedRoute({
  children,
}:{
  children:React.ReactNode;
}){


  const router=useRouter();


  const isAuthenticated =
    useSelector(
      (state:any)=>
        state.auth.isAuthenticated
    );


  useEffect(()=>{

    if(!isAuthenticated){
      router.push("/login");
    }

  },[
    isAuthenticated,
    router
  ]);



  if(!isAuthenticated){
    return null;
  }


  return children;

}