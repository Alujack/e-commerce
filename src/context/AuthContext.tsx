// context/AuthContext.tsx
"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getToken, setToken, removeToken } from '../utils/auth';

interface AuthContextProps {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
  removeToken: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setTokenState] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  const handleSetToken = (token: string) => {
    setToken(token);
    setTokenState(token);
  };

  const handleRemoveToken = () => {
    removeToken();
    setTokenState(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken, removeToken: handleRemoveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
