"use client"
import Link from "next/link";
import { Text, Button, Img, CheckBox, Input, Heading } from "./";

interface Props {
  className?: string;
}

export default function Signupform({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch gap-2.5">
        <Heading size="14xl" as="h1" className="!text-black-900_01 tracking-[-2.00px] !font-poppins text-center">
          Create Free Account
        </Heading>
        <Text
          size="3xl"
          as="p"
          className="w-[97%] md:w-full !text-blue_gray-700_01 !font-poppins text-center leading-[30px]"
        >
          Clarity gives you the blocks and components you need to create a truly professional website.
        </Text>
      </div>
      <div className="flex flex-col self-stretch items-center justify-center gap-[23px] p-[25px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
        <Input
          size="3xl"
          type="text"
          name="lastName"
          placeholder={`First & Last Name`}
          className="self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <Input
          size="3xl"
          type="email"
          name="email"
          placeholder={`Email Address`}
          className="self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <Input
          size="3xl"
          type="password"
          name="password"
          placeholder={`Create Password`}
          className="self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <CheckBox
          name="shape"
          label="I agree with the Terms & Conditions of Clarity"
          id="shape"
          className="self-start ml-[5px] gap-[9px] p-px md:ml-0 text-black-900_01 font-poppins text-left text-sm"
        />
        <Button
          color="blue_A700"
          size="11xl"
          className="w-full sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins font-semibold rounded-[9px]"
          onClick= {()=>{alert("Account Created")}}
        >
          Sign Up
        </Button>
        <Button
          color="gray_50_02"
          size="11xl"
          leftIcon={<Img src="images/img_google.svg" alt="google" />}
          className="w-full gap-[11px] sm:px-5 text-blue_gray-900_03 tracking-[-0.20px] font-poppins font-semibold rounded-[10px]"
          onClick ={()=>{alert('Logged in With Google')}}
        >
          Sign up with Google
        </Button>
        <Text as="p" className="mb-[3px] !text-gray-600 !font-poppins text-center">
          <span className="text-gray-600">Already have an account?&nbsp;</span>
          <Link href="/login"><span className="text-blue-A700 font-semibold">Sign in</span></Link>
        </Text>
      </div>
    </div>
  );
}
