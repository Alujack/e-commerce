"use client"
import React from "react";
import { Heading,Text, Img } from "./";

interface Props {

}

export default function Navbar({
}: Props) {
  return (
    <>
    
      <div className="flex md:flex-col justify-between items-center w-[97%]  md:w-full gap-5">
              <div className="flex px-2">
                <div className="flex items-center gap-2">
                  <Img src="images/img_location_marker.svg" alt="locationmarker" className="h-[24px] w-[24px]" />
                  <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.08px]">
                    Cambodia
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col justify-between  w-[75%] md:w-full gap-5 py-2">
    
                  <a href="/" className="px-2 py-px rounded">
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      Home
                    </Heading>
                  </a>
                  <a href="/store" className="ml-10 px-2 py-px sm:ml-0 rounded">
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      Store
                    </Heading>
                  </a>
                  <a href="#" className="ml-10 px-2 py-px sm:ml-0 rounded">
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      FQA
                    </Heading>
                  </a>
                   <a href="/orderhistory">
                  <div className="flex items-center ml-14 gap-2 sm:ml-0">
                    <Img src="images/img_cube.svg" alt="cube_one" className="h-[24px] w-[24px]" />
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                      Orders
                    </Heading>
                  </div>
                  </a>
                 <a href="#">
                <div className="flex items-center gap-1">
                  <Img src="images/img_heart.svg" alt="heart_one" className="h-[24px] w-[24px]" />
                  <Heading size="2xl" as="h6" className="self-start !text-blue_gray-900_01 tracking-[-0.10px]">
                    Favorites
                  </Heading>
                </div>
                </a>
                <a href="/cart">
                  <div className="flex items-center gap-2">
                    <Img src="images/img_shopping_cart.svg" alt="shoppingcart" className="h-[24px] w-[24px]" />
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px]">
                      Cart
                    </Heading>
                  </div>
                  </a>
                  <a href="#" className="px-2 py-px rounded">
                    <Heading size="2xl" as="h6" className="!text-blue_gray-900_01 tracking-[-0.10px] text-center">
                      Become a seller
                    </Heading>
                  </a>
                </div>
              </div>
        </>   
  );
}
