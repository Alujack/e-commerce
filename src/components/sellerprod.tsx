import React from "react";
import { Heading, RatingBar, Button, Img } from "./";

interface Props {
  className?: string;
}

export default function Sellerprod({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="mt-[18px] flex items-center gap-1.5 self-stretch">
        <Img
          src="images/img_mask.png"
          width={219}
          height={180}
          alt="Mask"
          className="h-[180px] w-[78%] rounded-tl-[14px] rounded-tr-[14px] object-cover"
        />
      </div>
      <div className="mb-[18px] flex w-[89%] flex-col items-start">
        <div className="flex items-start justify-between gap-5 self-stretch">
          <Heading size="xl" as="h1" className="!text-gray-900_14">
            Apple Watch Series 4{" "}
          </Heading>
          <Button size="lg" shape="square" className="w-[39px] rotate-[180deg]">
            <Img src="images/img_checkmark_gray_50_09.svg" width={39} height={35} />
          </Button>
        </div>
        <Heading size="md" as="h2" className="relative mt-[-1px] !text-blue-A200_06">
          $120.00
        </Heading>
        <div className="mt-2.5 flex w-[41%] items-start gap-[3px] md:w-full">
          <RatingBar
            value={1}
            isEditable={true}
            color="#0000006c"
            activeColor="#ff9500"
            size={11}
            className="flex flex-1 justify-between"
          />
          <Heading as="h2" className="tracking-[-0.17px] !text-black-900_66_03">
            (131)
          </Heading>
        </div>
        <Heading as="h2" className="mt-[13px] !font-bold !text-gray-900_14">
          Edit Product
        </Heading>
      </div>
    </div>
  );
}
