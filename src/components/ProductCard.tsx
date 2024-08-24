"use client";

import { Button, Img, Heading, Text } from "./";
import Link from "next/link";
import { Product, producttype } from "@/common.type";
import AddToCartButton from "./addtocartbutton";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/navigation";
import { RatingBar } from "./ratingbar"; // Import RatingBar
import axios from "axios";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
interface Props {
  product: Product;
}

export default function ProductCard({product}: Props) {
  const {data:user} = useRetrieveUserQuery();
  const router = useRouter();
  const { cartItems, setCartItems } = useCart();

  const handleAddToCart = async () => {
      try {
        const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/create/${user?.id}/?productId=${product.id}&qty=${1}`)
      }catch(err){
        console.error(err)
      }

  };
  const handleAddToFav = async () => {
      try {
        const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/create/${user?.id}/?productId=${product.id}`)
      }catch(err){
        console.error(err)
      }

  };

  return (
    <div className="px-5 w-[251px] h-full bg-white-A700 py-5 shadow-md">
      <div className="">
                  <div className="w-full h-full p-3 ">
                    <Link href={`/product/${product.id}`}>
                    <img
                      src={`http://localhost:8000/${product.image}`}
                      alt="TDX Sinkers"
                      className="object-cover hover:border-2 border-gray-200"
                    />
                    </Link>
                  </div>        
                {/* Product info */}
                <div className=" p-4">
                  <h3 className="overflow-hidden text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">rating rank</p>
                  <div className="flex items-center">
                    <RatingBar
                      value={4}
                      starCount={5}
                      color="grey"
                      activeColor="#DE7921"
                      size={24}
                      isEditable={false}
                    />
                    <span className="ml-2 text-sm text-gray-500 mt-2">(121)</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handleAddToCart} 
                      className="flex-1 bg-[#FFD814] text-white text-sm py-2 rounded-full hover:bg-green-600">
                      Add To Cart
                    </button>
                    <button
                      onClick={handleAddToFav} 
                      className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                      Add Shortlist
                    </button>
                  </div>
                </div>
          </div>
      </div>
  );
}
