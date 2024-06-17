"use client"
import React from "react";
import { CloseSVG } from "@/assets//images";
import { Img, Button, Input, Heading } from "./";

interface Props {
  className?: string;
}

export default function SellerTopBar ({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex w-full flex-col bg-[#DEE1E6] items-end shadow-lg shadow-indigo-500/40 ...">
        <div className="flex self-stretch bg-white-A700_01 p-5">
          <div className="mx-auto flex w-full items-center justify-between gap-5 md:flex-col">
            <Heading size="4xl" as="h3">
              Overview
            </Heading>
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
              <button className="ml-[35px] p-[10px] rounded bg-indigo-500 ">+ Add Product</button>
              <Button shape="circle" className="ml-[27px] w-[50px] !rounded-[25px] sm:ml-0">
                <Img src="/images/img_settings.svg" width={50} height={50} />
              </Button>
              <Button shape="circle" className="ml-[35px] w-[50px] !rounded-[25px] sm:ml-0">
                <Img src="/images/img_002_notification.svg" width={50} height={50} />
              </Button>
              <Img
                src="/images/img_ellipse_40.png"
                width={60}
                height={60}
                alt="Ellipse 40"
                className="ml-[49px] h-[60px] w-[60px] rounded-[50%] sm:ml-0"
              />
            </div>
          </div>
        </div>
        <div className="h-px w-[83%] bg-indigo-50_03" />
      </div>
    </header>
  );
}
