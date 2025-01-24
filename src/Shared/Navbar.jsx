import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';

import { CartSvg, ProfileSvg, SearchSvg } from './../Components/SvgContainer';
import { useState } from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useAuth from '@/Hooks/useAuth';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const { setUser, setLoading } = useAuth();

  const isHomepage = useLocation().pathname;
  const [showLogin, setShowLogin] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  // functions:
  function clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  const handleLogout = async () => {
    try {
      const { data } = await axiosPublic('/api/logout');
      setLoading(true);
      if (data.status === 'success') {
        clearToken();
        setUser(null);
        setLoading(false);
        navigate('/login');
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="absolute h-[88px] w-full bg-transparent top-0 left-0">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="h-full -ml-8">
          <Link to="/">
            <img src={isHomepage == '/' ? logoWhite : logoBlack} alt="" />
          </Link>
        </div>
        <div
          className={`${
            isHomepage == '/' ? 'text-white' : 'text-black'
          } space-x-6`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer">
            {isHomepage == '/' ? <SearchSvg /> : <SearchSvg light={true} />}
          </div>
          <Link to="/dashboard/home" className="cursor-pointer">
            {isHomepage == '/' ? <CartSvg /> : <CartSvg light={true} />}
          </Link>
          <div
            onClick={() => setShowLogin(!showLogin)}
            className="cursor-pointer relative"
          >
            {isHomepage == '/' ? <ProfileSvg /> : <ProfileSvg light={true} />}
            {showLogin ? (
              token ? (
                <div className="bg-white px-6 py-4 font-medium rounded-md shadow-lg absolute  mt-2 flex flex-col justify-center gap-2 text-center text-nowrap">
                  <Link
                    to="/dashboard/home"
                    className="text-sm border-b pb-2 border-black/50"
                  >
                    Dashboard
                  </Link>
                  <div onClick={handleLogout} className="text-sm">
                    Log Out
                  </div>
                </div>
              ) : (
                <div className="bg-white px-6 py-4 font-medium rounded-md shadow-lg absolute  mt-2 flex flex-col justify-center text-center">
                  <Link
                    to="/login"
                    className="text-sm pb-2 border-b border-black/50"
                  >
                    Login
                  </Link>
                  <Link to="/shop" className="text-sm pt-2">
                    Purchase
                  </Link>
                </div>
              )
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
