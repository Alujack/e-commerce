"use client"
import { Text, Button, Input } from "@/components/";
import {useRouter} from "next/navigation";
export default function Changepass() {
  const router= useRouter();
  return (
    <div className="flex flex-col self-end md:self-stretch mb-[54px] gap-2.5 p-[9px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
      <div className="flex flex-col items-center justify-center w-[50%] md:w-full p-[19px] bg-gray-200_01 shadow-xs rounded-[20px]">
        <Text as="p" className="self-start mt-9 ml-[9px] md:ml-0 !text-black-900_01 !font-poppins">
          Old Password *
        </Text>
        <Input
          size="2xl"
          type="email"
          name="email"
          placeholder={`Email Address`}
          className="self-stretch mt-[18px] sm:px-5 !text-blue_gray-700_01 font-poppins rounded-[9px]"
        />
        <Input
          size="2xl"
          type="password"
          name="password"
          placeholder={`Confirm Password`}
          className="self-stretch mt-[18px] sm:px-5 !text-blue_gray-700_01 font-poppins rounded-[9px]"
        />
        <Button
          color="blue_A700"
          size="10xl"
          className="w-full mt-[41px] sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins font-semibold rounded-[9px]"
          onClick ={()=>router.push("/cpass")}
        >
          Next
        </Button>
        <Text as="p" className="mt-3 mb-8 !text-blue-A700 !font-poppins text-center">
          Forgot Your Password ?
        </Text>
      </div>
    </div>
  );
}
