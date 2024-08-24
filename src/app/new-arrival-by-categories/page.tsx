'use client'
import { useState,useEffect } from "react";
import { RatingBar } from "@/components";
import {useProducts} from "@/context/productListByCategory"
import ProductCard from "@/components/ProductCard";
import axios from "axios"
import { Category } from "@/context/productDetail";

export default function BestSellerPage() {
  const {products, fetchProducts} = useProducts();
  const [categories, setCategories] = useState<Category[]>([])
  const [id, setId] = useState<string>('');
  useEffect(()=>{
      fetchProducts(id)
  },[id])
  useEffect(()=>{
    const fetchCategories = async ()=>{
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/category/contain/products/`)
      if (response){
        setCategories(response.data)
      }else{
        console.log('error')
      }
    }
    fetchCategories()
  },[])

  return (
    <>
      <div className="bg-white-A700">
         <div>
            <h1 className="uppercase text-xl font-bold font-inter text-start">
                  textness best seller
            </h1>
          </div>
        <div className="flex flex-row gap-3">   
        {/* Filter options and product list */}
          <div className=" py-4 w-1/6 h-screen  border-r-2 border-r-gray-200 sm:hidden">
             <aside className="w-full bg-white-A700 p-4     ">
              <h2 className="text-lg font-bold mb-4">Any Department</h2>
              <ul>
                {categories.map((category, index) => (
                  <li onClick={()=>setId(category.id.toString())} key={index} className="py-2 text-gray-700 cursor-pointer hover:text-blue-500">
                    {category.category_name}
                  </li>
                ))}
                {/* Add more categories as needed */}
              </ul>
              </aside>
          </div>
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
