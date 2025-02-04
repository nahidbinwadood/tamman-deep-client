import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import toast from 'react-hot-toast';

export function useCardActive() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  const updateActiveCardFunction = async (itemId) => {
    const response = await axiosPublic.post(`/api/user/card/status`, itemId);
    return response?.data;
  };

  return useMutation({
    mutationKey: 'updateActiveCard',
    mutationFn: updateActiveCardFunction,
    onMutate: async (newDataId) => {
      await queryClient.cancelQueries({ queryKey: ['allCards'] });
      const prevData = queryClient.getQueryData(['allCards']);
      queryClient.setQueryData(['allCards'], (oldData) => {
        return oldData?.map((i) =>
          i?.id == newDataId ? { ...i, status: 1 } : i
        );
      });
      return { prevData };
    },
    onError: (err, newData, context) => {
      toast.error(err.message);
      queryClient.setQueryData(['allCards'], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['allCards'] });
    },
  });
}
