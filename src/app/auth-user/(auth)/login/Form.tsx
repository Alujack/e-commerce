"use client"

import { Text, CheckBox, Heading } from "@/components/.";
import Link from "next/link";
import { Spinner } from '@/components/common';
import { useLogin } from '@/hooks';
import { SocialButtons } from '@/components/common';
export default function Signinfrom({ ...props }) {
    const { email, password, isLoading, onChange, onSubmit } = useLogin();
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
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col items-center justify-center w-full gap-[26px] p-[27px] sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder={`Email Address`}
                            onChange={onChange}
                            className="text-4xl self-stretch mt-1 sm:px-5 !text-blue_gray-700_01 font-poppins border-gray-300_02 border border-solid rounded-[9px]"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder={`Create Password`}
                            onChange={onChange}
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
                        <button
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white-A700 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            disabled={isLoading}
                        >
                            {isLoading ? <Spinner sm /> : `Sign In`}
                        </button>

                        <SocialButtons />
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
