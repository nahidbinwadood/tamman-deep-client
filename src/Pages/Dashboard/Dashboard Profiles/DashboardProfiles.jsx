import CommonAction from '@/Components/Dashboard/DashboardProfile/CommonAction';
import TabContents from '@/Components/Dashboard/DashboardProfile/TabContents';
import ActionShareModal from '@/Components/Modals/ActionShareModal';
import CreateActionModal from '@/Components/Modals/CreateActionModal';
import Modal from '@/Components/Modals/Modal';
import useAuth from '@/Hooks/useAuth';

import { useState } from 'react';
import { FaAddressCard } from 'react-icons/fa6';
import { HiPlusCircle } from 'react-icons/hi2';
import { MdContentCopy } from 'react-icons/md';
import { RiListUnordered } from 'react-icons/ri';

const DashboardProfiles = () => {
  const [open, setOpen] = useState(false);
  const { activeCard } = useAuth();
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
  // const getQrImage = async () => {
  //   const { data } = await axiosPublic.get(`/storage/${activeCard?.qr_code}`);
  //   return data;
  // };
  // const { data, isLoading, isFetching } = useQuery({
  //   queryKey: ['qrCodeImage', activeCard?.qr_code],
  //   queryFn: getQrImage,
  //   enabled: !!activeCard?.qr_code,
  // });

  const qrCodeImage = `${import.meta.env.VITE_API_URL}/storage/${
    activeCard?.qr_code
  }`;

  // console.log(data);

  return (
    <div className="flex flex-col gap-6">
      {/* header */}
      {/* <DashboardProfileHeader /> */}

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
        <TabContents activeTab={activeTab} />
      </div>

      {/* Modals */}

      {activeTab == 'Create Action' && (
        <Modal open={open} setOpen={setOpen} setActiveTab={setActiveTab}>
          <CreateActionModal setOpen={setOpen} />
        </Modal>
      )}
      {activeTab == 'Share' && (
        <Modal open={open} setOpen={setOpen} setActiveTab={setActiveTab}>
          <ActionShareModal
            setOpen={setOpen}
            // isLoading={isLoading}
            // isFetching={isFetching}
            qrCodeImage={qrCodeImage}
          />
        </Modal>
      )}
    </div>
  );
};

export default DashboardProfiles;
