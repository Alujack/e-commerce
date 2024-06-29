"use client"
import React from "react";
import { Button, Input, Text, Heading, Img } from "@/components";
import { getSession } from "next-auth/react";

async function Profileinformation() {
    const session = await getSession();
  return (
   
      <div className="flex md:flex-col justify-between w-full gap-5 p-[84px] md:p-5 bg-gray-100_08 rounded-[10px]">
        <div className="flex flex-col w-[24%] md:w-full ml-14 md:ml-0">
          <div className="bg-gradient2 rounded-[77px]">
           <Img src={session?.user.image}  alt="circleimage" className="h-[150px] w-[150px] rounded-[50%]" />
            </div>
          <div className="flex flex-col items-end mt-[-2px] mb-[78px] relative">
            <div className="flex mr-[80px] p-2.5 md:mr-0">
              <Heading size="md" as="h1" className="mt-1.5 mb-1 text-center">
                Upload Photo
              </Heading>
            </div>
            <div className="flex  mr-[70px] self-center p-[5px]">
              <Text as="p" className="mt-1.5 mb-1 !text-blue-500_01 text-center">
                Photos Requirements
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end w-[67%] md:w-full mr-[35px] gap-5 md:mr-0">
          <div className="self-stretch">
            <div className="py-[5px]">
              <div className="flex sm:flex-col self-start">
                <div className="flex flex-col items-start w-full sm:w-full gap-3.5">
                  <Text as="p">
                    <span className="text-black-900_01">Full Name&nbsp;</span>
                    <span className="text-red-600">*</span>
                  </Text>
                  <Input
                    name="Input"
                    placeholder={session?.user.name}
                    className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-full sm:w-full gap-3.5">
                  <Text as="p">
                    <span className="text-black-900_01">Phone Number&nbsp;</span>
                    <span className="text-red_A700">*</span>
                  </Text>
                  <Input
                    name="Input"
                    placeholder={session?.user. phone}

                    className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3.5">
              <Text as="p">
                <span className="text-black-900_01">Email address&nbsp;</span>
                <span className="text-red-600">*</span>
              </Text>
              <Input
                name="Input"
                placeholder={session?.user. email}

                className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start mt-2.5 gap-3.5">
              <Text as="p">
                <span className="text-black-900_01">Phones&nbsp;</span>
                <span className="text-red-600">*</span>
              </Text>
              <Input
                name="Input"
                placeholder={session?.user.phone}
                className="self-stretch h-[43px] pl-3 pr-[35px] sm:pr-5 text-gray-900_21 text-sm border-blue_gray-100 border border-solid bg-white-A700 rounded-md"
              />
            </div>
          </div>
          <Button className="h-[50px] px-[35px] sm:px-5 text-white-A700 uppercase text-xs font-medium bg-green-700 min-w-[126px] rounded-[10px]">
            save
          </Button>
        </div>
      </div>
    
  );
}
export default Profileinformation