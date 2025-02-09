/* eslint-disable react/prop-types */

import useAuth from '@/Hooks/useAuth';
import toast from 'react-hot-toast';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ProductsCard = ({ product }) => {
  const { user, setCartLength, setPauseAction } = useAuth();
  const { image, price } = product;
  const [color, setColor] = useState();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();

  // axios function:
  const addToCart = async (data) => {
    const response = await axiosPublic.post('/api/cart/create', data);
    return response?.data;
  };

  //mutation function:
  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onMutate: async (newData) => {
      setPauseAction(true);
      await queryClient.cancelQueries({ queryKey: ['allCartItems'] });
      const prevCarts = queryClient.getQueryData(['allCartItems']);
      queryClient.setQueryData(['allCartItems'], (oldData) => {
        const isExist = oldData?.some(
          (item) =>
            item?.product_id === newData?.product_id && item?.color_id === newData?.color_id
        );

        if (isExist) {
          toast.error('Product already added to cart with this color');
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
  const handleCart = (product) => {
    // checking if user is logged in
    if (!user) {
      toast.error('Please Login First !');
      navigate('/login');
    } else {
      if (!color) {
        return toast.error('Select a color first');
      } else {
        const productInfo = {
          id: product?.id,
          product_id:product?.id,
          name: product?.name,
          image: product?.image,
          quantity: 1,
          product_price: product?.price,
          color_name: color,
          color_id: product?.colors.find((c) => c?.name == color)?.id,
        };
        addToCartMutation.mutate(productInfo);
      }
    }
  };

  return (
    <div className="bg-[#fbfbfb] border border-black/50 rounded-lg group overflow-hidden">
      <div className="h-64 md:h-[300px] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition-all duration-300"
          src={image}
          alt=""
        />
      </div>

      {/* description */}
      <div className="px-5 py-6">
        <div className="space-y-2 h-24">
          <h4 className="font-semibold text-xl md:text-2xl">{product?.name}</h4>
          <p>The last business card you&lsquo;ll ever need.</p>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <p className="font-medium ">Colors</p>
          <Select
            onValueChange={(value) => {
              setColor(value);
            }}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent className="capitalize">
              <SelectGroup>
                <SelectLabel>Colors</SelectLabel>
                {product?.colors?.map((item) => (
                  <SelectItem
                    key={item?.id}
                    value={item?.name}
                    className="capitalize"
                  >
                    {item?.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full flex items-center justify-between mt-5 ">
          {/* price */}
          <p className="text-black/80 font-medium ">${price}</p>
          <button
            onClick={() => handleCart(product)}
            className="px-6 py-3 bg-primaryColor rounded-md text-white hover:bg-transparent hover:text-primaryColor transition-all border border-primaryColor font-medium duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
