"use client"
import {useRouter} from "next/navigation";
import { Text, Button, Img, CheckBox, Input, Heading } from "./";

interface Props {
  className?: string;
}

export default function Signinfrom({ ...props }: Props) {
  const router = useRouter();
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center gap-2.5">
        <Heading size="14xl" as="h1" className="!text-black-900_01 tracking-[-2.00px] !font-poppins text-center">
          Sign in to your account
        </Heading>
        <Text
          size="3xl"
          as="p"
          className="w-[78%] md:w-full !text-blue_gray-700_01 !font-poppins text-center leading-[30px]"
        >
          Clarity gives you the blocks and components you need to create a truly professional website.
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center w-[84%] gap-[26px] p-[27px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
        <Input
          size="4xl"
          type="email"
          name="email"
          placeholder={`Email Address`}
          className="self-stretch mt-1 sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <Input
          size="4xl"
          type="password"
          name="password"
          placeholder={`Create Password`}
          className="self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <div className="flex self-stretch justify-between gap-5">
          <CheckBox
            name="rememberme"
            label="Remember me"
            id="rememberme"
            className="self-start gap-[9px] p-px text-black-900_01 font-poppins text-left text-sm"
          />
          <a href="#" className="self-end">
            <Text as="p" className="!text-black-900_01 !font-poppins">
              Forgot password?
            </Text>
          </a>
        </div>
        <Button
          color="blue_A700"
          size="12xl"
          className="w-full sm:px-5 text-white-A700 tracking-[-0.20px] font-poppins font-semibold rounded-[9px]"
          onClick={()=>router.push("/")}
        >
          Sign In
        </Button>
        <Button
          color="gray_50_02"
          size="12xl"
          leftIcon={<Img src="images/img_google.svg" alt="google" />}
          className="w-full gap-px sm:px-5 text-blue_gray-900_03 tracking-[-0.20px] font-poppins font-semibold rounded-[10px]"
        >
          Sign in with Google
        </Button>
        <Text as="p" className="mb-1 !text-gray-600 !font-poppins text-center">
          <span className="text-gray-600">Don&#39;t have an account?&nbsp;</span>
          <span className="text-blue-A700 font-semibold">Sign up</span>
        </Text>
      </div>
    </div>
  );
}
