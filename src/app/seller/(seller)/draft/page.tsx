"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import ProductCard from "./card";
import axios from "axios";
import { useStore } from "@/context/Store";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

export default function ProductPost() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const { store } = useStore();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/store/product/draft/${store.id}/`);
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [store.id]);
  return (
    <>
      <div className="flex flex-col gap-[29px] p-[23px] sm:p-5">
        <div className="mt-[10px] flex flex-row justify-between ">
          <h1 className="text-[28px] text-[#343C6A] font-bold inter decoration-8">
            Draft Product
          </h1>
          <div>
            <button onClick={() => router.push("/seller/add-product")} className="bg-blue-500 hover:bg-blue-700 text-[#d3fee0] font-bold p-4 px-8  rounded">
              + Add Draft
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:flex flex-col">
          {products.map((product) => (
            <ProductCard items={product} />
          ))}
        </div>
      </div>
    </>)
}