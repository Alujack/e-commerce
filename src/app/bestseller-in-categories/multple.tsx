'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "@/context/productDetail";
import { Product } from "@/common.type";
import ProductCard from "@/components/ProductCard";

interface CategoriesProduct {
  category: Category;
  products: Product[];
}

export default function BestMultiple() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesProduct, setCategoriesProduct] = useState<CategoriesProduct[]>([]);

  useEffect(() => {
    const fetchProductsForCategories = async () => {
      try {
        // Fetch products for each category concurrently
        const categoryProductPromises = categories.map(async (category) => {
          const response = await axios.get(`http://localhost:8000/api/product/category/productlist/${category.id}`);
          return {
            category,
            products: response.data,
          };
        });

        // Wait for all promises to resolve
        const categoryProductData = await Promise.all(categoryProductPromises);
        setCategoriesProduct(categoryProductData);
      } catch (error) {
        console.error('Failed to fetch products for categories', error);
      }
    };

    if (categories.length > 0) {
      fetchProductsForCategories();
    }
  }, [categories]);
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
    <div className="flex flex-col gap-3">
      {categoriesProduct.map((catPro) => (
        <div key={catPro.category.id}>
          <h2 className="text-2xl font-bold mb-6">Best Sellers in {catPro.category.category_name}</h2>
           <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {catPro.products.map((product, index) => (
                    <ProductCard product={product}/>
                  
                ))}
              </div>
        </div>
      ))}
    </div>
  );
}
