"use client"
import axios from "axios"
import { useState, useEffect } from "react";
import { Product } from "@/common.type";
import FavouriteCart from "./FavouriteCard";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function App() {
  const [favourites, setFavourites] = useState<Product[]>([])
  const {data:user} = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  const FecthFavourite = async ()=>{
      try{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/get?user=${id}`)
        if (response)
          setFavourites(response.data)
      }catch(err){
        console.error(err)
      }
    }
  useEffect(()=>{
    FecthFavourite();
  },[])
  const deleteFav = async (productId:string) => {
      try {
        const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/favourite/delete?user=${id}&productId=${productId}`)
        FecthFavourite();
      }catch(err){
        console.error(err)
      }
      

  };
  const handleAddToCart = async (productId:string) => {
      try {
        const Response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/create/${id}/?productId=${productId}&qty=${1}`)
        if (Response){
          deleteFav(productId)
        }
      }catch(err){
        console.error(err)
      }

  };

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
                        deleteFav={deleteFav}
                        handleAddToCart={handleAddToCart}
                      />
                    ))}
        </div>
      </div>
    </main>
  );
}
