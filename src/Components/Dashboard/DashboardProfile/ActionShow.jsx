/* eslint-disable react/prop-types */
import { Switch } from '@/Components/ui/switch';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LuEye } from 'react-icons/lu';
import { TbEdit } from 'react-icons/tb';
import { TiBusinessCard } from 'react-icons/ti';

const ActionShow = ({ item, isActive, onToggle }) => {
  const [show, setShow] = useState(false);
  const axiosPublic = useAxiosPublic();

  const updateActionMutation = useMutation({
    mutationFn: async (id) => {
      const toastId = toast.loading('Updating status...'); // Show loading toast
      try {
        const response = await axiosPublic(`/api/action/status/${id}`);
        toast.success('Status updated successfully!', { id: toastId }); // Replace loading with success
        return response.data;
      } catch (error) {
        toast.error('Failed to update status!', { id: toastId }); // Replace loading with error
        throw error;
      }
    },
    onSuccess: () => {
      // Notify parent about the toggle
      onToggle(item.id);
    },
  });

  const handleUpdateActiveAction = (id) => {
    updateActionMutation.mutate(id);
  };

  return (
    <div className="border p-4 group font-inter hover:text-white transition duration-200 hover:bg-gradient-to-tl text-textColor from-[#116DFF] to-[#23C0B6] justify-between rounded-lg bg-white flex items-center">
      <div className="flex flex-1 items-center gap-4">
        <div className="w-16 h-8 rounded-md bg-textGray/50 group-hover:bg-white" />
        <h4 className="capitalize">{item?.type}</h4>
      </div>
      <div className="flex flex-1 items-center gap-2">
        <TiBusinessCard size={24} />
        <h4>Contact Card #1</h4>
      </div>
      <div className="flex-1">
        <Switch
          checked={isActive} // Controlled by parent
          onCheckedChange={() => {
            // onToggle(item.id);
            handleUpdateActiveAction(item?.id);
          }}
          className="data-[state=checked]:bg-[#23C0B6]"
        />
      </div>

      {/* preview */}
      <div className="cursor-pointer px-5">
        <LuEye onClick={() => setShow(!show)} className="w-6 h-6" />
      </div>
      <div className="cursor-pointer">
        <TbEdit size={24} />
      </div>
    </div>
  );
};

export default ActionShow;
