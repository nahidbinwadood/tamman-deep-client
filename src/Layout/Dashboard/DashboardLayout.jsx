import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import {
  DashboardContactLightSvg,
  DashboardContactSvg,
  DashboardHomeLightSvg,
  DashboardHomeSvg,
  DashboardProfileLightSvg,
  DashboardSettingsLightSvg,
  DashboardSettingsSvg,
  LogoutSvg,
  NotificationSvg,
} from '../../Components/SvgContainer';
import { DashboardProfileSvg } from './../../Components/SvgContainer';
import PrimaryButton from './../../Components/Buttons/PrimaryButton';
const DashboardLayout = () => {
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
    <div className="flex w-full max-h-[100vh] font-linik">
      {/* sidebar */}

      <div className="w-[20%] max-h-[100vh] p-8">
        <div className="w-full -ml-9 ">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="border-t border-dashed border-[#5D69F44D] my-6" />
        <div className="flex flex-col justify-between h-full">
          <ul className="space-y-2">
            {dashboardNavLinks?.map((link) => (
              <li key={link?.title}>
                <NavLink
                  to={link?.path}
                  className={({ isActive }) =>
                    `text-lg flex items-center gap-2 rounded-[16px] py-3 px-6 ${
                      isActive ? 'font-medium bg-[#EAF4FF] text-[#288DFF]' : ''
                    }`
                  }
                >
                  {link?.svg}
                  {/* {link?.svg} */}
                  <p>{link?.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <button className="flex gap-2 items-center py-3 px-6">
                <LogoutSvg />
                <p>Log Out</p>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[100vh]">
        {/* dashboard header */}
        <div className="w-full py-8 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src="https://i.ibb.co.com/sq2jwtC/ae4134169130626f5a6ff03cd06719fb.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-lg text-[#3D464F]">
                Welcome back,{' '}
                <span className="font-medium text-[#111518]">Hawkins</span>
              </h3>
              <p className="text-sm text-[#3D464F]">
                Happy to see you again on your dashboard.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#5D69F40D] rounded-full cursor-pointer">
              <NotificationSvg />
            </div>
            <Link to="/shop">
              <PrimaryButton title={'Shop'} />
            </Link>
          </div>
        </div>

        {/* dashboard body */}
        <div className="bg-[#E8F1FD] h-full rounded-md p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
