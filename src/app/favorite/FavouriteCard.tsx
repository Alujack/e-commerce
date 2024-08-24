"use client";
import { useState } from "react";
import { Heading, Text, Img, Button } from "@/components/.";
import Link from "next/link";
import { Product } from "@/common.type";
interface Props{
  product:Product;
  deleteFav:(productId:string)=>void;
  handleAddToCart:(productId:string)=>void;

}
export default function FavouriteCart({product, deleteFav, handleAddToCart}:Props) {

 
  return (
    <div className="w-full p-5 flex gap-5 items-start border-b border-gray-300 mb-5">
      <input id="check" type="checkbox" className="h-5 w-5 self-center" />

      <div className="flex flex-row md:flex-row w-full items-start">
       
          <Link href={`/product/${product.id}`}>
             <div className="h-[150px] w-[150px] rounded-[10px] self-center ">
                <Img
              src={`http://localhost:8000/${product?.image}`} // Replace with actual product image source
              alt="product_image"
              className=" object-cover "
            /> 
            </div>
          </Link>
       

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
          <Text size="s" className="text-gray-600 mt-2">
            Color: White
          </Text>
          <Text size="s" className="text-gray-600">
            Size: Queen
          </Text>
          <div className="flex flex-row justify-between items-center w-[25%] mt-3">
            <p onClick={()=>handleAddToCart(product.id)} className="text-gray-600 text-md cursor-pointer hover:underline">
            Add To Cart
            </p>
            <p className="text-gray-600 text-md cursor-pointer hover:underline">
              Buy Now
            </p>
            <p onClick={()=>deleteFav(product.id)} className="text-gray-600 text-md cursor-pointer hover:underline">
              Delete
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end w-[20%] md:w-[15%]">
          <Heading size="lg" className="text-red-600 font-semibold">
           $ {product.price}
          </Heading>
          <Text className="text-sm text-gray-500 line-through mt-1">$ {product.price}</Text>
        </div>
      </div>
    </div>
  );
}
