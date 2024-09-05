import React from "react"
import {Text, Heading } from "@/components";
import Link from "next/link";
import { PROFILE_MENU } from "@/constants/link";

async function App({
children    
}:{children:React.ReactNode}) {
  return (
          <div className=" bg-white-A700 flex h-screen py-10">
            <div className="w-[24%]">
              <div className="flex flex-col items-center gap-4">
                 <Heading size="8xl" as="h1" className=" capitalize !font-bold">
                  Account information
                </Heading>
                  <div className="self-stretch p-5 rounded-[10px]"> 
                        {PROFILE_MENU.map((menu, index)=>(    
                        <div key={index} className="flex self-stretch active:bg-sky-500 justify-between hover:bg-sky-500 items-center mt-[10px]  bg-gray-100_01 rounded-lg p-[10px]">
                          <Text as="p" className=" mb-1.5 !text-black-900_02 text-center">
                            <Link href={menu.href} >{menu.label} </Link>
                          </Text>
                        </div>
                       
                        ))} 
                   </div>
              </div>
            </div>
            <div className="w-[76%]">       
            {children}
            </div>    
          </div>
  );
}
export default App;