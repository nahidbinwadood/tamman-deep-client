/* eslint-disable react/prop-types */
import Loader from '@/Components/Loaders/Loader';
import useAuth from '@/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading, userName } = useAuth();

  const location = useLocation();
  if (loading)
    return (
      <div
        className={`h-[100vh] w-full flex items-center justify-center`}
      >
        <Loader />
      </div>
    );

  if (user || userName) return children;

  return <Navigate to="/login" state={location?.pathname} replace />;
};

export default PrivateRoute;
