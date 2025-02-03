import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import toast from 'react-hot-toast';

//update product quantity
export function useCartQuantity() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const updateCartQuantityFunction = async (info) => {
    const response = await axiosPublic.post('/api/cart/quantity', info);
    return response?.data;
  };

  return useMutation({
    mutationKey: 'updateCartQuantity',
    mutationFn: updateCartQuantityFunction,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ['allCartItems'] });
      const prevCarts = queryClient.getQueriesData(['allCartItems']);
      queryClient.setQueryData(['allCartItems'], (oldData) => {
        return oldData?.map((item) =>
          item?.id == newData?.item_id
            ? { ...item, quantity: newData?.quantity }
            : item
        );
      });
      return { prevCarts };
    },
    onError: (err, newData, context) => {
      toast.error(err.message);
      queryClient.setQueryData(['allCartItems'], context.prevCarts);
    },
  });
}

//update cart delete
export function useCartDelete() {
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const deleteCartFunction = async (item_id) => {
    const response = await axiosPublic.post('/api/cart/delete', item_id);
    return response?.data;
  };

  return useMutation({
    mutationKey: 'deleteCart',
    mutationFn: deleteCartFunction,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ['allCartItems'] });
      const prevCarts = queryClient.getQueryData(['allCartItems']);
      queryClient.setQueryData(['allCartItems'], (oldData) => {
        return oldData?.filter((item) => item?.id != newData?.item_id);
      });
      return { prevCarts };
    },
    onError: (err, newData, context) => {
      toast.error(err.message);
      queryClient.setQueryData(['allCartItems'], context.prevCarts);
    },
  });
}

