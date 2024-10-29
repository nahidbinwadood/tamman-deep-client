import Cube from '@/Components/Dashboard/CustomIcon/Cube';
import StatisticsBox from '../../../Components/Dashboard/DashboardHome/StatisticsBox'
import Contact from '@/Components/Dashboard/CustomIcon/Contact';



const DashboardHome = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-6'>
        <StatisticsBox Icon={Cube} title={'Products Total'} quantity={0} />
        <StatisticsBox Icon={Contact} title={'Contacts Total'} quantity={8} />
        <StatisticsBox Icon={Cube} title={'Taps Total'} quantity={10} />
        <StatisticsBox Icon={Cube} title={'Statistics'} quantity={5} />
      </div>
    </div>
  );
};

export default DashboardHome;
