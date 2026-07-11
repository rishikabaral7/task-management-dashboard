"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";

import { login } from "@/store/authSlice";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";


export default function LoginPage(){

  const router = useRouter();

  const dispatch = useDispatch();


  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");



  const handleLogin=()=>{


    if(!email || !password){
      return;
    }


    dispatch(
      login({
        email,
      })
    );


    router.push("/dashboard");

  };



  return (

    <div className="flex min-h-screen items-center justify-center">

      <Card className="w-full max-w-md">

        <CardContent className="space-y-5 p-6">


          <h1 className="text-2xl font-bold">
            Login
          </h1>


          <Input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


          <Button
            className="w-full"
            onClick={handleLogin}
          >
            Login
          </Button>


        </CardContent>

      </Card>


    </div>

  );

}