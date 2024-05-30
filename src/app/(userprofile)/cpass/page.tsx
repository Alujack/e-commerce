"use client"
import { Button, Input, Text } from "@/components";


export default function Confirmform() {
  return (
    <div className="flex flex-col self-end md:self-stretch mb-[54px] gap-2.5 p-[9px] md:p-5 bg-gray-100_02 flex-1 rounded-[10px]">
      <div className="flex flex-col items-start w-[49%] md:w-full p-[19px] bg-gray-200_01 shadow-xs rounded-[20px]">
        <Text as="p" className="mt-9 ml-[9px] md:ml-0 !text-black-900_01 !font-poppins">
          Create New Passwords *
        </Text>
       <Input
          size="2xl"
          type="password"
          name="confirmpassword"
          placeholder={`Confirm Password`}
          className="self-stretch mt-[21px] sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <Input
          size="2xl"
          type="password"
          name="confirmpassword"
          placeholder={`Confirm Password`}
          className="self-stretch mt-[21px] sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <Button
          color="blue_A700"
          size="10xl"
          className="w-full mt-[41px] mb-[66px] sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins font-semibold rounded-[9px]"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
