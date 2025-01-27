/* eslint-disable react-refresh/only-export-components */

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useLocalStorage from '@/Hooks/useLocalStorage';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const userName = localStorage.getItem('username');
  const axiosPublic = useAxiosPublic();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setLoading(true);
      const userData = async () => {
        try {
          const { data } = await axiosPublic('/api/check');
          setUser(data?.user);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      };
      userData();
    }
  }, [axiosPublic, token]);

  const allValues = {
    user,
    setUser,
    loading,
    setLoading,
    userName,
    cartItems,
    setCartItems,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
