"use client";

import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import {Text, Heading, TextArea} from "@/components";
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import { countries } from "countries-list";

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

const defaultStore: Store = {
  name: "",
  email: "",
  address: defaultAddress,
};

export default function Form({ id }: { id: string }) {
  const countryArray = Object.values(countries);
  const { data: userData } = useRetrieveUserQuery();
  const [formData, setFormData] = useState<Store>(defaultStore);

  useEffect(() => {
    const fetchAddress = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/auth/addresses/${id}`);
          if(response){
             console.log(response.data);
             setFormData(prevData => ({
              ...prevData,
              address: response.data,
          })); 
          }
         
        } catch (error) {
          console.log('Failed to fetch address', error);
        }
    };

    fetchAddress();
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!target) return;

    const { name, value } = target;
    setFormData(prevData => {
      if (name in prevData.address) {
        return {
          ...prevData,
          address: {
            ...prevData.address,
            [name]: value,
          },
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const onSubmit = async () => {
    console.log(formData);
    if (userData && userData.id) {
        try {
          const response = await axios.post(`http://localhost:8000/api/store/manage/stores/${id}/`, formData);
        } catch (error) {
          console.log('Failed to fetch stores', error);
        }
      }
  };


  return (
    <>
      <div className="w-full px-2.5 md:px-5 bg-gray-100">
        <div className="flex flex-col w-full gap-4 mx-auto max-w-screen-lg">
          <div className="flex flex-col items-start p-10 md:p-5 bg-white rounded-lg shadow-lg border-2 border-blue-500">
            <div className="flex ml-24 md:ml-0">
              <h1 className="text-3xl self-start uppercase text-blue-500">
                Hello <span className="text-green-700">{userData?.first_name + " " + userData?.last_name}</span> &nbsp;&nbsp;&nbsp;
              </h1>
              <h1 className="text-3xl self-start uppercase text-blue-500">
                Welcome to Our Membership
              </h1>
            </div>
            <div className="flex flex-col self-center w-4/5 md:w-full mt-5 gap-6">
              <div className="flex sm:flex-col justify-between gap-5">
                <div className="flex p-2.5">
                  <Heading size="xl" as="h2" className="mt-2.5 mb-2.5 font-bold text-blue-500">
                    Billing Details
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>House Number</span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="name"
                    value={formData?.name}
                    placeholder="Your company name"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  Select Country
                </Text>
                <select name="country" value={formData?.address.country} onChange={onChange} className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg">
                  <option value="" className="text-gray-500">
                    Select Country
                  </option>
                  {countryArray.map((country, index) => (
                    <option key={index} value={country.name} className="text-black">
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>House Number</span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="house_number"
                    value={formData?.address.house_number}
                    placeholder="No.117"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Street Number </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="street_number"
                    value={formData?.address.street_number}
                    placeholder="No.117"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Village </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="village"
                    value={formData?.address.village}
                    placeholder="example village"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Commune </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="commune"
                    value={formData?.address.commune}
                    placeholder="example commune"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>District </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="district"
                    value={formData?.address.district}
                    placeholder="example district"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>City </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="city"
                    value={formData?.address.city}
                    placeholder="city"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Postal Code </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="postal_code"
                    value={formData?.address.postal_code}
                    placeholder="+12345"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Phone Number </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="text"
                    name="phone_number"
                    value={formData?.address.phone_number}
                    placeholder="+855 719226094"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="text-black">
                  <span>Email Address </span>
                  <span className="text-red-600">*</span>
                </Text>
                <div className="w-full px-3 py-2 border-2 border-blue-500 flex items-center justify-center rounded-[5px] bg-white-A700">
                  <input
                    type="email"
                    name="email"
                    value={formData?.email}
                    placeholder="example@example.com"
                    onChange={onChange}
                    className="w-full border-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center w-3/5 md:w-full mt-10 ml-24 p-4 border-gray-200 border bg-gray-200 rounded-lg md:ml-0">
              <Text as="p" className="self-end text-red-600 underline">
                Agreement.
              </Text>
            </div>
            <div className={"flex items-center gap-[5px] cursor-pointer"}>
              <input
                type="checkbox"
                name="createanaccount"
                id="createanaccount"
                onChange={onChange}
                className="mt-8 ml-2 md:ml-0 gap-2 text-black text-sm"
              />
              <label htmlFor="createanaccount">Create an account</label>
            </div>
            <div className="flex mt-6 ml-24 md:ml-0">
              <Heading size="xl" as="h5" className="font-bold">
                Additional Information / Problem Report
              </Heading>
            </div>
            <div className="flex flex-col self-center items-start w-4/5 md:w-full mt-2.5">
              <div className="flex p-1.5">
                <Text as="p" className="mt-2 mb-1 text-black">
                  <span>Write your problem </span>
                  <span className="text-gray-500">(Optional)</span>
                </Text>
              </div>
              <TextArea
                shape="round"
                name="problemReport"
                placeholder="Note about your order, e.g. special note for delivery"
                onChange={onChange}
                className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg text-gray-700"
              />
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4 hover:bg-blue-700 transition-colors duration-300"
                onClick ={onSubmit}
                >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
