// utils/api.ts

import { producttype } from "@/common.type";

export async function fetchProducts(): Promise<producttype[]> {
  const response = await fetch('http://localhost:3000/api/products/');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: producttype[] = await response.json();
  return products;
}

export async function fetchProductById(id: string): Promise<producttype> {
  const response = await fetch(`http://localhost:3000/api/products/?id=${id}`);
  const product: producttype = await response.json();
  return product;
}