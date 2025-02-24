/* eslint-disable react/prop-types */
import { Switch } from '@/Components/ui/switch';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { TiBusinessCard } from 'react-icons/ti';

function Product({ item }) {
  const { setActiveCard } = useAuth();
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const updateActiveCardFunction = async (item) => {
    const response = await axiosPublic.post(`/api/user/card/status`, item);
    return response?.data;
  };

  const activeCardMutation = useMutation({
    mutationKey: 'activeCard',
    mutationFn: updateActiveCardFunction,
    onMutate: async (updatedItem) => {
      await queryClient.cancelQueries(['allCards']);

      const previousCards = queryClient.getQueryData(['allCards']);

      // Optimistically update the UI so only one card is active at a time
      queryClient.setQueryData(['allCards'], (oldData) => {
        if (!oldData) return [];

        return oldData.map((card) => ({
          ...card,
          status: card.id === updatedItem.item_id ? 1 : 0, // Activate only the selected card
        }));
      });
      toast.success('Card Activation Successful');

      return { previousCards };
    },
    onError: (err, updatedItem, context) => {
      toast.error(err.message);

      // Rollback to previous state if error occurs
      if (context?.previousCards) {
        queryClient.setQueryData(['allCards'], context.previousCards);
      }
    },
    onSuccess: async () => {
      setActiveCard(item);
      await queryClient.invalidateQueries(['allCards']); // Ensure fresh data after mutation
      await queryClient.invalidateQueries(['allActions']);
      // Ensure fresh data after mutation
    },
  });

  const handleUpdateActiveCard = (item) => {
    const data = {
      item_id: item?.id,
    };
    activeCardMutation.mutate(data);
  };
  return (
    <div className="border p-3 md:p-4 group font-inter hover:text-white transition duration-200 hover:bg-gradient-to-tl text-textColor from-[#116DFF] to-[#23C0B6] justify-between rounded-lg bg-white flex items-center">
      <div className="flex md:flex-1 items-center gap-2 md:gap-4">
        <div className="w-12 h-8 md:w-16 md:h-8 rounded-md bg-textGray/50 group-hover:bg-white  "></div>
        <h4 className="">{item?.userType}</h4>
      </div>
      <div className="flex md:flex-1 tex-sm items-center gap-2">
        <TiBusinessCard className="size-6 md:size-8 flex-shrink-0" />
        <h4 className='flex-shrink-0 text-sm'>{item?.card_name}</h4>
      </div>
      <div className="md:flex-1">
        <Switch
          checked={item?.status == 1}
          onCheckedChange={() => handleUpdateActiveCard(item)}
          className={'data-[state=checked]:bg-[#23C0B6]'}
        />
      </div>
      <div className="cursor-pointer">{/* <TbEdit size={24} /> */}</div>
    </div>
  );
}

export default Product;
