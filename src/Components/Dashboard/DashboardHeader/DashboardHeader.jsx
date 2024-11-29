import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import { NotificationSvg } from '@/Components/SvgContainer';
import useAuth from '@/Hooks/useAuth';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const { userName } = useAuth();
  return (
    <div className="min-h-[100px] max-h-[100px] w-full flex items-center justify-between py-8 px-10">
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
            <span className="font-medium text-[#111518]">{userName}</span>
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
          <PrimaryButton title={'Shop'} dashboardBtn={true} />
        </Link>
      </div>
    </div>
  );
};

export default DashboardHeader;
