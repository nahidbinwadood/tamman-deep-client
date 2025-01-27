/* eslint-disable react/prop-types */
import useAuth from '@/Hooks/useAuth';
import { DeleteSvg, MinusSvg, PlusSvg } from '../SvgContainer/SvgContainer';

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useAuth();

  const handleIncrement = () => {
    setCartItems((prev) => {
      return prev.map((i) => {
        const newQuantity = Math.min(i.quantity + 1, 10);
        return item.id === i.id
          ? { ...i, quantity: newQuantity, totalPrice: newQuantity * i.price }
          : i;
      });
    });
  };

  const handleDecrement = () => {
    setCartItems((prev) => {
      return prev.map((i) => {
        const newQuantity = Math.max(i.quantity - 1, 0);
        return item.id === i.id
          ? { ...i, quantity: newQuantity, totalPrice: newQuantity * i.price }
          : i;
      });
    });
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems?.filter((item) => item?.id != itemId);
    setCartItems(updatedCartItems);
  };
  return (
    <div className="flex items-center gap-4 justify-between bg-white rounded-md p-4">
      {/* image */}
      <div className="flex-shrink-0">
        <div className="h-24">
          <img
            className="w-full h-full object-cover"
            src={item?.image}
            alt=""
          />
        </div>
      </div>
      {/* info */}
      <div className="space-y-5 w-full">
        {/* card description */}
        <div className="flex justify-between w-full">
          <div className="space-y-2">
            <div className="space-y-1">
              <h5>One Tap Card</h5>
              <div className="text-black/40">
                <p>Style: Minimal</p>
                <p>Color: Black</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleDelete(item?.id)}
            className="cursor-pointer"
          >
            <DeleteSvg />
          </div>
        </div>

        {/* count */}
        <div className="flex items-center justify-between">
          {/* count */}
          <div className="border border-black/30 rounded-full flex items-center justify-center">
            <button
              disabled={item?.quantity === 1}
              onClick={handleDecrement}
              className={`cursor-pointer px-2 ${
                item?.quantity === 0 ? 'cursor-not-allowed' : ''
              }`}
            >
              <MinusSvg />
            </button>
            <div className="px-3 border-x border-black/30 py-1 w-8 flex items-center justify-center text-sm">
              {item?.quantity}
            </div>
            <button
              disabled={item?.quantity === 10}
              onClick={handleIncrement}
              className="cursor-pointer px-2"
            >
              <PlusSvg />
            </button>
          </div>

          {/* price */}
          <div>
            <h5 className="normal-case font-medium text-black">
              {/* <span className="text-black/30 text-sm line-through">$20</span>$ */}
              ${parseFloat(item.totalPrice).toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
