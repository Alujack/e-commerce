"use client";
import "./style.css"
import Sidebar1 from "@/components/sidebar";
import  Topbar from "@/components/topbar";
export default function Adminlayout({ children, }:{children:React.ReactNode}) {
 return (
   <>  
     <div className="w-full bg-white-A700">
        <div className="flex  md:flex-col">
        <Sidebar1 className="!sticky top-0 flex h-screen w-[242px] flex-col gap-8 overflow-auto  py-[22px] md:hidden md:p-5 sm:py-5"  ></Sidebar1>
        <div className="flex-1 md:self-stretch md:p-5">
            <Topbar />
        {children}
        </div>
        </div>
        </div>
        
   </>
  )
}