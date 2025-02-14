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
import {
  useAddToCart,
  useAllCartItems,
  useCartQuantity,
} from '@/Hooks/Cart.hooks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductsCard = ({ product }) => {
  const { user, setGuestUserCart } = useAuth();
  const { image, price } = product;
  const [color, setColor] = useState();
  const { allCartItems } = useAllCartItems();

  const { mutate: addToCartMutation } = useAddToCart();
  const { mutate: updateQuantityMutation } = useCartQuantity();

  // console.log(guestUserCart);
  const handleCart = async (product) => {
    if (!color) {
      return toast.error('Select a color first');
    } else {
      // checking if user is logged in
      if (!user) {
        const colorId = product?.colors.find((c) => c?.name == color)?.id;
        setGuestUserCart((prev) => {
          const productInfo = {
            id: product?.id,
            product_id: product?.id,
            name: product?.name,
            image: product?.image,
            quantity: 1,
            product_price: product?.price,
            color_name: color,
            color_id: colorId,
          };
          const alreadyExist = prev?.find(
            (item) =>
              item?.product_id === product?.id && item?.color_id === colorId
          );
          if (alreadyExist) {
            toast.success('Product added to cart');
            return prev?.map((item) =>
              item?.product_id == product?.id && item?.color_id == colorId
                ? { ...item, quantity: item?.quantity + 1 }
                : item
            );
          }
          toast.success('Product added to cart');
          return [...prev, productInfo];
        });
      } else {
        const colorId = product?.colors.find((c) => c?.name == color)?.id;
        const prevAddedItem = allCartItems?.find(
          (item) =>
            item?.product_id === product?.id && item?.color_id === colorId
        );
        if (prevAddedItem) {
          // setPauseAction(true);
          const data = {
            id: product?.id,
            product_id: product?.id,
            color_id: colorId,
            item_id: prevAddedItem?.id,
            quantity: prevAddedItem.quantity + 1,
          };
          toast.success('Product added to cart');
          updateQuantityMutation(data);
          // setPauseAction(false);
        } else {
          const productInfo = {
            id: product?.id,
            product_id: product?.id,
            name: product?.name,
            image: product?.image,
            quantity: 1,
            product_price: product?.price,
            color_name: color,
            color_id: product?.colors.find((c) => c?.name == color)?.id,
          };
          addToCartMutation(productInfo);
        }
      }
    }
  };

  return (
    <div className="bg-[#fbfbfb] border border-black/50 rounded-lg group overflow-hidden">
      <div className="h-64 md:h-[300px] w-full overflow-hidden">
        <LazyLoadImage
          effect="blur"
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
