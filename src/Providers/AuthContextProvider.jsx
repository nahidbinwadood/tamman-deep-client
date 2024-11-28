/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userName=localStorage.getItem('username')

  const [loading, setLoading] = useState(false);
  console.log(userName);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  });
  const allValues = { user, setUser, loading, setLoading };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
