"use client"

import { usePathname } from 'next/navigation';
import { Heading, Img, Text } from "./";
import Link from "next/link"
import {useCart} from "@/context/cartcontext";
interface Props {

}

export default function Navbar({
}: Props) {
  const {cartItems} = useCart();
  const pathname = usePathname();
  const qty =cartItems.length;

  // Define a function to check if a given href matches the current route
  const isActive = (href: string) => {
    return pathname === href;
  }
  const active = "text-blue_gray-900_01  text-center";
  return (
    <>

              <div className="flex md:flex-col justify-between h-[40px]  w-[60%] md:w-full">
                  
                  <a href="/" className=" px-2  self-center rounded bg-black">
                    <Heading size="2xl" as="h6" className={isActive("/")? active : "!text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      Home
                    </Heading>
                  </a>
                  
                  
                  <a href="/store" className=" px-2  self-center sm:ml-0 rounded">
                    <Heading size="2xl" as="h6" className={isActive("/store")? active : "text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      Store
                    </Heading>
                  </a>
                  <a href="/fqa" className=" px-2  self-center rounded bg-black">
                    <Heading size="2xl" as="h6" className={isActive("/")? active : "!text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      FQAs
                    </Heading>
                  </a>
                   <a href="/orderhistory"  className=" px-2  self-center sm:ml-0 rounded">
                  <div className="flex items-center ml-14 gap-2 sm:ml-0">
                    <Img src="/images/img_cube.svg" alt="cube_one" className="h-[24px] w-[24px]" />
                    <Heading size="2xl" as="h6"  className={isActive("/orderhistory")? active : "text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      Orders
                    </Heading>
                  </div>
                  </a>
                 <a href="/favorite" >
                <div className="flex items-center mt-2 gap-2 ">
                  <Img src="/images/img_heart.svg" alt="heart_one" className="h-[24px] w-[24px]" />
                  <Heading size="2xl" as="h6" className="self-start !text-blue_gray-900_01 tracking-[-0.10px]  text-center">
                    Favorites
                  </Heading>
                </div>
                </a>
                <Link href="/cart"  className=" px-2  self-center sm:ml-0 rounded">
                  <Text className ={ (qty > 0) ? " bg-blue": "hidden"}> {qty} </Text>
                  <div className="relation flex items-center gap-2">
                    <Img src="/images/img_shopping_cart.svg" alt="shoppingcart" className="h-[24px] w-[24px]" />
                    <Heading size="2xl" as="h6"  className={isActive("/cart")? active : "text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      Cart
                    </Heading>
                  </div>
                  </Link>
                  <a href="/centralsale"  className=" px-2  self-center sm:ml-0 rounded">
                    <Heading size="2xl" as="h6"  className={isActive("/centralsale")? active : "text-blue_gray-900_01 tracking-[-0.10px] text-center"}>
                      Become a seller
                    </Heading>
                  </a>
                </div>
        </>   
  );
}
