/* eslint-disable react/prop-types */
import { Switch } from '@/Components/ui/switch';
import { useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { TbEdit } from 'react-icons/tb';
import { TiBusinessCard } from 'react-icons/ti';

const ActionShow = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border  p-4 group  font-inter hover:text-white transition duration-200 hover:bg-gradient-to-tl text-textColor from-[#116DFF] to-[#23C0B6] justify-between rounded-lg bg-white flex items-center ">
      <div className="flex flex-1 items-center gap-4">
        <div className="w-16 h-8 rounded-md bg-textGray/50 group-hover:bg-white  "></div>
        <h4 className="capitalize">{item?.category_id}</h4>
      </div>
      <div className="flex flex-1 tex-sm items-center gap-2">
        <TiBusinessCard size={24} />
        <h4>Contact Card #1</h4>
      </div>
      <div className="flex-1">
        <Switch className={'data-[state=checked]:bg-black'} />
      </div>

      {/* preview */}
      <div className='cursor-pointer px-5'>
        <LuEye
          onClick={() => setShow(!show)}
          className="size-6 "
        />
      </div>
      <div className="cursor-pointer">
        <TbEdit size={24} />
      </div>
    </div>
  );
};

export default ActionShow;
