"use client"
import { Input, Img, Text, Heading } from "./";
import Link from "next/link";
interface Props {
  className?: string;
}

export default function Menuprofile({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center justify-center mt-7">
        
        <div className="flex self-start mt-1">
          <Heading size="5xl" as="h1">
            Vibol SEN
          </Heading>
        </div>
        <div className="flex self-start mb-1.5 py-1.5">
          <Text as="p" className="self-end">
            vibolsen@gmail.com
          </Text>
        </div>
      </div>
      <Link href="/infor">
      <div className="flex self-stretch justify-between items-center mt-[21px] gap-5 p-2.5 bg-gray-100_01 rounded-lg">
        <Text as="p" className="mt-[7px] mb-1.5 !text-black-900_02 text-center">
          Account info
        </Text>
        <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[14px] mr-[22px] md:mr-0" />
      </div>
      </Link>
      <Link href="/historyorderlist">
      <div className="flex self-stretch justify-between items-center mt-2.5 gap-5 p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          My order
        </Text>
        <Img src="images/img_symbol.svg" alt="symbol_one" className="h-[14px] mr-6 md:mr-0" />   
      </div>
      </Link>
      <Link href="/address">
      <div className="flex self-stretch justify-between items-center mt-2.5 gap-5 p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          My address
        </Text>
        <Img src="images/img_settings.svg" alt="settings_one" className="h-[14px] mr-6 md:mr-0" />
      </div>
      </Link>
      <Link href="/changepass">
      <div className="flex self-stretch items-center mt-2.5 gap-[9px] p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          Change password
        </Text>
        <Img src="images/img_settings.svg" alt="settings_three" className="h-[14px]" />
      </div>
      </Link>
       <Link href="/logoutprofile">
      <div className="flex self-stretch items-center mt-2.5 gap-[9px] p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          Log Out
        </Text>
        <Img src="images/img_settings.svg" alt="settings_three" className="h-[14px]" />
      </div>
      </Link>

    </div>
  );
}
