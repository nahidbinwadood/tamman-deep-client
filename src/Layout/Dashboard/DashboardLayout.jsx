import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/Components/Dashboard/Sidebar/DashboardSidebar';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader/DashboardHeader';
const DashboardLayout = () => {
  return (
    <div className="flex w-full font-inter overflow-hidden min-h-screen max-h-screen">
      {/* sidebar */}
      <DashboardSidebar />

      {/* Dashboard Wrapper */}
      <div className="w-[calc(100%-350px)] min-h-screen max-h-screen">
        {/* dashboard header */}
        <DashboardHeader />

        {/* dashboard body */}
        <div className="min-h-[calc(100%-100px)] p-10 max-h-[calc(100%-100px)] overflow-y-auto bg-[#F7F7FE] rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
