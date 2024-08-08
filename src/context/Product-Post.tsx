"use client"
import React, { createContext, useState, useContext, ReactNode} from 'react';
interface Product {
  id: string;
  name: string;
  description:string;
  image: string;
  price: string;
}
interface Variations{
  id: string;
  attribute_type:string;
}

interface ProductItem {
  product: string;
  variation_option: string;
}

interface Stock {
  product_item_variation: ProductItem
  quantity: number;
}

interface ProductImage {
  url: File | null;
}

interface ProductContextProps {
  product: Product;
  categoryId:string;
  variations: Variations[];
  variationOptions: string[];
  productItems: ProductItem[];
  stocks: Stock[];
  productImages: ProductImage[];
  productId:string;
  setProductId:(productid:string)=>void;
  setProduct: (product: Product) => void;
  setCategoryId: (categoryId: string) => void;
  setVariations: (variations: Variations[]) => void;
  setVariationOptions: ( variationOptions: string[]) => void;
  setProductItems: (productItems: ProductItem[]) => void;
  setStocks: (stocks: Stock[]) => void;
  setProductImages: (productImages: ProductImage[]) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

const ProductPostProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    description: '',
    image: '',
    price: ''
  });
  const [productId, setProductId] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [variations, setVariations] = useState<Variations[]>([]);
  const [variationOptions, setVariationOptions] = useState<string[]>([]);
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [productImages, setProductImages] = useState<ProductImage[]>([
    { url: null },
    { url: null },
    { url: null },
    { url: null },
  ]);

  return (
    <ProductContext.Provider value={
      { 
         product,
         categoryId,
         variations,
         productItems,
         variationOptions, 
         stocks, 
         productImages,
         productId, 
         setProduct,
         setProductId, 
         setCategoryId, 
         setVariations, 
         setProductItems,
         setVariationOptions, 
         setStocks, 
         setProductImages 
      }
    }>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export { ProductPostProvider, useProduct };
