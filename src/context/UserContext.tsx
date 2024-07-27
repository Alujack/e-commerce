'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  email?: string;
  image?: string; // Assuming image URL is used here
  id?: string;
}

interface UserContextProps {
  user: User | null;
  updateUser: (formData: FormData) => Promise<void>; // Updated to accept FormData
  fetchUser: (id: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const fetchUserData = async (id: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/update/${id}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data: User = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUser = async (formData: FormData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/update/${formData.get('id')}/`, {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to update user data');
      }
      const updatedUser: User = await response.json();
      setUser(updatedUser);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const fetchUser = (id: string) => {
    setUserId(id);
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ user, updateUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
