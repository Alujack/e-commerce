'use client'
import { useState,useEffect } from "react";
import { RatingBar } from "@/components";
import {useProducts} from "@/context/productListByCategory"
import ProductCard from "@/components/ProductCard";
import axios from "axios"
import { Category } from "@/context/productDetail";

export default function BestSellerSingle({catid}:{catid:string}) {
  const {products, fetchProducts} = useProducts();
  useEffect(()=>{
      fetchProducts(catid)
  },[catid])
 
  return (
    <>
      <div className="bg-white-A700 py-4">
         <div>
            <h1 className="uppercase text-xl font-bold font-inter text-start">
                  textness best seller
            </h1>
          </div>
        <div className="flex flex-row gap-3">   
        {/* Filter options and product list */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best Sellers in Home & Kitchen</h2>
              <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Product cards */}
                {products.map((product, index) => (
                    <ProductCard product={product}/>
                  
                ))}
              </div>
            </section>
        </div>
      </div>
    </>
  );
}
