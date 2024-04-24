"use client"
import { useState } from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Heading, Input } from "@/components";
import Topbar from "@/components/topbar";
import Inboxsidebar from "@/components/inboxsidebar";
import Messagerow from "@/components/messagerow";

export default function DarkFivePage() {
  const [searchBarValue2, setSearchBarValue2] = useState("");

  return (
    <>
  
      
         
            <div className="relative z-[1] mt-[-4px] flex flex-col items-start p-[17px]">
              <Heading size="2xl" as="h1" className="ml-[11px] mt-4 tracking-[-0.11px] md:ml-0">
                Inbox
              </Heading>
              <div className="ml-2.5 mt-[23px] flex items-center gap-[21px] self-stretch md:ml-0 md:flex-col">
                <Inboxsidebar className="flex w-[26%] flex-col items-start rounded-[14px] border border-solid border-blue_gray-800 bg-blue_gray-900_01 p-[23px] md:w-full sm:p-5" />
                <div className="flex flex-1 flex-col items-center gap-[52px] rounded-[14px] border border-solid border-blue_gray-800 bg-blue_gray-900_01 pt-6 md:self-stretch sm:gap-[26px] sm:pt-5">
                  <div className="flex w-[94%] justify-between gap-5 md:w-full md:p-5 sm:flex-col">
                    <Input
                      color="blue_gray_800_10"
                      name="search"
                      placeholder={`Search mail`}
                      value={searchBarValue2}
                      onChange={(e: string) => setSearchBarValue2(e)}
                      prefix={
                        <Img src="images/img_rewind.svg" alt="rewind" className="h-[15px] w-[15px] cursor-pointer" />
                      }
                      suffix={
                        searchBarValue2?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue2("")}
                            height={15}
                            width={15}
                            fillColor="#ffffffff"
                          />
                        ) : null
                      }
                      className="w-[42%] rounded-[20px] sm:w-full sm:pr-5"
                    />
                    <Img
                      src="images/img_other_action.svg"
                      alt="otheraction_one"
                      className="h-[40px] w-[17%] sm:w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[18px] self-stretch px-[19px] pb-[19px]">
                    <div className="flex flex-1 flex-col gap-10">
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                      <Messagerow className="flex items-center md:flex-col" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-3.5 mt-[11px] flex w-[73%] items-center justify-between gap-5 self-end md:mr-0 md:w-full">
                <Heading as="p" className="mb-[3px] self-end !text-white-A700_99_02">
                  Showing 1-12 of 1,253
                </Heading>
                <Img src="images/img_television.svg" alt="television_one" className="h-[30px] w-[10%]" />
              </div>
            </div>

    </>
  );
}
