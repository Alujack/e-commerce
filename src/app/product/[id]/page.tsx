"use client"
import React, { useEffect } from 'react';
import { useProductContext } from '@/context/productDetail';
import ProductDetails from './Productdeatails';


export default  function Product({ params }: { params: { id: string } }) {

  const { product, loading, error, fetchProductDetails } = useProductContext();

    useEffect(() => {
        fetchProductDetails(params.id);
    }, [params.id]);
    console.log(product)
  return (
    <>
    <ProductDetails product={product}/>
    </>
  );
}
