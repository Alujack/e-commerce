import React from "react";
import { Img, Heading } from "@/components";

export default function Stockpro() {
  return (
      <div className="ml-7 flex flex-row justify-between items-center mb-[10px]">
        <input type="checkbox"/>
        <div className="w-[25%] flex justify-between gap-5 self-start ">
          <Img src="/images/product/1.headphone.png" alt="headphone" className="h-[64px] w-[31%] object-cover" />
          <Heading as="h1" className="mt-5 text-center">
            Head Phone  <br/>
            <p>Apple</p>
          </Heading>
        </div>     
       <div className="flex w-[65%] justify-between gap-5">
          <Heading as="h4" className="top-0 self-end !font-bold">
                45
            </Heading>
            <Heading as="h4" className="self-end !font-bold">
                white
            </Heading>
            <Heading as="h5" className="self-end !font-bold">
                100
            </Heading>
            <Heading as="p" className="self-end !font-bold md:mr-0">
                1002
            </Heading>
        </div>
      </div>
  );
}
