"use client";
import {Heading} from "@/components"
import Menuprofile from "@/components/menuprofile";

export default function Sale({
children    
}:{children:React.ReactNode}) {

  return (
          <div className=" mr-[10%] ml-[10%] flex md:flex-col items-center gap-[34px] p-[18px] my-[18px] rounded-[10px]">
            <div className="w-[24%] md:w-full p-[9px] my-[10px]">
              <div className="flex flex-col items-center gap-4">
                 <Heading size="8xl" as="h1" className=" capitalize !font-bold">
                  Account information
                </Heading>
                <Menuprofile className="self-stretch p-5 rounded-[10px]" />
              </div>
            </div>           
            {children}
          </div>
  );
}
