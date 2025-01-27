/* eslint-disable react/prop-types */

import useAuth from '@/Hooks/useAuth';
import toast from 'react-hot-toast';

const ProductsCard = ({ product }) => {
  const { image, price } = product;
  const { cartItems, setCartItems } = useAuth();

  const handleCart = (product) => {
    const alreadyExist = cartItems?.find((item) => item?.id == product.id);
    if (alreadyExist) {
      return toast.error('Product already exists in your cart');
    } else {
      setCartItems((prev) => [
        ...prev,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
      toast.success('Product Added in your cart');
    }
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
          <h4 className="font-semibold text-2xl">Bamboo NFC Business Cards</h4>
          <p>The last business card you&lsquo;ll ever need.</p>
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
