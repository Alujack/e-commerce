
"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

interface Address {
  house_number?: string;
  street_number?: string;
  village?: string;
  commune?: string;
  district?: string;
  city?: string;
  postal_code?: string;
  country?: string;
  phone_number?: string;
  additional_info?: string;
}

const defaultAddress: Address = {
  house_number: "",
  street_number: "",
  village: "",
  commune: "",
  district: "",
  city: "",
  postal_code: "",
  country: "",
  phone_number: "",
};

interface AddressContextType {
  address: Address;
  setAddress: React.Dispatch<React.SetStateAction<Address>>;
  fetchAddress: (id: string) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<Address>(defaultAddress);

  const fetchAddress = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/auth/addresses/${id}`);
      if (response.data) {
        setAddress(response.data);
      } else {
        setAddress(defaultAddress);
      }
    } catch (error) {
      console.log('Failed to fetch address, using default address', error);
      setAddress(defaultAddress);
    }
  };

  return (
    <AddressContext.Provider value={{ address, setAddress, fetchAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
