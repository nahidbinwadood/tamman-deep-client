/* eslint-disable react/prop-types */
import useAuth from '@/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading ,userName} = useAuth();
  
  const location = useLocation();
  if (loading)
    return (
      <div className={`h-full w-full flex items-center justify-center`}>
        <h1>loading....</h1>
      </div>
    );

  if (user || userName) return children;

  return <Navigate to="/login" state={location?.pathname} replace />;
};

export default PrivateRoute;
