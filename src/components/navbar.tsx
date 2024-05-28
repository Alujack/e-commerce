"use client"

import { usePathname } from 'next/navigation';
import { Heading, Img, Text } from "./";
import Link from "next/link"
import {useCart} from "@/context/cartcontext";
import {navlink} from "@/constants/link";
interface Props {

}

export default function Navbar({
}: Props) {
  const {cartItems} = useCart();
  const pathname = usePathname();
  const qty =cartItems.length;
  const active = "text-blue_gray-900_01  text-center";
  return (
    <>
     <div className="flex md:flex-col justify-between h-[40px]  w-[60%] md:w-full">
                  {navlink.map((link)=>(
                  <Link key={link.key} href={link.href}  className=" px-2  self-center sm:ml-0 rounded">
                  <div className="flex items-center ml-14 gap-2 sm:ml-0">
                    <img src={link.src} className={link.src ? "h-[24px] w-[24px]":"hidden"} />
                    <Heading size="2xl" as="h6"  className={pathname===link.href? "border-b-4 border-indigo-500 font-sans hover:font-serif text-center" : "font-sans hover:font-serif text-center"}>
                      {link.label}
                    </Heading>
                  </div>
                  </Link>))}
                                  
            </div>
        </>   
  );
}
