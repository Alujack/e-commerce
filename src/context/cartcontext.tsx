
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import {ShoppingCartItem, Product} from "@/common.type";
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
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
}

const CartContext = createContext<CartContextType>({
  cartItems:[],
  setCartItems: () => {},
  removeFromCart: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }:{children:React.ReactNode}) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([
   
  ]);
  const {data:user} = useRetrieveUserQuery();
  const id = user?.id? user?.id : '';

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  useEffect(()=>{
    const FetchCartItem = async () =>{
      const response  = await axios.get<CartItems[]>(`${process.env.NEXT_PUBLIC_HOST}/api/order_app/cart/d4b8237286244e4c971215061275e570/`)
      if (response){
        setCartItems(response.data)
      }
    }
    FetchCartItem();

  },[])

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
