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
      <Link href="/user/infor">
      <div className="flex self-stretch justify-between items-center mt-[21px] gap-5 p-2.5 bg-gray-100_01 rounded-lg">
        <Text as="p" className="mt-[7px] mb-1.5 !text-black-900_02 text-center">
          Account info
        </Text>
      </div>
      </Link>
      <Link href="/user/historyorderlist">
      <div className="flex self-stretch justify-between items-center mt-2.5 gap-5 p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          My order
        </Text>
      </div>
      </Link>
      <Link href="/user/address">
      <div className="flex self-stretch justify-between items-center mt-2.5 gap-5 p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          My address
        </Text>
      </div>
      </Link>
      <Link href="/user/changepass">
      <div className="flex self-stretch items-center mt-2.5 gap-[9px] p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          Change password
        </Text>
      </div>
      </Link>
       <Link href="/user/logoutprofile">
      <div className="flex self-stretch items-center mt-2.5 gap-[9px] p-[9px] bg-gray-100_01 rounded-lg">
        <Text as="p" className="self-end mb-1.5 !text-black-900_02 text-center">
          Log Out
        </Text>
      </div>
      </Link>

    </div>
  );
}
