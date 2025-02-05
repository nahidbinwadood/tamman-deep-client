/* eslint-disable react-refresh/only-export-components */

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pauseAction, setPauseAction] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [cartLength, setCartLength] = useState(null);
  const userName = localStorage.getItem('username');
  const axiosPublic = useAxiosPublic();

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setLoading(true);
      const userData = async () => {
        try {
          const { data } = await axiosPublic('/api/check');
          const response = await axiosPublic('/api/cart');
          const allCardsData = await axiosPublic('/api/user/card');
          setActiveCard(
            allCardsData?.data?.data?.find((card) => card?.status == 1)
          );
          setCartLength(response?.data?.data?.length);
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
    data,
    setData,
    user,
    setUser,
    loading,
    setLoading,
    userName,
    cartLength,
    setCartLength,
    pauseAction,
    setPauseAction,
    activeCard,
    setActiveCard,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
