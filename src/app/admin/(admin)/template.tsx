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
              <div className="flex-1 md:self-stretch md:p-5">
                <AdminTopbar />
                <div className="scrollable-div bg-white-A700 rounded-xl p-20">{children}</div>
              </div>
          </div>
      </div>  
   </>
  )
}