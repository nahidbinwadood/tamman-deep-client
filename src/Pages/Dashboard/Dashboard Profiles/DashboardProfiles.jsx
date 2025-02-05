import CommonAction from '@/Components/Dashboard/DashboardProfile/CommonAction';
import DashboardProfileHeader from '@/Components/Dashboard/DashboardProfile/DashboardProfileHeader';
import TabContents from '@/Components/Dashboard/DashboardProfile/TabContents';
 
import CreateActionModal from '@/Components/Modals/CreateActionModal';
import Modal from '@/Components/Modals/Modal';


import { useState } from 'react';
import { FaAddressCard } from 'react-icons/fa6';
import { HiPlusCircle } from 'react-icons/hi2';
import { MdContentCopy } from 'react-icons/md';
import { RiListUnordered } from 'react-icons/ri';

const DashboardProfiles = () => {

  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('My Cards');

  const allTabs = [
    {
      title: 'My Cards',
      Icon: FaAddressCard,
    },
    {
      title: 'Create Action',
      Icon: HiPlusCircle,
    },
    {
      title: 'Your Actions',
      Icon: RiListUnordered,
    },
    {
      title: 'Share',
      Icon: MdContentCopy,
    },
  ];



  //if Loading:

  // if (isLoading) {
  //   return (
  //     <div className="h-[70vh] w-full flex items-center justify-center">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col gap-6">
      {/* header */}
      <DashboardProfileHeader />

      {/* body */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="col-span-4 p-5 h-fit rounded-xl flex flex-col gap-4 border bg-white">
          {allTabs?.map((tab) => (
            <CommonAction
              key={tab?.title}
              tab={tab}
              setOpen={setOpen}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </div>

        {/* Right Section */}
        <TabContents   activeTab={activeTab} />
      </div>

      {/* Modals */}

      {activeTab == 'Create Action' && (
        <Modal open={open} setOpen={setOpen} setActiveTab={setActiveTab}>
          <CreateActionModal setOpen={setOpen} />
        </Modal>
      )}
      {activeTab == 'Share' && (
        <Modal open={open} setOpen={setOpen} setActiveTab={setActiveTab}>
          {/* <ActionShareModal setOpen={setOpen} qrCode={allActions?.qrcode} /> */}
        </Modal>
      )}
    </div>
  );
};

export default DashboardProfiles;
