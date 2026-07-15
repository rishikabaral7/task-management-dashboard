"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import type { RootState } from "@/store/store";

type AuthState = {
  isAuthenticated: boolean;
};

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isAuthenticated = useSelector((state: RootState): boolean => {
    const authState = state.auth as AuthState | undefined;
    return authState?.isAuthenticated ?? false;
  });
   console.log("ProtectedRoute rendered");
  console.log("isAuthenticated:", isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
