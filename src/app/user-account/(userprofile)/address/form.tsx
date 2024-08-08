"use client";

import React,{ useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { Text } from "@/components";
import { countries } from "countries-list";
import SuccessModal from "@/modals/SucessModal";

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

const FormComponent = ({ id }: { id: string }) => {
  const [formData, setFormData] = useState<Address | undefined>(defaultAddress);
  const countryArray = Object.values(countries);
   const [showSuccess, setShowSuccess] = useState(false);

  const handleOpenSuccess = () => setShowSuccess(true);
  const handleCloseSuccess = () => setShowSuccess(false);


  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/auth/addresses/${id}`);
        if (response.data) {
          setFormData(response.data);
        } else {
          setFormData(defaultAddress);
        }
      } catch (error) {
        console.log('Failed to fetch address, using default address', error);
        setFormData(defaultAddress);
      }
    };

    fetchAddress();
  }, [id]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!target) return;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/api/auth/addresses/${id}/`, formData);
      if (response) {
        console.log("Address submitted successfully");
        handleOpenSuccess();
      } else {
        console.error("Failed to submit address");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3 px-32">
      <form onSubmit={onSubmit} className="columns-2">
        <div className="flex flex-col items-start gap-2.5">
          <Text as="p" className="text-black">
            Select Country
          </Text>
          <select name="country" value={formData?.country} onChange={onChange} className="w-full px-3 py-2 border-2 border-blue-500 rounded-lg">
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
              value={formData?.house_number}
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
              value={formData?.street_number}
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
              value={formData?.village}
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
              value={formData?.commune}
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
              value={formData?.district}
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
              value={formData?.city}
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
              value={formData?.postal_code}
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
              value={formData?.phone_number}
              placeholder="+855 719226094"
              onChange={onChange}
              className="w-full border-none"
            />
          </div>
        </div>
      </form>
      <button
        type="submit"
        onClick={onSubmit}
        className="p-3 self-center bg-blue-500 hover:bg-blue-700 text-white-A700 font-bold py-2 px"
      >
        Save Changes
      </button>
       <SuccessModal
        show={showSuccess}
        onClose={handleCloseSuccess}
        heading="Sucess!"
        message="Your Address updated successfully."
      />
    </div>
  );
};

export default FormComponent;
