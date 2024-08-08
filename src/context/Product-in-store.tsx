"use client"
import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

interface DataContextType {
  products: Product[];
  fetchProducts: ()=> void;
}

const ProductContext = createContext<DataContextType | null>(null);

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  
  const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/store/${id}/product/');
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };


  return (
    <ProductContext.Provider value={{ products,fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
