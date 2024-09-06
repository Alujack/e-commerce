
"use client"
import { Input } from "@/components"

import { useEffect } from "react"
import { Button } from "@/components";
import Ordercart from "@/components/ordercart";
import Totalsummery from "@/components/totalsummery";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
export default function OrderHistory() {

  const { cartItems, FetchCartItem } = useCart();
  const { data: user } = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  useEffect(() => {
    FetchCartItem(id)
  }, [])
  return (
    <main>
      <div className="flex flex-col w-screen h-screen bg-[#FFFFFF] pr-[20%] p-5">
        <p className="mb-3">Your account - Your order </p>
        <div className="flex flex-row justify-between mb-5">
          <h4 className="self-start text-3xl mt-3">Your Carts</h4>
          <div className="flex flex-row gap-3 justify-between">
            <Input
              name="search"
              placeholder={`Search Techness`}
              prefix={
                <>
                  <div className=" w-10 h-full p-2 mr-4">
                    <img src="/images/icons/search.svg" alt="icon" />
                  </div>
                </>
              }

              className="h-[40px] px-0 text-black-900_01 border-2 border-solid deep_purple_700_pink_400_01_border"
            />
            <button className="h-[40px] rounded-lg bg-[#303333] text-white-A700 px-4 p-2">Search Orders</button>
          </div>
        </div>
        <div className="flex flex-row justify-between mb-3 border-b-2 cursor-pointer border-b-slate-400 ">
          <ul className="hover:underline ">Orders</ul>
          <ul className="hover:underline ">Buy Again</ul>
          <ul className="hover:underline "> Not Yet Shipped</ul>
          <ul className="hover:underline "> Digital Orders</ul>
          <ul className="hover:underline "> Local Store Orders</ul>
          <ul className="hover:underline "> Cancelled Orders</ul>
        </div>
        <div className="flex flex-col h-96 gap-5 mt-5 items-center">
          <div className="flex flex-col bg-white-A700  mr-20 flex-start md:self-stretch gap-[15px] flex-1">
            {cartItems.length > 0 ?
              <>
                <div className="flex flex-col mt-10 ml-10 mb-10">
                  <h1 className="text-3xl font-bold text-black-900 mb-3">Order Cart</h1>
                </div>

                <div className="w-full p-5">
                  {cartItems.map((item, index) => (
                    <Ordercart
                      key={index}
                      product={item.products}
                      quantity={item.cart_item.qty}
                    // color={item.color} 
                    // size={item.size} 
                    />
                  ))}
                </div>

              </> : (<>
                <p>Looks like you haven't placed an order in the last 3 months. View orders in 2024</p>
                <div className="w-full border-l-[16px] border-2 border-gray-600 border-l-green-700_01 py-5 px-4 rounded-lg">
                  <h1>Your Orders has been Achieved</h1>
                  <p>There is no more longer appeared in your account</p>

                </div>
              </>)
            }
          </div>



        </div>
      </div>
    </main>
  )
}