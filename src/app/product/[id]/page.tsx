"use client"
import React, { useEffect } from 'react';
import { useProductContext } from '@/context/productDetail';

import ProductDetails from "./Productdeatails";

// // Define generateStaticParams function
// export async function generateStaticParams() {
//   try {
//     const posts: producttype[] = await fetch('http://localhost:3000/api/products/').then((res) => res.json());
//     return posts.map((post) => ({
//       id: post.id.toString(),
//     }));
//   } catch (error) {
//     console.error("Error fetching products for static params:", error);
//     return [];
//   }
// }

// async function getproduct(): Promise<producttype[]> {
//   try {
//     return await fetchProducts();
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

export default  function Product({ params }: { params: { id: string } }) {

  const { product, loading, error, fetchProductDetails } = useProductContext();

    useEffect(() => {
        fetchProductDetails(params.id);
    }, [params.id]);
    console.log(product)
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
