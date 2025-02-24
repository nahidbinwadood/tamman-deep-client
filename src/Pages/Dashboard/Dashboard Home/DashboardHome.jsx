import Cube from '@/Components/Dashboard/CustomIcon/Cube';
import Contact from '@/Components/Dashboard/CustomIcon/Contact';
import BarCode from '@/Components/Dashboard/CustomIcon/BarCode';
import StatisticsBox from '@/Components/Dashboard/DashboardHome/StatisticsBox';
import Statistics from '@/Components/Dashboard/CustomIcon/Statistics';
import CommonBox from '@/Components/Dashboard/DashboardHome/CommonBox';
import ResoucesLink from '@/Components/Dashboard/DashboardHome/ResoucesLink';
import Share from '@/Components/Dashboard/CustomIcon/Share';
import Question from '@/Components/Dashboard/CustomIcon/Question';
import { Link } from 'react-router-dom';
import { GetAllCards } from '@/Hooks/Card.hook';

const DashboardHome = () => {
  const { allCards } = GetAllCards();

  return (
    <div>
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <StatisticsBox
          Icon={Cube}
          title={'Products Total'}
          quantity={allCards.length}
        />
        <StatisticsBox Icon={Contact} title={'Contacts Total'} quantity={8} />
        <StatisticsBox Icon={BarCode} title={'Taps Total'} quantity={10} />
        <StatisticsBox Icon={Statistics} title={'Statistics'} quantity={5} />
      </div>

      {/* grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pt-7">
        <CommonBox title="Products Last Edited">
          <div className="pt-4 flex w-full h-full justify-center items-center ">
            <h4 className="text-textLight font-medium ">No recent updates</h4>
          </div>
        </CommonBox>
        <CommonBox title="Resources">
          <ResoucesLink
            title="Ways to share your profile"
            Icon={Share}
          ></ResoucesLink>
          <ResoucesLink title="Faq" Icon={Question}></ResoucesLink>
          <ResoucesLink
            title="Ways to share your profile"
            Icon={Question}
          ></ResoucesLink>
        </CommonBox>
        <div className='hidden'>
          <CommonBox title="Resources">
            <div className=" h-full pt-4 flex flex-col  justify-between ">
              <div className="w-full  overflow-hidden rounded-xl ">
                <video
                  className="w-full h-full"
                  controls
                  src="https://videos.pexels.com/video-files/2260990/2260990-sd_640_360_24fps.mp4"
                ></video>
              </div>
              <div className="space-y-3">
                <div className="flex items-center  gap-14">
                  <div className="w-full rounded-full overflow-hidden flex-1 flex justify-center items-center">
                    <div className="w-3/12 h-3 bg-primaryColor"></div>
                    <div className="w-9/12 h-3 bg-gray-200"></div>
                  </div>
                  <h4 className="text-textColor font-medium">Step 1 to 6</h4>
                </div>

                <h3 className="text-textDark font-medium text-lg pb-2">
                  Edit Profile Details
                </h3>
                <Link
                  to={'/'}
                  className="text-lg font-medium text-primaryColor"
                >
                  Visit
                </Link>
              </div>
            </div>
          </CommonBox>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
