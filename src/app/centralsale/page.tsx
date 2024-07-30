"use client";

import Form from "./form";
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

export default function BecomeSellerPage() {
  const { data: userData } = useRetrieveUserQuery();
  const userid = userData? userData.id : "";
  return (
    <>
    <Form key ={userid} id= {userid}></Form>
    </>
  );
}
