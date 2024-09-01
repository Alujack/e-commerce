'use client'
import { useState, useEffect } from "react";
import axios from "axios"
import { Category } from "@/context/productDetail";
import BestMultiple from "./multple"
import Link from "next/link";
export default function BestSellerPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [id, setId] = useState<string>('');

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/category/contain/products/`)
      if (response) {
        setCategories(response.data)
      } else {
        console.log('error')
      }
    }
    fetchCategories()
  }, [])
  useEffect(() => {
    const fetchBestSeller = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/category/contain/products/`)
      if (response) {
        setCategories(response.data)
      } else {
        console.log('error')
      }
    }
    fetchBestSeller()
  }, [])

  return (
    <>
      <div className="bg-[#FFFFFF] py-4">
        <div>
          <h1 className="uppercase text-xl font-bold font-inter text-start">
            textness best seller
          </h1>
        </div>
        <div className="flex flex-row gap-3">
          {/* Filter options and product list */}
          <div className=" py-4 w-1/6 h-screen  border-r-2 border-r-gray-200 sm:hidden">
            <aside className="w-full bg-[#FFFFFF] p-4     ">
              <h2 className="text-lg font-bold mb-4">Any Department</h2>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="py-2 text-gray-700 cursor-pointer hover:text-blue-500">
                    <Link href={`new-arrival-by-categories/${category.id}`}>{category.category_name}</Link>
                  </li>
                ))}
                {/* Add more categories as needed */}
              </ul>
            </aside>
          </div>
          <section className="mb-12 w-5/6">
            <BestMultiple />
          </section>
        </div>
      </div>
    </>
  );
}
