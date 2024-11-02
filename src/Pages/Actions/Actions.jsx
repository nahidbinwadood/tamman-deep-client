import { BackButtonSvg } from '@/Components/SvgContainer';
import toast from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Actions = () => {
  const navigate = useNavigate();
  const handleSave = () => {
    navigate('/dashboard/profiles'); // navigate to profile page
    toast.success('Your action has saved successfully!');
  };
  return (
    <>
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        {/* navbar */}
        <div className="py-6 flex items-center justify-between container mx-auto ">
          <Link
            to="/dashboard/profiles"
            className="flex items-center gap-3 cursor-pointer text-[#212A30]"
          >
            <BackButtonSvg light={true} />
            <span className="text-lg font-medium text-white">
              Action Creation
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/dashboard/profiles');
                toast.success('Action Activated!');
              }}
              className="px-10 py-3 rounded-lg bg-transparent text-white border border-white font-semibold text-lg transition-all duration-500"
            >
              Assign Action
            </button>
            <button
              onClick={handleSave}
              className="px-10 py-3 bg-white text-primaryColor border-2 border-primaryColor rounded-lg  font-semibold text-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 pb-8 font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)]">
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Actions;
