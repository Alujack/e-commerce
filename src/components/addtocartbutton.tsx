// AddToCartButton.tsx
"use client";

import { useCart } from '@/context/cartcontext';
import {Button, Img} from "./"
import { producttype } from "@/common.type";
interface Props {
  item:producttype
}

const AddToCartButton = ({ item }:Props) => {
  const {cartItems,setCartItems } = useCart();

  const handleAddToCart = () => {
    setCartItems([...cartItems,item]);
  };

  return (
   <Button 
          size="7xl" 
          shape="round" 
          className="border-blue_gray-100_01 border border-solid !rounded"
          onClick={handleAddToCart}
          >
            <Img src="/images/img_cart_teal_900.svg" alt="add-to-card" />
          </Button>
  );
};

export default AddToCartButton;
