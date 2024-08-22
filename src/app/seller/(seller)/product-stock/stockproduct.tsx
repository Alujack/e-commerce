"use client";
import { useState } from "react";
import { Heading } from "@/components";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

interface StockproProps {
  product: Product;
  onProductCheck: (productId: string, isChecked: boolean) => void;
}

const Stockpro = ({ product, onProductCheck }: StockproProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onProductCheck(product.id, newChecked);
  };

  const imageUrl = `http://localhost:8000${product.image}`;

  return (
    <div className="ml-7 flex flex-row justify-between items-center mb-10">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleCheckboxChange} 
      />
      <div className="w-[27%] flex flex-row gap-10">
        <div >
        <img src={imageUrl} className="object-cover" alt={product.name} />
        </div>
        <Heading as="h1" className="self-center">
          {product.name}
        </Heading>
      </div>
      <div className="flex w-[65%] justify-between gap-5 mr-[4%]">
        <Heading as="h4" className="top-0 self-end !font-bold">
          45
        </Heading>
        <Heading as="h4" className="self-end !font-bold">
          white
        </Heading>
        <Heading as="h5" className="self-end !font-bold">
          {product.price.toString()} $
        </Heading>
        <Heading as="p" className="self-end !font-bold md:mr-0">
          {product.product_id}
        </Heading>
      </div>
    </div>
  );
};

export default Stockpro;
