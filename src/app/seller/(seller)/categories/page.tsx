"use client"
import {useRouter} from "next/navigation"
export default function App(){
    const router = useRouter();
    return (
    <>
     <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
              <div className="mt-[10px] flex flex-row justify-between ">
                 <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Categories
                </h1>
                <div>
                  <button onClick={()=>router.push("/seller/categories/add-category")} className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
                    + Add Categories
                  </button>
                </div>
            </div>
            <div className= "grid grid-cols-3 gap-4 sm:flex flex-col">
                <div className="flex flex-col gap-[10px] w-full border-2 p-[5px]">
                    <img src="/images/product/22.res-T-shirt.jpg" alt="image" className="w-[270px] h-[250px]"/>
                    <h1>Man Clothes</h1>
                    <p>43 items</p>
                </div>
                <div className="flex flex-col gap-[10px] w-full border-2 p-[5px]">
                    <img src="/images/product/22.res-T-shirt.jpg" alt="image" className="w-[270px] h-[250px]"/>
                    <h1>Man Clothes</h1>
                    <p>43 items</p>
                </div>
                <div className="flex flex-col gap-[10px] w-full border-2 p-[5px]">
                    <img src="/images/product/22.res-T-shirt.jpg" alt="image" className="w-[270px] h-[250px]"/>
                    <h1>Man Clothes</h1>
                    <p>43 items</p>
                </div>
                <div className="flex flex-col gap-[10px] w-full border-2 p-[5px]">
                    <img src="/images/product/22.res-T-shirt.jpg" alt="image" className="w-[270px] h-[250px]"/>
                    <h1>Man Clothes</h1>
                    <p>43 items</p>
                </div>
                <div className="flex flex-col gap-[10px] w-full border-2 p-[5px]">
                    <img src="/images/product/22.res-T-shirt.jpg" alt="image" className="w-[270px] h-[250px]"/>
                    <h1>Man Clothes</h1>
                    <p>43 items</p>
                </div>
            </div>
        </div>
 </>)
}