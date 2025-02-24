/* eslint-disable react/prop-types */
import logo from '@/assets/images/logo-dark.png';
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
import { NavLink, useLocation } from 'react-router-dom';

const DashboardResponsiveSidebar = ({ isOpen, setOpen }) => {
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
  const currentPath = useLocation().pathname;
  return (
    <section>
      {/* overlay */}
      {isOpen && (
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0  bg-black/10 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden`}
        />
      )}

      {/* main sidebar */}
      <div
        className={`fixed inset-0 w-[280px] max-w-[280px] bg-white p-5 pb-5 pl-5 pt-4 transition-all duration-500 lg:w-[300px] xl:hidden z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* logo */}
        <div>
          <img className="-ml-6" src={logo} alt="" />
        </div>

        {/* navLinks */}
        <div className="mt-8 flex flex-col gap-2 md:gap-5  ">
          {dashboardNavLinks?.map((link) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={link?.path}
              to={link?.path}
              className={({ isActive }) =>
                `md:text-lg flex items-center gap-2 rounded-[16px] py-3 px-6 ${
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
          <div className="space-y-5">
            <div className="flex flex-col gap-5">
              <div
                onClick={() => setOpen(false)}
                className={`md:text-lg flex items-center gap-2 rounded-[16px] py-3 px-6 text-[#333]`}
              >
                <LogoutSvg />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardResponsiveSidebar;
