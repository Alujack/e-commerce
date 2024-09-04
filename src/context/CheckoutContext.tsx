"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Address } from '@/common.type';
// Define interfaces for each part of the order
interface ShippingAddress {
  house_number: string;
  street_number: string;
  village: string;
  commune: string;
  district: string;
  city: string;
  postal_code: string;
  country: string;
  phone_number: string;
}

export interface OrderLine {
  product: number;
  quantity: number;
  price: number;
}

interface CreditCard {
  payment_type: number;
  card_holder_name: string;
  card_number: string;
  expired_date: string;
  cvv: string;
}

interface OrderContextProps {
  customer: string;
  setCustomer: (customer: string) => void;
  store:string[];
  setStore:(store:string[])=> void;

  orderLines: OrderLine[];
  setOrderLines: (orderLines: OrderLine[]) => void;

  shippingAddress: Address;
  setShippingAddress: (address: Address) => void;

  paymentType: number;
  setPaymentType: (type: number) => void;

  shippingMethod: number;
  setShippingMethod: (method: number) => void;

  creditCard: CreditCard;
  setCreditCard: (card: CreditCard) => void;

  orderTotal: number;
  setOrderTotal: (total: number) => void;

  status: string;
  setStatus: (status: string) => void;

  couponCode?: string;
  setCouponCode: (code: string) => void;

  submitOrder: () => Promise<void>;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Create state variables for each part of the order
  const [customer, setCustomer] = useState<string>('');
  const [store,setStore]=useState<string[]>([]);
  const [orderLines, setOrderLines] = useState<OrderLine[]>([]);
  const [shippingAddress, setShippingAddress] = useState<Address>({
    house_number: '',
    street_number: '',
    village: '',
    commune: '',
    district: '',
    city: '',
    postal_code: '',
    country: '',
    phone_number: '',
  });
  const [paymentType, setPaymentType] = useState<number>(1);
  const [shippingMethod, setShippingMethod] = useState<number>(1);
  const [creditCard, setCreditCard] = useState<CreditCard>({
    payment_type: 1,
    card_holder_name: '',
    card_number: '',
    expired_date: '',
    cvv: '',
  });
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [status, setStatus] = useState<string>('pending');
  const [couponCode, setCouponCode] = useState<string>('');

  const submitOrder = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/shipping_app/create-order/def/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer,
          store,
          order_lines: orderLines,
          shipping_address: shippingAddress,
          payment_type: paymentType,
          shipping_method: shippingMethod,
          credit_card: creditCard,
          order_total: orderTotal,
          status,
          coupon_code: couponCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      const data = await response.json();
      console.log('Order submitted successfully:', data);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        customer,
        setCustomer,
        store,
        setStore,
        orderLines,
        setOrderLines,
        shippingAddress,
        setShippingAddress,
        paymentType,
        setPaymentType,
        shippingMethod,
        setShippingMethod,
        creditCard,
        setCreditCard,
        orderTotal,
        setOrderTotal,
        status,
        setStatus,
        couponCode,
        setCouponCode,
        submitOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
