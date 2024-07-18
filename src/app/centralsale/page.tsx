"use client";
import Link from "next/link";
import { Img, Text, Heading, CheckBox, Input } from "@/components";
import { useEffect, useState } from 'react';
import useSubmit from "@/hooks/useSubmit";

interface UserType {
  name: string;
  email: string;
  image: string;
  id: string;
}

function BecomeSellerPage() {
 const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    seller:{
      username: "",
      email: "",
      password:"12"
    },
    name: "",
    address: {
      unit_number:"",
      street_number: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    }
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getUser/');
        const data = await response.json();
        if (data && data.session && data.session.user) {
          setUserData(data.session.user);
          setFormData((prevFormData) => ({
            ...prevFormData,
            seller: data.session.user,
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    
    if (nameParts.length > 1) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        address: {
          ...prevFormData.address,
          [nameParts[1]]: value,
        }
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e:any) => {
  e.preventDefault();
  try {
    const response = await fetch("http://127.0.0.1:8000/api/store/create-or-update-store/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result);
    }

    console.log(result);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <>
    <h1>{formData.seller.username}</h1>
    <h1>{formData.seller.email}</h1>
    <h1>{formData.seller.password}</h1>
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between gap-[20px]">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Store Name"
      />
      <input
        type="text"
        name="address.unit_number"
        value={formData.address.unit_number}
        onChange={handleChange}
        placeholder="unit_number"
      />
      <input
        type="text"
        name="address.street_number"
        value={formData.address.street_number}
        onChange={handleChange}
        placeholder="Street Number"
      />
      <input
        type="text"
        name="address.address_line1"
        value={formData.address.address_line1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="address.address_line2"
        value={formData.address.address_line2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        type="text"
        name="address.city"
        value={formData.address.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="address.state"
        value={formData.address.state}
        onChange={handleChange}
        placeholder="State"
      />
      <input
        type="text"
        name="address.postal_code"
        value={formData.address.postal_code}
        onChange={handleChange}
        placeholder="Postal Code"
      />
      <input
        type="text"
        name="address.country"
        value={formData.address.country}
        onChange={handleChange}
        placeholder="Country"
      />
      <button type="submit">Submit</button>
    </form>
    
    </>
  );
}

export default BecomeSellerPage;
