"use client"


import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProductContextType {
  name: string;
  description: string;
  image: string;
  productprice: number;
  category: string;
  productVariation: { material: string; color: string; size: string; };
  setProductData: (data: Partial<ProductContextType>) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [productData, setProductDataState] = useState<ProductContextType>({
    name: '',
    description: '',
    image: '',
    productprice: 0,
    category: '',
    productVariation: { material: '', color: '', size: '' },
    setProductData: () => {}
  });

  const setProductData = (data: Partial<ProductContextType>) => {
    setProductDataState((prevData) => ({
      ...prevData,
      ...data
    }));
  };

  return (
    <ProductContext.Provider value={{ ...productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
