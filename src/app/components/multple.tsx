'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "@/context/productDetail";
import { Product } from "@/common.type";
import Link from "next/link";
import ProductCarousel from "@/components/HorizentalMove";

interface CategoriesProduct {
  category: string;
  top_products: Product[] | null;
}

export default function Multiple() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesProduct, setCategoriesProduct] = useState<CategoriesProduct[]>([]);

  useEffect(() => {
    const fetchProductsForCategories = async () => {
      try {
        // Fetch data from the API endpoint
        const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/all/categories/`);
        const data = response.data;

        // Map the data into the required structure
        const mappedData: CategoriesProduct[] = data.map((item: any) => ({
          category: item.category,
          top_products: item.products
        }));

        // Set the mapped data to the state
        setCategoriesProduct(mappedData);
      } catch (error) {
        console.error('Failed to fetch products for categories', error);
      }
    };

    if (categories.length > 0) {
      fetchProductsForCategories();
    }
  }, [categories]);
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

  return (
    <div className="flex flex-col gap-20 w-full">
      {categoriesProduct.map((catPro) => (
        catPro.top_products ?
          <div key={catPro?.category}>
            <div className="flex sm:flex-col justify-between items-center gap-5 p-[5px]  h-[62px] rounded-[10px]">
              <div className="flex p-2.5">
                <h2 className="text-2xl font-bold mb-6">Products in {catPro?.category} </h2>
              </div>
              <Link href={`category/${catPro.category}`} className="bg-gray-200 mr-[19px] md:mr-0 p-3 capitalize font-medium min-w-[89px] rounded-[10px]">view all</Link>
            </div>
            <div className="w-full">
              <ProductCarousel products={catPro.top_products} />
            </div>
          </div> : null

      ))}
    </div>
  );
}
