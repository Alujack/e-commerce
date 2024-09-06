'use client'
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import axios from "axios"
import { Product } from "@/common.type";
import { useRouter } from "next/navigation";

interface CategoriesProduct {
  category: string;
  new_arrivals: Product[];
}

export default function BestSellerSingle({ params }: { params: { id: string } }) {
  const rounter = useRouter()
  const [catPro, setCatPro] = useState<CategoriesProduct>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [minPrice, setMinPrice] = useState(500);
  const [maxPrice, setMaxPrice] = useState(5000);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/new-arrival?category_id=${params.id}`)
      setCatPro({ ...response.data })
      console.log(catPro)
    }
    fetchProducts();
  }, [params.id])
  const products = catPro?.new_arrivals? catPro.new_arrivals : [];
   useEffect(() => {
        const filterByPrice = () => {
            const filtered = products.filter(
                (product) =>
                    product.price >= minPrice && product.price <= maxPrice
            );
            setFilteredProducts(filtered);
        };
        filterByPrice();
    }, [minPrice, maxPrice, products]);


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
            <div className="flex flex-row gap-4 p-5">
              <div className="flex flex-col bg-slate-50 shadow-xl rounded-[5px] items-center h-[500px]  P-[10px] ">
                <div className="mt-[15px] mb-[15px]  w-[100%]  sm:hidden p-[10px]">
                  <h1 className=" leading-[21px]">
                    Filter by price
                  </h1>

                </div>
                <div className="flex flex-col w-full sm:hidden p-[10px]">
                  <input
                    type="range"
                    className="w-[100%]"
                    min="500"
                    max="5000"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                  />
                  <div className="flex flex-row justify-between">
                    <span>From: ${minPrice}</span>
                    <span>To: ${maxPrice}</span>
                  </div>

                  {/* Max Price Filter */}
                  <input
                    type="range"
                    className="w-[100%]"
                    min="500"
                    max="5000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
                 </div>


                <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {filteredProducts.map((product, index) => (
                    <ProductCard product={product} />
                  ))}
                </div>
             
               </div>
          </section>
        </div>
      </div>
    </>
  );
}
