"use client";
import { useState, useEffect } from 'react';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { useStore } from '@/context//Store';

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
  id: string;
  name: string;
  email: string;
  seller:string;
  address: Address;
  Stock?: any;
}

const defaultAddress: Address = {
  house_number: '',
  street_number: '',
  village: '',
  commune: '',
  district: '',
  city: '',
  postal_code: '',
  country: '',
  phone_number: '',
};

const defaultStore: Store = {
  id: '',
  name: '',
  email: '',
  seller:'',
  address: defaultAddress,
};

export const useFetchStore = () => {
  const { data: userData } = useRetrieveUserQuery();
  const { store,updateStore, createStore, setStore } = useStore();
  const [formData, setFormData] = useState<Store>(defaultStore);
  const [isDisabled, setIsDisabled] = useState(true);
  const id = userData ? userData.id : '';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  return {
    id,
    store,
    formData,
    isDisabled,
    setIsDisabled,
    handleInputChange,
    handleAddressChange,
    updateStore,
    createStore,
    setStore,
  };
};
