import React from "react";
import { Button, Img, Heading, RatingBar } from "./";

interface Props {
  className?: string;
}

export default function Productcardadmin({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="relative h-[317px] self-stretch md:h-auto">
        <Img src="images/img_bitmap_317x361_2.png" alt="image" className="h-[317px] w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[92%] justify-between gap-5">
          <Button color="blue_gray_800_22" size="7xl" className="w-[41px] rotate-[180deg] rounded-[20px]">
            <Img src="images/img_arrow_left_white_a700.svg" />
          </Button>
          <Button color="blue_gray_800_22" size="7xl" className="w-[41px] rounded-[20px]">
            <Img src="images/img_arrow_right.svg" />
          </Button>
        </div>
      </div>
      <div className="flex w-[89%] items-start justify-between gap-5">
        <div className="flex w-[57%] flex-col items-start">
          <Heading size="2xl" as="h1" className="!font-bold">
            Apple Watch Series 4{" "}
          </Heading>
          <Heading size="lg" as="h2" className="mt-0.5 !font-bold !text-blue-A200_19">
            $120.00
          </Heading>
          <div className="mt-[7px] flex w-[69%] items-center gap-1 md:w-full">
            <RatingBar
              value={1}
              isEditable={true}
              color="#3f4a5cb0"
              activeColor="#ff9500"
              size={16}
              className="flex flex-1 justify-between self-start"
            />
            <Heading as="h3" className="tracking-[-0.17px] !text-white-A700_cc_06">
              (131)
            </Heading>
          </div>
          <Button
            color="blue_gray_700_b2_04"
            size="6xl"
            shape="square"
            className="mt-[18px] min-w-[126px] font-nunitosans font-bold text-white-A700 sm:px-5"
          >
            Edit Product
          </Button>
        </div>
        <Button
          color="blue_gray_700_b2_04"
          size="9xl"
          shape="circle"
          className="w-[44px] rotate-[180deg] !rounded-[22px]"
        >
          <Img src="images/img_favorite.svg" />
        </Button>
      </div>
    </div>
  );
}
