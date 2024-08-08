// utils/api.ts

import { producttype } from "@/common.type";
// utils/api.ts
import axios from 'axios';
import { getToken, setToken, removeToken } from './auth';
import { refreshToken } from './refreshToken';


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


const API_URL = 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      }
    }
    removeToken();
    return Promise.reject(error);
  }
);

export default api;
