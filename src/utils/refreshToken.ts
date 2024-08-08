// utils/refreshToken.ts
import axios from 'axios';
import { setToken, getToken, removeToken } from './auth';

const API_URL = 'http://your-api-url.com/api';

export const refreshToken = async (): Promise<string | null> => {
  try {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) throw new Error('No refresh token available');

    const response = await axios.post(`${API_URL}/auth/token/refresh/`, { refresh });
    const newToken = response.data.access;
    setToken(newToken);
    return newToken;
  } catch (error) {
    console.error('Token refresh failed', error);
    removeToken();
    return null;
  }
};
