"use client";
import { useState } from "react";
import { Heading } from "@/components";

interface Product {
  id: string;
  product_id: string;
  name: string;
  price: number;
  image: string;
  total_stock_quantity: number;
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
      <div className="w-[35%] flex flex-row gap-10">
        <div className="w-[70px]">
          <img src={imageUrl} className="object-cover" alt={product.name} />
        </div>
        <p className="">
          {product.name}
        </p>
      </div>
      <div className="ml-5 flex w-[50%] justify-between gap-5 mr-[4%]">
        <p>
          {product.total_stock_quantity}
        </p>
        <p >
          {product.price.toString()} $
        </p>
        <p >
          {product.product_id}
        </p>
      </div>
    </div>
  );
};

export default Stockpro;
