/* eslint-disable react/prop-types */
import { Switch } from '@/Components/ui/switch';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { LuEye } from 'react-icons/lu';
import { TbEdit } from 'react-icons/tb';
import { TiBusinessCard } from 'react-icons/ti';

const ActionShow = ({ item }) => {
  const [show, setShow] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { activeCard } = useAuth();
  const queryClient = useQueryClient();

  const updateActionMutation = useMutation({
    mutationKey: 'updateAction',
    mutationFn: async (data) => {
      // const toastId = toast.loading('Updating status...'); // Show loading toast
      try {
        const response = await axiosPublic.post(`/api/action/status`, data);
        // toast.success('Status updated successfully!', { id: toastId }); // Replace loading with success
        console.log(response?.data);
        return response.data;
      } catch (error) {
        toast.error('Failed to update status!'); // Replace loading with error
        throw error;
      }
    },
    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: ['allActions'] });
      const prevActions = queryClient.getQueryData(['allActions']);
      queryClient.setQueryData(['allActions'], (oldData) => {
        if (!oldData) return [];
        return oldData.map((item) => {
          return { ...item, active: item?.id == data?.data_id ? 1 : 0 };
        });
      });
      toast.success('Action Activation Successful');
      return { prevActions };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(['allActions']);
    },
    onError: (err, updatedItem, context) => {
      toast.error(err.message);

      // Rollback to previous state if error occurs
      if (context?.prevActions) {
        queryClient.setQueryData(['allActions'], context.prevActions);
      }
    },
  });

  const handleUpdateActiveAction = (item) => {
    const data = {
      order_item_id: activeCard?.id,
      data_id: item?.id,
    };
    updateActionMutation.mutate(data);
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
          checked={item?.active == 1} // Controlled by parent
          onCheckedChange={() => {
            // onToggle(item.id);
            handleUpdateActiveAction(item);
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
