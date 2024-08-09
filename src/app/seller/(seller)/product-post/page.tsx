"use client"
import {useState, useEffect} from "react"
import Card from "./product-post-card"
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
    const [products, setProducts] = useState<Product[]>([]);
    const { store } = useStore();
    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/store/product/publishing/${store.id}`);
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
    <div className="scrollable-div bg-slate-100 p-10 rounded-[16px]">
         <h1 className ="text-[28px] text-[#343C6A] font-bold inter decoration-8">
                    Product Post
                </h1>
        <div className="grid grid-cols-4 gap-3 items-center p-4">
            {products.map((product, index)=>(
                <Card key={index} product={product} />
            ))}
        </div>

    </div>
    
    </>)
}