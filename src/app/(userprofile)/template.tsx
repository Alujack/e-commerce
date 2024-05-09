"use client";
import {Heading} from "@/components"
import Menuprofile from "@/components/menuprofile";

export default function Sale({
children    
}:{children:React.ReactNode}) {

  return (
     <div className="w-full px-14 py-[95px] md:p-5 bg-gray-300_07">
        <div className="h-[815px] w-full md:h-auto p-[50px] mx-auto my-[9px] md:p-5 bg-[url(/images/img_profile_815x1200.png)] bg-cover bg-no-repeat max-w-[99%]">
          <div className="flex md:flex-col items-center gap-[34px] p-[18px] my-[18px] bg-white-A700_33 rounded-[10px]">
            <div className="w-[24%] md:w-full p-[9px] my-11">
              <div className="flex flex-col items-center gap-4">
                 <Heading size="8xl" as="h1" className=" capitalize !font-bold">
                  Account information
                </Heading>
                <Menuprofile className="self-stretch p-5 bg-gray-50 rounded-[10px]" />
              </div>
            </div>
            
            {children}
         
          </div>
        </div>
      </div>
  );
}
