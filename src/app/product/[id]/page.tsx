"use client"
import React, { useEffect } from 'react';
import { useProductDetailContext } from '@/context/productDetail';
import ProductDetails from './Productdeatails';

export default  function Product({ params }: { params: { id: string } }) {

 const { product, categories, variations, images, loading, error, fetchProductDetails } = useProductDetailContext();

    useEffect(() => {
        fetchProductDetails(params.id);
    }, [params.id]);
    console.log(product)
  return (
    <>
    <ProductDetails product={product} categories={categories} variations={variations} images={images}/>
    </>
  );
}
