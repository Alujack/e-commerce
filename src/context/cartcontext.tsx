
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import {ShoppingCartItem, Product} from "@/common.type";
import axios from 'axios';

interface CartItems{
  cart_item:ShoppingCartItem;
  products:Product;
}

interface CartContextType {
  cartItems:CartItems[]
  setCartItems: (item: CartItems[]) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  FetchCartItem: (id:string) => void ;
}

const CartContext = createContext<CartContextType>({
  cartItems:[],
  setCartItems: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  FetchCartItem:() => {}
});

export const CartProvider = ({ children }:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([
   
  ]);

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };
 
  const FetchCartItem = async (id:string) =>{
      const response  = await axios.get<CartItems[]>(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/${id}/`)
      if (response){
        setCartItems(response.data)
      }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, clearCart, FetchCartItem}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
