// CartContext.tsx
"use client"
import React, { createContext, useState, useContext } from 'react';
import {producttype} from "@/common.type";

interface CartContextType {
  cartItems: producttype[];
  setCartItems: (item: producttype[]) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems:[],
  setCartItems: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<producttype[]>([]);



  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
