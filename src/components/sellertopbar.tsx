"use client"
import React from "react";
import { CloseSVG } from "@/assets//images";
import { Img, Input} from "./";
import {useRouter} from "next/navigation";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
interface Props {
  className?: string;
}

export default function SellerTopBar ({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const router = useRouter();
  const { data: user } = useRetrieveUserQuery();
  return (
    <header {...props}>
      <div className="flex w-full flex-col bg-slate-200 rounded-lg items-end ">
        <div className="flex self-stretch  p-5">
          <div className="mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
            <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
              Overview
            </h1>
            <div className="flex items-center justify-center md:w-full sm:flex-col">
              <Input
              name="Group 8"
              placeholder="Search for something"
              value={searchBarValue}
              onChange={(e: string) => setSearchBarValue(e)}
              prefix={
                <Img
                  src="/images/SellerDash/Search.png"
                  width={20}
                  height={20}
                  alt="search"
                  className="h-[20px] w-[20px] cursor-pointer ml-2"
                />
              }
              suffix={
                searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#718ebfff" />
                ) : null
              }
              className="gap-[20px] text-indigo-200_01 sm:px-10 rounded-lg" // Add 'rounded-lg' for corner radius
            />

              <button 
                className="bg-indigo-500 text-[#d3fee0] ml-[35px] p-[10px] rounded-lg" 
                onClick={() => router.push("/seller/add-product")}
              >
                + Post Product
              </button>

              <button  className="ml-[27px] ">
               <img src="/images/SellerDash/Message.png" className = "w-[30px]"/>
              </button>
              <button className="ml-[35px] ">
                <img
              src="/images/SellerDash/Notification.png"
              alt="checkmarkone"
              className="w-[30px]"
            />
              </button>
              <img
                src={user?.image}
                width={60}
                height={60}
                alt="Profile"
                className="ml-[49px] h-[60px] w-[60px] rounded-full sm:ml-0"
              />
            </div>
          </div>
        </div>
        <div className="h-px  bg-indigo-50_03" />
      </div>
    </header>
  );
}
