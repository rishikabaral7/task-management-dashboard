"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { logout } from "@/features/auth/authSlice";
import { Button } from "../ui/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">TaskFlow</h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
