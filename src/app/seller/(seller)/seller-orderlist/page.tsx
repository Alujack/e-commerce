"use client";

import {useState} from "react";
import { CloseSVG } from "@/assets/images";
import { Img,Input } from "@/components";
import List from "./list"
export default function ProductStock(){

 const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <>
            <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="flex flex-row justify-between items-center ml-[5%] mr-[5%] ">
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
                <div className="ml-[7%] flex items-center justify-between gap-5 mr-[15%] ">  
                    <div className="w-[25%] flex justify-between gap-5 self-start ">
                       <h4 className="self-start !font-bold">ID Product </h4>
                    </div>
                  <div className="flex w-full justify-between gap-5 self-end mb-[10px]">
                    <h4 className="self-start !font-bold"> Date</h4>    
                    <h4 className="self-start !font-bold">Customer</h4>
                    <h4  className="self-start !font-bold ">Payment Status</h4>
                    <h4  className="self-start !font-bold ">Order Status</h4>
                    <h4 className="self-start !font-bold ">Total</h4>
                  </div>
                </div>
                <div className="gap-6 rounded-bl-[14px] rounded-br-[14px] border border-solid border-blue_gray-800  py-6 sm:py-5">
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                </div>
              </div>
              {/* <div className="mb-[3px] flex items-center justify-between gap-5">
                <p className="flex flex-row">
                 <span><img src="/images/left-arrow.png" alt=""  className="h-[20px]" /></span>
                   &nbsp;	&nbsp; 1 &nbsp;	&nbsp; 2  &nbsp;	&nbsp; 3  	&nbsp;&nbsp;   4  	&nbsp;&nbsp;   5  
                   	&nbsp;&nbsp;   6  	&nbsp;&nbsp;   7  	&nbsp;&nbsp;  ...  	&nbsp;&nbsp;  123  	&nbsp; 
                 <span><img src="/images/right-arrow.png" alt=""  className="h-[20px]" /></span>     
                </p>          
                <Img src="/images/img_television.svg" alt="television_one" className="h-[30px] w-[8%]" />
              </div> */}
            </div>
    </>
  );
}
