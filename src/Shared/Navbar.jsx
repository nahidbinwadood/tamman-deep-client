import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';
import { CartSvg, ProfileSvg } from './../Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useAuth from '@/Hooks/useAuth';
import CartDrawer from '@/Components/Drawer/CartDrawer';
import toast from 'react-hot-toast';
import Hamburger from 'hamburger-react';
import Sidebar from '@/Components/Common/Sidebar';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const { setUser, setLoading, cartLength, hasCard } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const isDarkMode = location.pathname === '/';

  // Clear token utility function
  const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  // Logout handler
  const handleLogout = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosPublic('/api/logout');
      if (data.status === 'success') {
        clearToken();
        setUser(null);
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [axiosPublic, navigate, setUser, setLoading]);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 88);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // handler
  const handleDashboard = () => {
    if (!hasCard) {
      toast.error('You must have a card to access your dashboard');
    } else navigate('/dashboard/home');
  };
  return (
    <div className="relative">
      <div
        className={`fixed px-5 md:px-8 2xl:px-0 h-[100px] w-full top-0 left-0 z-40  topbar
          ${isScrolled && isDarkMode ? 'bg-black shadow-lg' : 'bg-transparent'}
          ${
            (isScrolled && location.pathname === '/shop') ||
            location.pathname === '/checkout'
              ? 'bg-white shadow-lg'
              : ''
          }`}
      >
        <div className="container mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <div className="h-full -ml-8">
            <Link to="/">
              <img src={isDarkMode ? logoWhite : logoBlack} alt="Logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isDarkMode ? 'text-white' : 'text-black'
            } space-x-6 hidden lg:block`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </div>

          {/* Action Icons */}
          <div className="lg:flex items-center gap-6 hidden">
            {/* Cart Icon */}
            <div
              onClick={() => setShowCart((prev) => !prev)}
              className="cursor-pointer relative"
            >
              <CartSvg light={!isDarkMode} />
              {cartLength > 0 && (
                <div className="absolute -bottom-4 -right-2 bg-primaryColor text-white size-6 flex items-center justify-center rounded-full text-xs">
                  {cartLength}
                </div>
              )}
            </div>

            {/* Profile Icon */}
            <div
              onClick={() => setShowLogin((prev) => !prev)}
              className="cursor-pointer relative"
            >
              <ProfileSvg light={!isDarkMode} />
              {showLogin && (
                <div className="bg-white px-6 py-4 font-medium rounded-md shadow-lg absolute mt-2 flex flex-col justify-center gap-2 text-center text-nowrap">
                  {token ? (
                    <>
                      <div
                        onClick={handleDashboard}
                        className="text-sm border-b pb-2 border-black/50"
                      >
                        Dashboard
                      </div>
                      <div
                        onClick={handleLogout}
                        className="text-sm cursor-pointer"
                      >
                        Log Out
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="text-sm pb-2 border-b border-black/50"
                      >
                        Login
                      </Link>
                      <Link to="/shop" className="text-sm pt-2">
                        Purchase
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* menu hamburger */}
          <div className="lg:hidden bg-primaryColor rounded-md">
            <Hamburger
              color="#ffffff"
              size={20}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </div>

      {/* sidebar */}
      <Sidebar
        isOpen={isOpen}
        setOpen={setOpen}
        handleDashboard={handleDashboard}
        token={token}
        setShowCart={setShowCart}
        handleLogout={handleLogout}
      />

      {/* Cart Drawer */}
      <CartDrawer setShowCart={setShowCart} showCart={showCart} />
    </div>
  );
};

export default Navbar;
