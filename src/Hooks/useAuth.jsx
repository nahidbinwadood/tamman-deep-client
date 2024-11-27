import { AuthContext } from '@/Providers/AuthContextProvider';
import { useContext } from 'react';

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
