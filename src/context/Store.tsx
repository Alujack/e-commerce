"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

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
  name: string;
  email: string;
  address: Address;
  Stock?: any;
}

interface StoreContextProps {
  store: Store;
  fetchStore: (id: string) => Promise<void>;
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
  const [store, setStore] = useState<Store>({
    name: '',
    email: '',
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
    },
    Stock: undefined,
  });

  const fetchStore = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/store/manage/stores/${id}/`);
      setStore(response.data);
    } catch (error) {
      console.error('Failed to fetch store', error);
    }
  };

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
    <StoreContext.Provider value={{ store, fetchStore, updateStore, createStore, setStore }}>
      {children}
    </StoreContext.Provider>
  );
};
