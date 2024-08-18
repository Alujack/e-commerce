// src/context/UserContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface UserContextProps {
  user: any;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: { username: string; email: string; password: string }) => Promise<void>;
  confirmEmail: (uid: string, token: string) => Promise<void>;
  resendActivation: (email: string) => Promise<void>;
  setPassword: (uid: string, token: string, newPassword: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resetPasswordConfirm: (uid: string, token: string, newPassword: string) => Promise<void>;
  setUsername: (uid: string, token: string, newUsername: string) => Promise<void>;
  resetUsername: (email: string) => Promise<void>;
  resetUsernameConfirm: (uid: string, token: string, newUsername: string) => Promise<void>;
  loginWithToken: (credentials: { username: string; password: string }) => Promise<void>;
  logoutWithToken: () => Promise<void>;
  createJWT: (credentials: { username: string; password: string }) => Promise<void>;
  refreshJWT: (refreshToken: string) => Promise<void>;
  verifyJWT: (token: string) => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  // Helper function to handle API calls
  const handleRequest = async (url: string, method: 'POST' | 'GET', data?: any) => {
    try {
      const response = await axios({ url, method, data });
      return response.data;
    } catch (error) {
      console.error(`${method} request to ${url} failed:`, error);
      throw error;
    }
  };

  const login = async (credentials: { username: string; password: string }) => {
    const data = await handleRequest('/token/login/', 'POST', credentials);
    setUser(data);
  };

  const logout = async () => {
    await handleRequest('/token/logout/', 'POST');
    setUser(null);
  };

  const register = async (userData: { username: string; email: string; password: string }) => {
    await handleRequest('/users/', 'POST', userData);
  };

  const confirmEmail = async (uid: string, token: string) => {
    await handleRequest('/users/confirm/', 'POST', { uid, token });
  };

  const resendActivation = async (email: string) => {
    await handleRequest('/users/resend_activation/', 'POST', { email });
  };

  const setPassword = async (uid: string, token: string, newPassword: string) => {
    await handleRequest('/users/set_password/', 'POST', { uid, token, new_password: newPassword });
  };

  const resetPassword = async (email: string) => {
    await handleRequest('/users/reset_password/', 'POST', { email });
  };

  const resetPasswordConfirm = async (uid: string, token: string, newPassword: string) => {
    await handleRequest('/users/reset_password_confirm/', 'POST', { uid, token, new_password: newPassword });
  };

  const setUsername = async (uid: string, token: string, newUsername: string) => {
    await handleRequest('/users/set_username/', 'POST', { uid, token, new_username: newUsername });
  };

  const resetUsername = async (email: string) => {
    await handleRequest('/users/reset_username/', 'POST', { email });
  };

  const resetUsernameConfirm = async (uid: string, token: string, newUsername: string) => {
    await handleRequest('/users/reset_username_confirm/', 'POST', { uid, token, new_username: newUsername });
  };

  const loginWithToken = async (credentials: { username: string; password: string }) => {
    const data = await handleRequest('/token/login/', 'POST', credentials);
    setUser(data);
  };

  const logoutWithToken = async () => {
    await handleRequest('/token/logout/', 'POST');
    setUser(null);
  };

  const createJWT = async (credentials: { username: string; password: string }) => {
    const data = await handleRequest('/jwt/create/', 'POST', credentials);
    setUser(data);
  };

  const refreshJWT = async (refreshToken: string) => {
    await handleRequest('/jwt/refresh/', 'POST', { refresh: refreshToken });
  };

  const verifyJWT = async (token: string) => {
    await handleRequest('/jwt/verify/', 'POST', { token });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        confirmEmail,
        resendActivation,
        setPassword,
        resetPassword,
        resetPasswordConfirm,
        setUsername,
        resetUsername,
        resetUsernameConfirm,
        loginWithToken,
        logoutWithToken,
        createJWT,
        refreshJWT,
        verifyJWT,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
