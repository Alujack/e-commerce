"use client";

import {useState} from "react";
import { CloseSVG } from "@/assets/images";
import { Img, Heading, Input } from "@/components";
import Stockpro from "./stockproduct";

export default function ProductStock(){

 const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <>
            <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-[10px] flex flex-row justify-between ">
                 <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Product Stock
                </h1>
                <div>
                  <button className="bg-gray-200 text-black p-4 px-8 rounded-lg hover:bg-gray-300  mr-4">
                    Export
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
                    + Add Product
                  </button>
                </div>
               
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex gap-[6px] justify-between">
                  <h1>Filter</h1>
                  <span>+</span>
                </div>
                
                <Input
                name="Group 8"
                placeholder={`Search for product`}
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
                    <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#b0b9beff" />
                  ) : null
                }
                className="gap-2 sm:pr-5 !text-blue_gray-900_01 tracking-[-0.08px] border-2 border-sky-500  rounded-[15px]"
              />
                <div>
                  <button className ="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded mr-[10px]">
                    edit
                  </button>
                   <button  className ="bg-red-500 hover:bg-blue-700 text-[#d3fee0] font-bold px-4 rounded">
                    delete
                  </button>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between gap-5 mr-[37px]">
                  <div className="ml-7 flex w-[30%] flex-wrap justify-between gap-5 self-end md:ml-0 md:w-full">
                    <Heading as="p" className="mr-[37px] self-end !font-bold md:mr-0">
                      Product
                  </Heading>          
                  </div>
                  <div className="flex w-[65%] justify-between gap-5 self-end md:w-full">
                    <Heading as="h4" className="self-end !font-bold">
                      Inventory
                    </Heading>
                     <Heading as="h4" className="self-end !font-bold">
                      Color
                    </Heading>
                    <Heading as="h5" className="self-start !font-bold">
                      Price
                    </Heading>
                    <Heading as="p" className="self-end !font-bold ">
                     ID Product
                  </Heading>
                  </div>
                  
                </div>
                 <div className="h-2 w-full bg-indigo-50_03" />
                <div className="rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800 py-6 sm:py-5 mr-[37px]">
                 <Stockpro/>
                 <Stockpro/>
                 <Stockpro/>
                 <Stockpro/>
                 <Stockpro/>
                 <Stockpro/>
                </div>
              </div>
              <div className="mb-[3px] flex items-center justify-between gap-5">
                <p className="flex flex-row">
                 <span><img src="/images/left-arrow.png" alt=""  className="h-[20px]" /></span>
                   &nbsp;	&nbsp; 1 &nbsp;	&nbsp; 2  &nbsp;	&nbsp; 3  	&nbsp;&nbsp;   4  	&nbsp;&nbsp;   5  
                   	&nbsp;&nbsp;   6  	&nbsp;&nbsp;   7  	&nbsp;&nbsp;  ...  	&nbsp;&nbsp;  123  	&nbsp; 
                 <span><img src="/images/right-arrow.png" alt=""  className="h-[20px]" /></span>     
                </p>          
                <Img src="/images/img_television.svg" alt="television_one" className="h-[30px] w-[8%]" />
              </div>///
            </div>
    </>
  );
}
