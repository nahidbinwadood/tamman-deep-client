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

const ProductsCard = ({ product }) => {
   
  const { image, price } = product;
  const { cartItems, setCartItems } = useAuth();
  const [color, setColor] = useState();

  const handleCart = (product) => {
    if (!color) {
      return toast.error('Select a color first');
    }

    // Check if the product with the same color already exists
    const alreadyExist = cartItems?.some(
      (item) => item.id === product.id && item.color === color
    );

    if (alreadyExist) {
      return toast.error('Product with this color already exists in your cart');
    }

    // Add product with the selected color
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
        totalPrice: product.price,
        color,
        color_id: product?.colors?.find((i) => i.name === color)?.id,
      },
    ]);
    toast.success('Product added to your cart');
  };

  return (
    <div className="bg-[#fbfbfb] border border-black/50 rounded-lg group overflow-hidden">
      <div className="h-[300px] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
          src={image}
          alt=""
        />
      </div>

      {/* description */}
      <div className="px-5 py-6">
        <div className="space-y-2 h-24">
          <h4 className="font-semibold text-2xl">{product?.name}</h4>
          <p>The last business card you&lsquo;ll ever need.</p>
        </div>
        <div className="flex  items-center gap-2 mt-5">
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
