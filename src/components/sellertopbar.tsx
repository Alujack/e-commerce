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
      <div className="flex w-full flex-col items-end ">
        <div className="flex self-stretch bg-white-A700_01 p-5">
          <div className="mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
            <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
              Overview
            </h1>
            <div className="flex items-center justify-center md:w-full sm:flex-col">
              <Input
                name="Group 8"
                placeholder={`Search for something`}
                value={searchBarValue}
                onChange={(e: string) => setSearchBarValue(e)}
                prefix={
                  <Img
                    src="/images/img_search.svg"
                    width={20}
                    height={20}
                    alt="search"
                    className="h-[20px] w-[20px] cursor-pointer"
                  />
                }
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} fillColor="#718ebfff" />
                  ) : null
                }
                className="gap-[15px] text-indigo-200_01 sm:px-5"
              />
              <button className=" bg-indigo-500 text-[#d3fee0] ml-[35px] p-[10px]" onClick={() => router.push("/seller/add-product")} >+ Add Product</button>
              <button  className="ml-[27px] ">
               <img src="/images/message.png" className = "w-full"/>
              </button>
              <button className="ml-[35px] ">
                <img
              src="/images/img_checkmark_blue_a200_07.svg"
              alt="checkmarkone"
              className="w-full"
            />
              </button>
              <img
                src={user?.image}
                width={60}
                height={60}
                alt="Ellipse 40"
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
