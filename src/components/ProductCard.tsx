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

  return (
      <div className="w-[292px] mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="relative">
                  <div className="w-full h-full p-3 rounded-t-lg">
                    <img
                      src={`http://localhost:8000/${product.image}`}
                      alt="TDX Sinkers"
                      className="object-cover "
                    />
                  </div>
                  <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none">
                    <div className="bg-gray-100 p-3 ms-10 mb-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                
                {/* Product info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">5 types of shoes available</p>
                  <div className="flex items-center mt-2">
                    <RatingBar
                      value={4}
                      starCount={5}
                      color="grey"
                      activeColor="gold"
                      size={24}
                      isEditable={false}
                    />
                    <span className="ml-2 text-sm text-gray-500 mt-2">(121)</span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
                  <div className="flex mt-4 space-x-2">
                    <button onClick={handleAddToCart} className="flex-1 bg-green-500 text-white text-sm py-2 rounded-full hover:bg-green-600">
                      Add To Cart
                    </button>
                    <button className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded-full hover:bg-gray-300">
                      Add Shortlist
                    </button>
                  </div>
                </div>
          </div>
  );
}
