import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';
import { CartSvg, ProfileSvg, SearchSvg } from './../Components/SvgContainer';
import { useEffect, useState } from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import useAuth from '@/Hooks/useAuth';
import CartDrawer from '@/Components/Drawer/CartDrawer';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const { setUser, setLoading } = useAuth();

  const currentLocation = useLocation().pathname;
  const [showLogin, setShowLogin] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  console.log(currentLocation);
  const [showCart, setShowCart] = useState(false); // State to control Cart Drawer visibility

  // Clear token utility function
  function clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  // Logout handler
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
      console.error(err);
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 88); // Check if scrolled past 88px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`fixed h-[100px] w-full bg-transparent top-0 left-0 z-50  transition-all duration-300 ${
          isScrolled && currentLocation == '/'
            ? 'bg-[#0f1d27] shadow-lg'
            : 'bg-transparent '
        } ${
          isScrolled && currentLocation == '/shop'
            ? 'bg-[#fff] shadow-lg'
            : 'bg-transparent '
        }`}
      >
        <div className="container mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <div className="h-full -ml-8">
            <Link to="/">
              <img
                src={currentLocation === '/' ? logoWhite : logoBlack}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              currentLocation === '/' ? 'text-white' : 'text-black'
            } space-x-6`}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-6">
            {/* Search Icon */}
            {/* <div className="cursor-pointer">
              {currentLocation === '/' ? <SearchSvg /> : <SearchSvg light={true} />}
            </div> */}

            {/* Cart Icon */}
            <div
              onClick={() => setShowCart(!showCart)}
              className="cursor-pointer"
            >
              {currentLocation === '/' ? <CartSvg /> : <CartSvg light={true} />}
            </div>

            {/* Profile Icon */}
            <div
              onClick={() => setShowLogin(!showLogin)}
              className="cursor-pointer relative"
            >
              {currentLocation === '/' ? (
                <ProfileSvg />
              ) : (
                <ProfileSvg light={true} />
              )}
              {/* Login/Logout Menu */}
              {showLogin && (
                <div className="bg-white px-6 py-4 font-medium rounded-md shadow-lg absolute mt-2 flex flex-col justify-center gap-2 text-center text-nowrap">
                  {token ? (
                    <>
                      <Link
                        to="/dashboard/home"
                        className="text-sm border-b pb-2 border-black/50"
                      >
                        Dashboard
                      </Link>
                      <div onClick={handleLogout} className="text-sm">
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
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer setShowCart={setShowCart} showCart={showCart} />
    </div>
  );
};

export default Navbar;
