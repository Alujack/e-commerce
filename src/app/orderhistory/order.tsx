"use client";
import { useState } from "react";
import { Heading, Text, Img, Button } from "@/components";
import Link from "next/link";
import { Product } from "@/common.type";

export default function Ordercart({product}:{product:Product}) {


  return (
    <div className="w-full p-5 flex gap-5 items-start border-b border-gray-300">
      <input id="check" type="checkbox" className="h-5 w-5 self-center" />

      <div className="flex flex-row md:flex-row w-full items-start">
        <div className="w-[30%] h-[120px] md:w-[15%]">
          <Link href={`/product/${product.id}`}>
            <Img
              src={`http://localhost:8000/${product?.image}`} 
              alt="product_image"
              className=" w-full h-full object-cover rounded-[10px] self-center"
            />
          </Link>
        </div>

        <div className="flex flex-col justify-between w-[65%] md:w-[70%]">
          <Heading as="h2" className="text-lg font-semibold text-gray-800">
            {product?.name + product?.short_description}
          </Heading>
          <Text size="s" className="text-gray-600 mt-2">
            Color: White
          </Text>
          <Text size="s" className="text-gray-600">
            Size: Queen
          </Text>
        </div>

        <div className="flex flex-col items-end w-[20%] md:w-[15%]">
          <Heading size="lg" className="text-red-600 font-semibold">
           $ {product.price}
          </Heading>
          <Text className="text-sm text-gray-500 line-through mt-1">$ {product.price}</Text>
          <Button className="text-sm text-blue-600 underline mt-2">
            Clip Coupon
          </Button>
        </div>
      </div>
    </div>
  );
}
