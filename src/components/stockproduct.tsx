import React from "react";
import { Img, Heading } from "./";

interface Props {
  className?: string;
}

export default function Stockpro({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex w-[53%] items-start justify-between gap-5 md:w-full sm:flex-col">
        <div className="flex w-[48%] items-start justify-between gap-5 sm:w-full">
          <Img src="images/img_bitmap_60x60.png" alt="bitmap_one" className="h-[64px] w-[31%] object-cover" />
          <Heading as="h1" className="mt-5 text-center">
            Apple Watch Series 4
          </Heading>
        </div>
        <Heading as="h2" className="mt-[19px] !text-white-A700_e5">
          Digital Product
        </Heading>
        <Heading as="h2" className="mt-[19px] !text-white-A700_e5">
          $690.00
        </Heading>
      </div>
      <Heading as="h2" className="mt-[19px] !text-white-A700_e5">
        63
      </Heading>
      <div className="mt-[19px] flex w-[8%] justify-center gap-4 md:w-full">
        <div className="h-[20px] w-[20px] rounded-[10px] bg-black-900" />
        <div className="h-[20px] w-[20px] rounded-[10px] bg-gray-500_05" />
        <div className="h-[20px] w-[20px] rounded-[10px] bg-red-200" />
      </div>
      <Img
        src="images/img_television_blue_gray_800_02.svg"
        alt="television_one"
        className="mb-auto mt-5 h-[32px] w-[9%] md:w-full"
      />
    </div>
  );
}
