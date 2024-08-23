'use client'
import { useEffect } from "react";
import { RatingBar } from "@/components";
import {useProducts} from "@/context/productListByCategory"
import ProductCard from "@/components/ProductCard";

export default function ProductList({ params }: { params: { id: string }}) {
  const id = params.id;
  const {products, fetchProducts} = useProducts();
  useEffect(()=>{
      fetchProducts("86")
  },[id])

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
          <div className=" py-4 w-1/6 h-screen  border-r-2 border-r-gray-200">
             <aside className="w-full bg-white-A700 p-4     ">
              <h2 className="text-lg font-bold mb-4">Any Department</h2>
              <ul>
                {['Amazon Devices', 'Appliances', 'Apps & Games', 'Arts, Crafts & Sewing', 'Beauty & Personal Care'].map((category, index) => (
                  <li key={index} className="py-2 text-gray-700 cursor-pointer hover:text-blue-500">
                    {category}
                  </li>
                ))}
                {/* Add more categories as needed */}
              </ul>
              </aside>
          </div>
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best Sellers in Home & Kitchen</h2>
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Product cards */}
                {products.map((product, index) => (
                    <ProductCard product={product}/>
                  
                ))}
              </div>
              {/* Pagination */}
              <div className="flex justify-between items-center mt-8">
                <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Previous</button>
                <p>Page 1 of 4</p>
                <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">Next</button>
              </div>
            </section>
        </div>
      </div>
    </>
  );
}
