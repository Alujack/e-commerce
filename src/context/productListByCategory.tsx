
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/common.type';

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: (id: string) => void;
}

const ProductsContext = createContext<ProductContextType | undefined>(undefined);

export const ProductsCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/product/category/productlist/${id}`);
      if (response.data) {
        setProducts(response.data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log('Failed to fetch address, using default address', error);
      setProducts([]);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
