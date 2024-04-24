"use client"
import { Heading } from "@/components";
import Contact from"@/components/contact";
import Sidebar1 from"@/components/sidebar";
import Topbar from "@/components/topbar";
export default function Favorite(){
    return <>
    <div className="flex h-[100%] items-start  md:h-auto md:flex-col">

         <div className="flex flex-1 flex-col items-center gap-[37px] md:self-stretch md:p-5">
                <Heading size="2xl" as="h2" className="ml-[30px] self-start tracking-[-0.11px] md:ml-0">
                Add New Contact
              </Heading>
              <Contact className="flex w-[95%] items-center justify-center rounded-[14px] border border-solid border-blue_gray-800_03 bg-blue_gray-900_01 px-14 py-[60px] md:w-full md:p-5" />

       
    </div>
     </div>
    </>
}