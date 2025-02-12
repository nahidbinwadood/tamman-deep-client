import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosPublic, { axiosPublic } from './useAxiosPublic';
import toast from 'react-hot-toast';
import useAuth from './useAuth';

//all cart items:

const fetchCartItems = async () => {
  const response = await axiosPublic('/api/cart');
  return response?.data?.data;
};

export const useAllCartItems = () => {
  const { user } = useAuth();
  const { data: allCartItems = [] } = useQuery({
    queryKey: ['allCartItems'],
    queryFn: fetchCartItems,
    enabled: !!user,
  });
  return allCartItems;
};

//add to cart:

// axios function:
const addToCart = async (data) => {
  const response = await axiosPublic.post('/api/cart/create', data);
  return response?.data;
};
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { setPauseAction, setCartLength } = useAuth();

  return useMutation({
    mutationFn: addToCart,
    onMutate: async (newData) => {
      setPauseAction(true);
      await queryClient.cancelQueries({ queryKey: ['allCartItems'] });
      const prevCarts = queryClient.getQueryData(['allCartItems']);
      queryClient.setQueryData(['allCartItems'], (oldData) => {
        const isExist = oldData?.find(
          (item) =>
            item?.product_id === newData?.product_id &&
            item?.color_id === newData?.color_id
        );

        if (isExist) {
          toast.success('Product added to cart');
          // console.log(isExist);
          return oldData;
        } else {
          toast.success('Product added to cart');
          return [...oldData, newData];
        }
      });
      setCartLength(queryClient.getQueryData(['allCartItems'])?.length);

      return { prevCarts };
    },
    onError: (err, newData, context) => {
      queryClient.setQueryData(['allCartItems'], context.prevCarts);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['allCartItems'] });
      setPauseAction(false);
    },
  });
};

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
          item?.id == newData?.item_id && item?.color_id == newData?.color_id
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
  const { setCartLength } = useAuth();
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
      setCartLength(queryClient.getQueryData(['allCartItems'])?.length);
      return { prevCarts };
    },
    onError: (err, newData, context) => {
      toast.error(err.message);
      queryClient.setQueryData(['allCartItems'], context.prevCarts);
    },
  });
}
