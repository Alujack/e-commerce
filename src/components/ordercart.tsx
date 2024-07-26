"use client"
import {useState} from "react";
import { Heading, Text, Img, Button } from "./";
import Link from "next/link";
import { producttype } from "@/common.type";
import {useCart} from "@/context/cartcontext"

interface Props {
  className?: string;
  save:number;
  price:number;
  src:string;
  item:producttype;
  index:number

}

export default function Ordercart(
  {
    item,
    save = 100,
    price = 100,
    src="images/headphone.png",
    index,
   
  ...props
  }: Props) {
 const [qty, setQty] = useState(1); 
 const {removeFromCart} = useCart();
 item.qty = qty;
  return (
    <div {...props}>
      <div className="flex flex-col items-start w-[30%] md:w-full bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-start p-[5px] z-[1] bg-green-700 rounded-[7px]">
          <Text size="xs" as="p" className="ml-1 md:ml-0 !text-white-A700 uppercase">
            save
          </Text>
          <Text as="p" className="self-center !text-white-A700 !font-medium">
           {Number(save)}
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
            {Number(price)}
          </Heading>
          <div className="flex justify-center items-center w-[49%] md:w-full mt-4 p-2 border-gray-500_33 border border-solid rounded-[10px]">
          <Button onClick={()=>setQty(qty-1)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </Button>
            <div className="flex justify-center flex-1">
              <div className="flex">
                <Heading size="s" as="h4" className="self-start text-center !font-bold">
                  {Number(qty)}
                </Heading>
              </div>
            </div>
            <Button onClick={()=>setQty(qty+1)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            </Button>
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
        <div className="flex justify-between w-[20%] sm:w-full mt-[3px] gap-5 flex-wrap">
          <Button  onClick= {()=>removeFromCart(index)}>
           <img src="/images/close.png" alt=""  className="items-center w-[23px] "  />
          </Button>
        </div>
      </div>
    </div>
  );
}
