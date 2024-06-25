
import { Text, Button, Img, CheckBox, Heading } from "@/components/.";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
 

export default function Signinfrom({ ...props }) {
    const router = useRouter();
    const [error, setError] = useState("");
    const {status: sessionStatus } = useSession();
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
            console.log("you are signin ")
        }
    }, [sessionStatus, router]);
 
    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
 
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
    
        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }
 
        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }
 
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
 
        if (res?.error) {
            setError("Invalid email or password");
            if (res?.url) router.replace("/dashboard");
        } else {
            setError(error);
        }
    }
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
       <form  onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center w-[84%] gap-[26px] p-[27px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
         
          <input
          type="email"
          name="email"
          placeholder={`Email Address`}
          className="text-4xl self-stretch mt-1 sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <input
          type="password"
          name="password"
          placeholder={`Create Password`}
          className="text-4xl self-stretch sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
        />
        <div className="flex self-stretch justify-between gap-2">
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
          type="submit"
        >
          Sign In
        </Button>
        <Button
          color="gray_50_02"
          size="12xl"
          leftIcon={<Img src="/images/img_google.svg" alt="google" />}
          className="w-full gap-px sm:px-5 text-blue_gray-900_03 tracking-[-0.01px] font-poppins font-semibold rounded-[10px]"
          onClick={()=>signIn("google")}
        >
          Sign in with Google
        </Button>
        <Text as="p" className="mb-1 !text-gray-600 !font-poppins text-center">
          <span className="text-gray-600">Don&#39;t have an account?&nbsp;</span>
          <Link href="/auth-user/register"><span className="text-blue-A700 font-semibold">Sign up</span></Link>
        </Text>
       
      </div>
       </form>
    </div>
    </div>
  );
}
