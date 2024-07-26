// hooks/useUser.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  image: string;
  email?: string;
  id?: string;
}

interface UseUserHook {
  user: User | null;
  loading: boolean;
  error: string | null;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

export const useUser = (id: string): UseUserHook => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching

      try {
        const response = await axios.get<User>(`http://127.0.0.1:8000/api/auth/update/${id}/`);
        setUser(response.data);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const updateUser = async (userData: Partial<User>) => {
    setLoading(true);
    setError(null); // Reset error before updating

    try {
      const response = await axios.put<User>(`http://127.0.0.1:8000/api/auth/update/${id}/`, {...userData});
      console.log({...userData});
      setUser(response.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, updateUser };
};
