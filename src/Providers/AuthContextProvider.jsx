/* eslint-disable react-refresh/only-export-components */

import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      const response = async () => {
        try {
          const { data } = await axiosPublic('api/check');
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      };
      response();
    }
  }, [axiosPublic, user]);

  const allValues = { user, setUser, loading, setLoading };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
