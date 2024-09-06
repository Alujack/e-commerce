'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "@/context/productDetail";
import { Product } from "@/common.type";
import ProductCarousel from "@/components/HorizentalMove";


export default function NewArrival() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProductsForCategories = async () => {
            try {
                // Fetch data from the API endpoint
                const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/inventory/all/new-arrival/`);
                const data = response.data;
                setProducts(data);
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
        <div className="flex flex-col gap-3 w-full">

            <div className="w-full">
                <ProductCarousel products={products} />
            </div>
        </div>
    );
}
