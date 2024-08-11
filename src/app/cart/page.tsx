"use client"
import { Text, Heading, Button, Img } from "@/components";
import Ordercart from "@/components/ordercart";
import Totalsummery from "@/components/totalsummery";
import {useRouter} from "next/navigation";
import { useCart } from "@/context/cartcontext";
import { producttype } from "@/common.type";
export default function AddCart() {

 const { cartItems} = useCart();
 const router = useRouter();
 const totalsumery = (<>
  <Button
        color="green_700"
        size="9xl"
        className="mt-[15px] mb-[12px] sm:pl-5 uppercase font-medium min-w-[124px] rounded-[10px]"
        onClick ={()=>{
          router.push(`/cart/checkout`)
        }}
      >
        checkout
      </Button>
 </>)
 
  return (
    <main>
      <div className="w-full bg-gray-300_07">
        <div className="flex flex-col gap-[11px]">
          <div className="flex flex-col  gap-[11px] mx-auto md:p-5 ">
            <h1 className="sm:px-5 font-bold rounded-[10px]">Checking your product cart</h1>
  
            <div className={cartItems.length != 0? "flex md:flex-col items-start gap-2.5 p-[7px] bg-white-A700 rounded-[10px]":"hidden"}>
              <div className=" scrollable-div flex flex-col flex-start md:self-stretch gap-[15px] flex-1">

              {cartItems.map((item:producttype, index:number) => (
                    <Ordercart key={index} save={100}  src ={item.src} price={item.price} item={item} index={index} className="flex md:flex-col items-start gap-5 p-4 bg-gray-50 flex-1 rounded-[10px]" />
                ))}
              </div>     
              <Totalsummery  className={ cartItems.length != 0? `flex flex-col items-center w-[32%] md:w-full p-[30px] my-10 sm:p-5 border-green-700 border border-solid rounded-[10px]`: `hidden`} Children={totalsumery}  />              
            </div>
        </div>
      </div>
      </div>
    </main>
  );
}
