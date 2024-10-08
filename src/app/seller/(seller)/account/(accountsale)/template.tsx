"use client";
import React from "react";
import { Text } from "@/components"
import Link from "next/link";
export default function Account(
  { children }: { children: React.ReactNode }) {
  return (<>
    <div className="mx-[2%] flex w-full flex-col items-end justify-center rounded-[25px] bg-white-A700 p-[30px] sm:p-5 ">
      <div className="ml-[7px] flex flex-col items-center self-stretch  p-[20px]">
        <div className="p-[20px] ml-10 flex w-[38%] flex-wrap justify-between gap-5 md:ml-0 md:w-full ">
          <Link href="/seller/account/profile"><Text as="p" className="self-start !font-medium !text-indigo-A700">
            Edit Profile
          </Text>
          </Link>
          <Link href="/seller/account/preference"><Text as="p" className="self-start !font-medium !text-indigo-300">
            Preferences
          </Text>
          </Link>
          <Link href="/seller/account/security"><Text as="p" className="self-end !font-medium !text-indigo-300">
            Security
          </Text>
          </Link>
        </div>
        {children}

      </div>
    </div>

  </>

  )
}