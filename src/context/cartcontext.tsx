
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import {ShoppingCartItem, Product} from "@/common.type";
import axios from 'axios';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
export interface CartItems{
  cart_item:ShoppingCartItem;
  products:Product;
}

interface CartContextType {
  cartItems:CartItems[]
  setCartItems: (item: CartItems[]) => void;
  removeFromCart: (index: string) => void;
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
  const {data:user} = useRetrieveUserQuery();
  const userid = user?.id ? user?.id : ''; 

  const removeFromCart = async (index: string) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/delete?productId=${index}&user=${userid}`)
    const newCartItems = [...cartItems];
    newCartItems.splice(Number(index), 1);
    setCartItems(newCartItems);
    FetchCartItem(userid);
  };

  const clearCart = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/delete?productId`)
    setCartItems([]);
  };
 
  const FetchCartItem = async (id:string) =>{
    try{
      const response  = await axios.get<CartItems[]>(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/${id}/`)
      if (response){
        setCartItems(response.data)
      }}catch(err){
        console.error(err)
      }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, clearCart, FetchCartItem}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
