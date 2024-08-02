'use client'
import React from "react"
import  AdminTopbar from "@/components/admintopbar";
import Sidebar from "@/components/sidebar";
import { ADMIN_MENU } from "@/constants/link";


export default function Adminlayout({ children, }:{children:React.ReactNode}) {
 return (
   <>  
     <div className="w-full">
        <div className="flex  md:flex-col">
            <Sidebar menu={ ADMIN_MENU}/>
              <div className="scrollable-div flex-1 md:self-stretch md:p-5">
                <AdminTopbar />
                {children}
              </div>
          </div>
      </div>  
   </>
  )
}