"use client";

import AdminSidebar from "@/components/adminsidebar";
import  AdminTopbar from "@/components/admintopbar";


export default function Adminlayout({ children, }:{children:React.ReactNode}) {
 return (
   <>  
     <div className="w-full bg-white-A700">
        <div className="flex  md:flex-col">
            <AdminSidebar className="!sticky top-0 flex h-screen w-[242px] flex-col gap-8 overflow-auto  py-[22px] md:hidden md:p-5 sm:py-5"/>
              <div className="flex-1 md:self-stretch md:p-5">
                <AdminTopbar />
                {children}
              </div>
          </div>
      </div>  
   </>
  )
}