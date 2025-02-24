import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/Components/Dashboard/Sidebar/DashboardSidebar';
import DashboardHeader from '@/Components/Dashboard/DashboardHeader/DashboardHeader';
import { useState } from 'react';
import DashboardResponsiveSidebar from '@/Components/Dashboard/Sidebar/DashboardResponsiveSidebar';
const DashboardLayout = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="flex w-full font-inter overflow-hidden min-h-screen max-h-screen">
        {/* sidebar */}
        <DashboardSidebar />

        {/* Dashboard Wrapper */}
        <div className="xl:w-[calc(100%-350px)] min-h-screen max-h-screen w-full">
          {/* dashboard header */}
          <DashboardHeader isOpen={isOpen} setOpen={setOpen} />

          {/* dashboard body */}
          <div className="min-h-[calc(100%-156px)] max-h-[calc(100%-156px)]  p-5 md:p-7 lg:p-8 xl:p-10 xl:min-h-[calc(100%-100px)] xl:max-h-[calc(100%-100px)] overflow-y-auto bg-[#F7F7FE] rounded-md">
            <Outlet />
          </div>
        </div>

        {/* dashboard responsive sidebar */}
        <DashboardResponsiveSidebar isOpen={isOpen} setOpen={setOpen} />
      </div>
    </>
  );
};

export default DashboardLayout;
