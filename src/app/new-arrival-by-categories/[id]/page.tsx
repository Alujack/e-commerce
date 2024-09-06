'use client'
import { useState,useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import axios from "axios"
import { Product } from "@/common.type";
import { useRouter } from "next/navigation";

interface CategoriesProduct {
  category: string;
  new_arrivals: Product[];
}

export default function BestSellerSingle({params}:{params:{id:string}}) {
  const rounter = useRouter()
  const [catPro, setCatPro] = useState<CategoriesProduct>();
  useEffect(()=>{
      const fetchProducts = async () =>{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/new-arrival?category_id=${params.id}`)
        setCatPro({...response.data})
        console.log(catPro)
      }
      fetchProducts();
  },[params.id])
 
  return (
    <>
      <div className="bg-white-A700 py-4">
         <div>
            <h1 className="uppercase text-xl font-bold font-inter text-start">
                  textness best seller
            </h1>
          </div>
        <div className="flex flex-row gap-3">   
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">New Arrival in {catPro?.category}</h2>
              <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {catPro?.new_arrivals?   catPro.new_arrivals.map((product, index) => (
                    <ProductCard product={product}/>
                )):null}
              </div>
            </section>
        </div>       
      </div>
    </>
  );
}
