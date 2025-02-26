/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-dark.png';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
const Sidebar = ({ isOpen, setOpen, token, handleLogout, hasCard }) => {
  const navigate = useNavigate();
  const navLinks = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/shop',
      title: 'Shop',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleDashboard = () => {
    if (!hasCard) {
      setOpen(false);
      toast.error('You must have a card to access your dashboard');
    } else {
      setOpen(false);
      navigate('/dashboard/home');
    }
  };
  return (
    <div>
      {/* layer */}
      {isOpen && (
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0  bg-black/10 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden`}
        />
      )}
      <div
        className={`fixed font-inter left-0 top-0 w-72 px-8 transition-all lg:hidden duration-500 h-full bg-white z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* logo */}
        <div>
          <img className="-ml-6" src={logo} alt="" />
        </div>

        {/* navItems */}
        <div className="mt-12 flex flex-col gap-5">
          {navLinks?.map((item) => (
            <NavLink
              to={item?.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `md:text-lg ${isActive ? 'text-primaryColor' : 'text-black'}`
              }
              key={item?.path}
            >
              {item?.title}
            </NavLink>
          ))}
          <div className="space-y-5">
            {!token ? (
              <div className="flex flex-col gap-5">
                <Link to="/login" className="md:text-lg">
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div onClick={handleDashboard} className="md:text-lg">
                  Dashboard
                </div>
                <div onClick={handleLogout} className="md:text-lg">
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
