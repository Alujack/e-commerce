"use client";
import {useState} from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Heading, Input } from "@/components";
import Topbar from "@/components/topbar"
import Sidebar1 from "@/components/sidebar";
import Stockproduct from "@/components/stockproduct";

export default function DarkSixteenPage() {
  const [searchBarValue2, setSearchBarValue2] = useState("");

  return (
    <>
            <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-0.5 flex items-center justify-between gap-5 sm:flex-col">
                <Heading size="2xl" as="h1" className="tracking-[-0.11px]">
                  Product Stock
                </Heading>
                <Input
                  color="blue_gray_800_15"
                  size="sm"
                  name="search"
                  placeholder={`Search product name`}
                  value={searchBarValue2}
                  onChange={(e: string) => setSearchBarValue2(e)}
                  prefix={<Img src="images/img_rewind.svg" alt="rewind" className="h-[15px] w-[15px] cursor-pointer" />}
                  suffix={
                    searchBarValue2?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue2("")} height={15} width={15} fillColor="#ffffffff" />
                    ) : null
                  }
                  className="w-[22%] gap-3 text-white-A700_b2_02 sm:w-full sm:pr-5"
                />
              </div>
              <div>
                <div className="flex items-center justify-between gap-5 rounded-tl-lg rounded-tr-lg border border-solid border-blue_gray-800 bg-blue_gray-800_05 p-[11px] md:flex-col">
                  <div className="ml-7 flex w-[20%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                    <Heading as="h2" className="self-end !font-bold">
                      Image
                    </Heading>
                    <Heading as="h3" className="self-start !font-bold">
                      Product Name
                    </Heading>
                  </div>
                  <div className="flex w-[50%] justify-between gap-5 self-end md:w-full">
                    <Heading as="h4" className="self-end !font-bold">
                      Category
                    </Heading>
                    <Heading as="h5" className="self-start !font-bold">
                      Price
                    </Heading>
                    <div className="flex w-[41%] flex-wrap justify-between gap-5 self-start">
                      <Heading as="h6" className="!font-bold">
                        Piece
                      </Heading>
                      <Heading as="p" className="!font-bold">
                        Available Color
                      </Heading>
                    </div>
                  </div>
                  <Heading as="p" className="mr-[37px] self-end !font-bold md:mr-0">
                    Action
                  </Heading>
                </div>
                <div className="flex flex-col gap-6 rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 bg-blue_gray-900_01 py-6 sm:py-5">
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                 <Stockproduct className="flex w-[100%] items-start justify-between gap-5 md:w-full md:flex-col" />
                
                </div>
              </div>
              <div className="mb-[3px] flex items-center justify-between gap-5">
                <Heading as="p" className="mb-[3px] self-end !text-white-A700_99_04">
                  Showing 1-07 of 78
                </Heading>
                <Img src="/images/img_television.svg" alt="television_one" className="h-[30px] w-[8%]" />
              </div>
            </div>
    </>
  );
}