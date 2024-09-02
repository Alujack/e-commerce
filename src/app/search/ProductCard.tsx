"use client";

import Link from "next/link";
import { Product } from "@/common.type";
import { useCart } from "@/context/cartcontext";
import { useRouter } from "next/navigation";
import { RatingBar } from "@/components/ratingbar"; // Import RatingBar
import axios from "axios";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const { data: user } = useRetrieveUserQuery();

    const handleAddToCart = async () => {
        try {
            const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/create/${user?.id}/?productId=${product.id}&qty=${1}`)
        } catch (err) {
            console.error(err)
        }

    };
    const handleAddToFav = async () => {
        try {
            const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/create/${user?.id}/?productId=${product.id}`)
        } catch (err) {
            console.error(err)
        }

    };

    return (
        <div className=" shadow-md border-[1.5px] h-[306px] border-gray-200">
            <div className="flex flex-row">
                <div className="flex w-[321px] h-[306px] items-center bg-[#F6F6F6] px-3">
                    <Link href={`/product/${product.id}`}>
                        <img
                            src={`http://localhost:8000/${product.image}`}
                            alt="TDX Sinkers"
                            className="object-cover"
                        />
                    </Link>
                </div>
                {/* Product info */}
                <div className=" p-4 w-full ml-10">
                    <h3 className="overflow-hidden text-md ">{product.name + product.short_description}</h3>
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
                    <p className="text-xl font-bold text-gray-900 mt-2">$&nbsp;{product.price}</p>
                    <div className="flex space-x-2">
                        <button
                            onClick={handleAddToCart}
                            className="w-[106px] bg-[#FFD814] text-white text-sm py-2 rounded-full hover:bg-green-600 p-2">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
