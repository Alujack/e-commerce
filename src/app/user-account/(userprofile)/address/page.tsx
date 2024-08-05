"use client"
import React from "react";
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import FormComponent from "./form";

export default function Myaddress() {
  const { data: userData } = useRetrieveUserQuery();
  const userid = userData? userData.id : "";
  return (  
    <div className="py-5 flex flex-col bg-gray-100_02 rounded-xl">
       <h1 className="self-center mb-4">Address Information</h1>
      <FormComponent key={1} id={userid}/>    
    </div>
  );
}
