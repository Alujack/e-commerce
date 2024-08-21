"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

export interface Product {
    id: number;
    name: string;
    short_description:string;
    description: string;
    price: string;
    image:string;
}

export interface Category {
    id: number;
    category_name: string;
}

export interface Stock {
    id: number;
    variation_option: string;
    quantity: number;
}

export interface ProductImage {
    id: number;
    image: string;
    angle: string;
}

interface ProductDetailContextType {
    product: Product | null;
    categories: Category[];
    images: ProductImage[];
    stock: Stock[];
    loading: boolean;
    error: string | null;
    fetchProductDetails: (productId: string) => Promise<void>;
}

const ProductDetailContext = createContext<ProductDetailContextType | undefined>(undefined);

export const ProductDetailProvider = ({ children }: { children: ReactNode }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [images, setImages] = useState<ProductImage[]>([]);
    const [stock, setStock] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProductDetails = async (productId: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/store/product/detail/${productId}/`);
            const { product, categories, images, stock } = response.data;
            setProduct(product);
            setCategories(categories);
            setImages(images);
            setStock(stock);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductDetailContext.Provider value={{ product, categories, images, stock, loading, error, fetchProductDetails }}>
            {children}
        </ProductDetailContext.Provider>
    );
};

export const useProductDetailContext = (): ProductDetailContextType => {
    const context = useContext(ProductDetailContext);
    if (!context) {
        throw new Error('useProductDetailContext must be used within a ProductDetailProvider');
    }
    return context;
};
