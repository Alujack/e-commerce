
"use client"
import { Input } from "@/components"
import { useEffect, useState } from "react"
import { Heading, Text, Img, Button } from "@/components";
import Link from "next/link";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Product } from "@/common.type";
import axios from "axios";
interface CartItems {
  products: Product[];
}
export default function OrderHistory() {

  const { data: user } = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  const [cartItems, setCartItems] = useState<CartItems[]>([])
  useEffect(() => {
    const FetchCartItem = async () => {
      try {
        const response = await axios.get<CartItems[]>(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/order/${id}/`)
        if (response) {
          setCartItems(response.data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    FetchCartItem();
  }, [id])
  return (
    <main>
      <div className="flex flex-col w-screen bg-[#FFFFFF] pr-[20%] p-5">
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
        <div className="flex flex-col  gap-5 mt-5 items-center">
          <div className="flex flex-col bg-white-A700  mr-15 flex-start md:self-stretch flex-1 mb-20">
            {cartItems.length > 0 ?
              <>
                <div className="flex flex-col mt-10 ml-10 mb-10">
                  <h1 className="text-3xl font-bold text-black-900 mb-3">Order Cart</h1>
                </div>

                <div className="w-full p-5">
                  {cartItems.map((item, index) => (
                    item.products.map((item) => (
                      <div className="w-full p-5 flex gap-5 items-start border-b border-gray-300 ">
                        <div className="flex flex-row md:flex-row w-full items-start">
                          <div className="w-[30%] h-[120px] md:w-[15%]">
                            <Link href={`/product/${item.id}`}>
                              <Img
                                src={`http://localhost:8000/${item.image}`}
                                alt="product_image"
                                className=" object-cover rounded-[10px] self-center"
                              />
                            </Link>
                          </div>

                          <div className="flex flex-col justify-between w-[65%] md:w-[70%]">
                            <Heading as="h2" className="text-lg font-semibold text-gray-800">
                              {item.name + item.short_description}
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
                              $ {item.price}
                            </Heading>
                            <Text className="text-sm text-gray-500 line-through mt-1">$ {item.price}</Text>
                            <Button className="text-sm text-blue-600 underline mt-2">
                              Clip Coupon
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
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