import { BackButtonSvg } from '@/Components/SvgContainer';
import { Link, Outlet } from 'react-router-dom';

const Actions = () => {
  return (
    <>
      <div className="shadow-md font-linik">
        {/* navbar */}
        <div className="py-6 flex items-center justify-between container mx-auto">
          <Link to='/dashboard/profiles' className="flex items-center gap-3 cursor-pointer text-[#212A30]">
            <BackButtonSvg />
            <span className="text-lg font-medium">Action Creation</span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="px-10 py-3 border-2 border-primaryColor rounded-lg text-primaryColor font-semibold text-lg transition-all duration-500 hover:text-white hover:bg-primaryColor">
              Assign Action
            </button>
            <button className="px-10 py-3 bg-primaryColor text-white border-2 border-primaryColor rounded-lg  font-semibold text-lg">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 container mx-auto font-linik">
        <Outlet />
      </div>
    </>
  );
};

export default Actions;
