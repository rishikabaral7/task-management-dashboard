import { LucideIcon } from 'lucide-react';
import React from 'react'

type StatsCardProps ={
    title:string;
    value:number;
    icon: LucideIcon;
}

const StatsCard = ({title,value,icon:Icon,}:StatsCardProps) => {
  return (
    <div className="rounded-lg border p-6">
        <div className="flex items-center justify-between">

        <h3 className="text-sm text-muted-foreground">
            {title}
        </h3>
        <Icon className="h-6 w-6 text-primary" />
        </div>
        <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  )
}

export default StatsCard