"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

interface Address {
  house_number: string;
  street_number: string;
  village: string;
  commune: string;
  district: string;
  city: string;
  postal_code: string;
  country: string;
  phone_number: string;
  additional_info?: string;
}

interface Store {
  id:string;
  name: string;
  email: string;
  seller:string;
  address: Address;
  Stock?: any;
}

interface StoreContextProps {
  store: Store;
  updateStore: (id: string, data: Store) => Promise<void>;
  createStore: (data: Store) => Promise<void>;
  setStore: React.Dispatch<React.SetStateAction<Store>>;
}

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const {data:userData} = useRetrieveUserQuery();
  const userid = userData? userData.id : "";
  const [store, setStore] = useState<Store>({
    id:'',
    name: '',
    email: '',
    seller:'',
    address: {
      house_number: '',
      street_number: '',
      village: '',
      commune: '',
      district: '',
      city: '',
      postal_code: '',
      country: '',
      phone_number: '',
    }
  });
  
  useEffect(()=>{
    const fetchStore = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/store/manage/stores/${userid}/`);
          setStore(response.data);
        } catch (error) {
          console.error('Failed to fetch store', error);
        }
  };
  fetchStore();
  },[userid])
 

  const updateStore = async (id: string, data: Store) => {
    try {
      await axios.put(`http://localhost:8000/api/store/manage/stores/${id}/`, data);
    } catch (error) {
      console.error('Failed to update store', error);
    }
  };

  const createStore = async (data: Store) => {
    try {
      await axios.post('http://localhost:8000/api/store/manage/stores/', data);
    } catch (error) {
      console.error('Failed to create store', error);
    }
  };

  return (
    <StoreContext.Provider value={{ store, updateStore, createStore, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};
