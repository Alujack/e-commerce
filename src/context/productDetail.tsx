"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categories: Category[];
    images: ProductImage[];
    variations: ProductItem[];
    stock: Stock[];
    reviews: Review[];
}

export interface Category {
    id: string;
    category_name: string;
}

export interface ProductImage {
    id: string;
    image: string;
    angle: string;
}

export interface ProductItem {
    id: string;
    variation_option: VariationOption;
}

export interface VariationOption {
    id: string;
    value: string;
}

export interface Stock {
    id: string;
    quantity: number;
    product_item_variation: ProductItem;
}

export interface Review {
    id: string;
    rating: number;
    comment: string;
    user: string;
    created_at: string;
}

export interface ProductContextType {
    product: Product | null;
    loading: boolean;
    error: string | null;
    fetchProductDetails: (productId: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductDetailProvider = ({ children }: { children: ReactNode }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProductDetails = async (productId: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get<Product>(`http://127.0.0.1:8000/api/store/product/detail/${productId}/`);
            setProduct(response.data);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider value={{ product, loading, error, fetchProductDetails }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
