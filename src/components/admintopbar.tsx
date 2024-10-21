"use client"
import {useState} from "react";
import { CloseSVG } from "../assets/images";
import { Img, Heading,Input } from ".";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function AdminTopbar() {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <header>
      <div className="flex w-full bg-white-A700 items-center justify-between gap-5  rounded-lg p-[13px] md:flex-col">
        <div className="ml-[17px] flex w-[38%] items-center justify-center gap-6 md:ml-0 md:w-full sm:flex-col">
          <Img src="/images/img_megaphone.svg" alt="megaphonethree" className="h-[25px] w-[24px] sm:w-full" />
          <Input
                name="Group 8"
                placeholder={`Search for something`}
                value={searchBarValue}
                onChange={(e: string) => setSearchBarValue(e)}
                prefix={
                  <Img
                    src="/images/img_search.svg"
                    width={20}
                    height={20}
                    alt="search"
                    className="h-[20px] w-[20px] cursor-pointer"
                  />
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#718ebfff" />
                  ) : null
                }
                className="gap-[15px] text-indigo-200_01 sm:px-5"
              />
        </div>
        <div className="mr-[17px] flex w-[33%] items-center justify-center md:mr-0 md:w-full sm:flex-col">
          <div className="relative mt-[5px] h-[31px] w-[10%] self-start sm:w-full">
            <Img
              src="/images/img_checkmark_blue_a200_07.svg"
              alt="checkmarkone"
              className="absolute bottom-[0.00px] left-[0.00px] m-auto h-[25px] w-[24px]"
            />
            <div className="absolute right-[0.00px] top-[0.00px] m-auto h-[18px] w-[18px] rounded-[9px] bg-red-A200_1a_02 p-px">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[16px] w-[16px] rounded-lg bg-red-A200_03" />
              <Heading
                size="xs"
                as="p"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max !font-bold"
              >
                6
              </Heading>
            </div>
          </div>
          <div className="ml-[25px] flex rounded-[5px] bg-blue_gray-100_15 sm:ml-0">
            <Img
              src="/images/img_uk_flag.png"
              alt="ukflagoneone"
              className="h-[27px] w-full rounded-[5px] object-cover md:h-auto"
            />
          </div>
          {/* <SelectBox
            shape="square"
            indicator={<Img src="/images/img_drop_down.png" alt="Drop Down" className="h-[4px] w-[8px]" />}
            name="language"
            placeholder={`English`}
            options={dropDownOptions}
            className="mb-[9px] ml-4 w-[22%] gap-px self-end font-nunitosans font-semibold text-blue_gray-50_13 sm:ml-0 sm:w-full"
          /> */}
          <div className="ml-[26px] flex items-center sm:ml-0">
            <Img
              src="/images/img_man_438081_960_720.png"
              alt="man438081960"
              className="h-[44px] w-[44px] object-cover"
            />
            <div className="ml-5 flex flex-col items-start">
              <Heading as="p" className='text-white-A700'>Moni Roy</Heading>
              <Heading size="xs" as="p" className='text-white-A700'>
                Admin
              </Heading>
            </div>
            <div className="ml-[26px] flex flex-col items-center justify-center rounded-[9px] border border-solid border-blue_gray-100_16 p-1.5">
              <Img src="/images/img_chevron_down.svg" alt="chevrondownone" className="h-[4px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-[#8BA3CB] "/>
    </header>
  );
}
