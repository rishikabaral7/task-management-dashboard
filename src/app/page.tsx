import StatsCard from '@/components/dashboard/StatsCard';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import DashboardLayout from '@/components/layout/DashboardLayout'
import { Button } from "@/components/ui/button";
import {dashboardStats} from '@/constants/dashboard'

import Image from "next/image";

export default function Home() {
 
  return (
      <DashboardLayout>
      <WelcomeSection/>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {dashboardStats.map((stat)=>(
        <StatsCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon}/>
      ))}

      </div>
    </DashboardLayout>
    
  );
}
