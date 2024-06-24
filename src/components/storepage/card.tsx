import {Button} from "../."
import ProductCard from "../ProductCard";
import BankCard from "./bank";
import product from "@/constants/product"
export default function Card(){
    return (
         <div className="flex flex-1 flex-col gap-[11px] md:self-stretch">
                <Button color="white_A700_08" size="5xl" className="w-full rounded-[10px] font-bold uppercase sm:px-5">
                  Best seller in this category
                </Button>
                <div className=" h-[100%] md:h-auto ">
                  <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(250px_,_1fr))] justify-center gap-3.5">
                   {
                  product.map((item)=>(
                    <ProductCard key={item.id} {...item} items={item}  className="flex flex-col justify-center w-full p-5 bg-gray-100_03 rounded-[10px]" />
                  ))
                }
                  </div>
                 
                </div>
                <BankCard></BankCard>
              </div>
    )
}