"use client"
import {Children} from "react";
import { Heading, Text, Img, Button } from "./";
import Link from "next/link";
import { formatNumber } from "@/util/format";
interface Props {
  className?: string;
  save:number;
  price:number;
  src:string;
  qty:number
  Children?:React.ReactNode;
  

}

export default function Ordercart(
  {
    save = 100,
    price = 100,
    src="images/headphone.png",
    qty,
    Children,
   
  ...props
  }: Props) {

  return (
    <div {...props}>
      <div className="flex flex-col items-start w-[30%] md:w-full bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-start p-[5px] z-[1] bg-green-700 rounded-[7px]">
          <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
            save
          </Text>
          <Text as="p" className="self-center !text-white-A700 !font-medium">
           {formatNumber(save)}
          </Text>
        </div>
        <Link href="/product">
        <Img
          src={src}
          alt="save_one"
          className="h-[250px] w-full md:h-auto mt-[-41px] relative object-cover rounded-[10px]"
        />
        </Link>
      </div>
      <div className="flex justify-between items-start md:self-stretch flex-1">
        <div className="flex flex-col items-start w-[51%] sm:w-full py-[13px]">
          <div className="flex items-center mt-[22px] gap-1 flex-wrap">
            <Heading size="s" as="h1" className="self-end !text-amber-700 !font-black">
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            </Heading>
            <Text size="md" as="p">
              (152)
            </Text>
          </div>
          <Heading as="h2" className="mt-2.5">
            SROK Smart Phone 128GB, Oled Retina
          </Heading>
          <Heading size="3xl" as="h3" className="mt-[13px] !text-red-600 !font-semibold">
            {formatNumber(price)}
          </Heading>
          <div className="flex justify-center items-center w-[49%] md:w-full mt-4 p-2 border-gray-500_33 border border-solid rounded-[10px]">
           {Children}
          </div>
          <Button
            color="transparent"
            size="xs"
            shape="round"
            className="mt-5 !text-green-700 uppercase "
          >
            free shipping
          </Button>
          <div className="flex items-center mt-2.5 gap-[7px]">
            <Img src="images/img_checkmark.svg" alt="in_stock_one" className="h-[12px] w-[12px]" />
            <Text size="s" as="p" className="!text-black-900_02">
              In stock
            </Text>
          </div>
        </div>
        <div className="flex justify-between w-[21%] sm:w-full mt-[3px] gap-5 flex-wrap">
          <Heading
            size="xl"
            as="h2"
            className="flex justify-center items-center h-[35px] w-[35px] !text-gray-500 text-center !font-black bg-gray-300_07 rounded-[17px]"
          >
            
          </Heading>
          <Heading
            size="3xl"
            as="h3"
            className="flex justify-center items-center h-[35px] w-[35px] !text-red-600 text-center !font-black bg-red-A700_11 rounded-[17px]"
          >
            
          </Heading>
        </div>
      </div>
    </div>
  );
}
