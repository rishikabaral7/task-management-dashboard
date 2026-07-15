import StatsCard from '@/components/dashboard/StatsCard';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Button } from "@/components/ui/button";
import {dashboardStats} from '@/constants/dashboard'
import { redirect } from "next/navigation";


import Image from "next/image";

export default function Home() {
  redirect("/login");
}