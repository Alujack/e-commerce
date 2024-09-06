"use client"
import { useEffect } from "react"
import { Button } from "@/components";
import Ordercart from "@/components/ordercart";
import Totalsummery from "@/components/totalsummery";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cartcontext";
import Link from "next/link";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
export default function AddCart() {

  const { cartItems, FetchCartItem } = useCart();
  const { data: user } = useRetrieveUserQuery();
  const id = user?.id ? user?.id : '';
  useEffect(() => {
    FetchCartItem(id)
  }, [])
  const router = useRouter();
  const totalsumery = (<>
    <Button
      color="green_700"
      size="9xl"
      className="mt-[15px] mb-[12px] sm:pl-5 uppercase font-medium min-w-[124px] rounded-[10px]"
      onClick={() => {
        router.push(`/cart/checkout`)
      }}
    >
      checkout
    </Button>
  </>)
  return (
    <main>
      <div className="w-full mt-5 px-20 h-screen">
        <div className="flex flex-row justify-between  rounded-[10px]">
          <div className="flex flex-col bg-white-A700  w-[1179px] mr-20 flex-start md:self-stretch gap-[15px] flex-1">
            {cartItems.length > 0 ?
              <>
                <div className="flex flex-col mt-10 ml-10 mb-10">
                  <h1 className="text-3xl font-bold text-black-900 mb-3">Shopping Cart</h1>
                  <Link href="/delete" className="hover:underline">
                    <p className="text-gray-600">Delete All items</p>
                  </Link>
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
                <div className="flex flex-col mt-10 ml-10 mb-2">
                  <h1 className="text-3xl font-bold text-black-900_01  ">Your Cart is Empty</h1>
                  <Link href="/delete" className="hover:underline"><p className="text-gray-600">Delete All items</p></Link>
                </div>
                <p className="ml-6 mb-3 px-5 p-10">
                  Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
                  Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.
                </p></>)
            }
          </div>
          <div>
            <Totalsummery className={`flex flex-col items-center w-[300px]  bg-white-A700 p-6`} Children={totalsumery} />
          </div>
        </div>
      </div>

    </main>
  );
}
