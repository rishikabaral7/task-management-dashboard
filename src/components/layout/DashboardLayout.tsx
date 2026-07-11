import React from 'react'
import {ReactNode} from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

type DashboardLayoutProps = {children:ReactNode}

const DashboardLayout = ({children,}:DashboardLayoutProps) => {
  return (
    <>
    <Navbar/>
    <div className="flex">
        
        <Sidebar/>
        <main className="flex-1 p-6">
            {children}
        </main>

    </div>
    </>
  )
}

export default DashboardLayout