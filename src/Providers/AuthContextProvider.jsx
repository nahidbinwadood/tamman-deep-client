/* eslint-disable react-refresh/only-export-components */

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useLocalStorage from '@/Hooks/useLocalStorage';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCard, setHasCard] = useState(false);
  const [guestUserCart, setGuestUserCart, clearGuestUserCart] = useLocalStorage(
    'cart',
    []
  );
  const [pauseAction, setPauseAction] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [cartLength, setCartLength] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const userName = localStorage.getItem('username');
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();
  const allColors = [
    '#7554c0',
    '#23C0B6',
    '#feaf84',
    '#d9243d',
    '#dd3918',
    '#74b12f',
  ];

  // Clear token utility function
  const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      setLoading(true);
      const userData = async () => {
        try {
          const { data } = await axiosPublic('/api/check');
          if (data?.has_order) {
            setHasCard(true);
          }
          console.log(data);
          if (data?.subscription) {
            setSubscription(data?.subscription);
          }
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
          setLoading(false);
          clearToken();
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
    hasCard,
    setHasCard,
    allColors,
    guestUserCart,
    setGuestUserCart,
    clearGuestUserCart,
    subscription,
    setSubscription,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
