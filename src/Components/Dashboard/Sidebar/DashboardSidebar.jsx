import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/images/logo-black.png';
import {
  DashboardContactLightSvg,
  DashboardContactSvg,
  DashboardHomeLightSvg,
  DashboardHomeSvg,
  DashboardProfileLightSvg,
  DashboardProfileSvg,
  DashboardSettingsLightSvg,
  DashboardSettingsSvg,
  LogoutSvg,
} from '@/Components/SvgContainer';

const DashboardSidebar = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const { setUser, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const dashboardNavLinks = [
    {
      title: 'Home',
      path: '/dashboard/home',
      svg: <DashboardHomeSvg />,
      svgLight: <DashboardHomeLightSvg />,
    },
    {
      title: 'Profiles',
      path: '/dashboard/profiles',
      svg: <DashboardProfileSvg />,
      svgLight: <DashboardProfileLightSvg />,
    },
    {
      title: 'Contacts',
      path: '/dashboard/contacts',
      svg: <DashboardContactSvg />,
      svgLight: <DashboardContactLightSvg />,
    },
    {
      title: 'Setting',
      path: '/dashboard/setting',
      svg: <DashboardSettingsSvg />,
      svgLight: <DashboardSettingsLightSvg />,
    },
  ];

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
    <div className="min-h-screen max-h-screen xl:w-[300px] 2xl:w-[350px] p-8 hidden xl:flex flex-col justify-between">
      <div>
        {/* Logo Section */}
        <div className="w-full flex items-center justify-center -ml-9 mb-6">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full border-dashed border-t border-[#5D69F4]/30 my-6" />

        {/* Nav Links Section */}
        <div className="flex flex-col space-y-4 mb-auto">
          {dashboardNavLinks?.map((link) => (
            <NavLink
              key={link?.path}
              to={link?.path}
              className={({ isActive }) =>
                `text-lg flex items-center gap-2 rounded-[16px] py-3 px-6 ${
                  isActive
                    ? 'font-medium bg-gradient-to-r from-blue-600 to-teal-400 text-[#fff]'
                    : 'text-[#333]'
                }`
              }
            >
              {currentPath == link?.path ? link?.svgLight : link?.svg}
              <p>{link?.title}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Logout Section */}
      <div>
        <button
          onClick={handleLogout}
          className="flex gap-2 items-center py-3 px-6 w-full text-[#333] rounded-[16px]"
        >
          <LogoutSvg />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
