"use client"

import ProductCard from "./card"
import {useRouter} from "next/navigation"
const product = {
  id:22,
  src:"/images/product/22.res-T-shirt.jpg",
  subtitle:"Extra Bas",
  title:"Red-T-shirt",
  price:70,
  qty:1,
  discription:" shirts offer a blend of style, comfort, and practicality, making them a wardrobe staple for people of all ages and lifestyles. Whether you're dressing for work, leisure, or special occasions, a well-chosen shirt can enhance your look and confidence.",

}
export default function App(){
  const router = useRouter();
    return (
    <>
     <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-[10px] flex flex-row justify-between ">
                 <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Draft Product
                </h1>
                <div>
                  <button onClick={()=>router.push("/seller/add-product")} className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
                    + Add Draft
                  </button>
                </div>
            </div>
            <div className= "grid grid-cols-3 gap-4 sm:flex flex-col">
                <ProductCard items={product}/>
            </div>
        </div>
 </>)
}