"use client"
import AddToCartButton from "@/components/addtocartbutton";
import { Heading} from "@/components";
import {favorite} from "@/constants/product";
import axios from "axios"
import { useState, useEffect } from "react";
import { Product } from "@/common.type";
import FavouriteCart from "./FavouriteCard";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function App() {
  const [favourites, setFavourites] = useState<Product[]>([])
  const {data:user} = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  useEffect(()=>{
    const FecthFavourite = async ()=>{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/get?user=${id}`)
      if (response)
        setFavourites(response.data)
    }
    FecthFavourite();
  },[])

  return (
    <main>
      <div className="flex flex-col bg-white-A700 p-[30px]">
        <div className="w-full">
          <h1 className="text-2xl font-bold flex text-start">
            My Favorites
          </h1>
        </div>
        <div className="flex flex-col p-[25px] gap-8">
          {favourites.map((item, index) => (
                      <FavouriteCart
                        key={index}
                        product={item}
                      />
                    ))}
        </div>
      </div>
    </main>
  );
}
