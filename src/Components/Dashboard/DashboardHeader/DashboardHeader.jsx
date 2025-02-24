/* eslint-disable react/prop-types */
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import { NotificationSvg } from '@/Components/SvgContainer';
import useAuth from '@/Hooks/useAuth';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const DashboardHeader = ({ isOpen, setOpen }) => {
  const { userName } = useAuth();

  return (
    <div className="xl:min-h-[100px] xl:max-h-[100px] w-full flex md:items-center justify-between xl:py-8 xl:px-10 px-5 py-5">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="size-12 rounded-full overflow-hidden flex-shrink-0">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/sq2jwtC/ae4134169130626f5a6ff03cd06719fb.png"
            alt=""
          />
        </div>
        <div>
          <h3 className="md:text-lg text-[#3D464F]">
            Welcome back,{' '}
            <span className="font-medium text-[#111518]">{userName}</span>
          </h3>
          <p className="text-sm text-[#3D464F] md:block hidden">
            Happy to see you again on your dashboard.
          </p>
        </div>
      </div>
      <div className="flex md:items-center gap-4">
        <div className="p-3 bg-[#5D69F40D] rounded-full cursor-pointer h-fit">
          <NotificationSvg />
        </div>
        <div className="bg-[#5D69F40D] rounded-full cursor-pointer h-fit xl:hidden">
          <Hamburger
            color="#000000"
            size={18}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        <Link to="/shop" className="hidden xl:block">
          <PrimaryButton title={'Shop'} dashboardBtn={true} />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
