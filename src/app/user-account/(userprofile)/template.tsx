import {Text, Heading } from "@/components";
import Link from "next/link";
import { PROFILE_MENU } from "@/constants/link";
import { getSession } from "next-auth/react";

async function App({
children    
}:{children:React.ReactNode}) {
const session= await getSession();
  return (
          <div className=" mr-[10%] ml-[10%] flex md:flex-col items-center gap-[34px] p-[18px] my-[18px] rounded-[10px]">
            <div className="w-[24%] md:w-full p-[9px] my-[10px]">
              <div className="flex flex-col items-center gap-4">
                 <Heading size="8xl" as="h1" className=" capitalize !font-bold">
                  Account information
                </Heading>
                  <div className="self-stretch p-5 rounded-[10px]">
                        <div className="flex flex-col self-stretch items-center justify-center mt-7">
                          
                          <div className="flex self-start mt-1">
                            <Heading size="5xl" as="h1">
                            
                            </Heading>
                          </div>
                          <div className="flex self-start mb-1.5 py-1.5">
                            <Text as="p" className="self-end">
                              {session?.user.email}
                            </Text>
                          </div>
                        </div>
                        {PROFILE_MENU.map((menu)=>(
                          
                        <div className="flex self-stretch active:bg-sky-500 justify-between hover:bg-sky-500 items-center mt-[10px]  bg-gray-100_01 rounded-lg p-[10px]">
                          <Text as="p" className=" mb-1.5 !text-black-900_02 text-center">
                            <a href={menu.href} className="  ">{menu.label} </a>
                          </Text>
                        </div>
                       
                        ))} 
                   </div>
              </div>
            </div>           
            {children}
          </div>
  );
}
export default App;