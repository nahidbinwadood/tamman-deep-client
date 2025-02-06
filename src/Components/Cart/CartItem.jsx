/* eslint-disable react/prop-types */
import useAuth from '@/Hooks/useAuth';
import { DeleteSvg, MinusSvg, PlusSvg } from '../SvgContainer/SvgContainer';
import { useCartDelete, useCartQuantity } from '@/Hooks/Cart.hooks';

const CartItem = ({ item }) => {
  const { pauseAction } = useAuth();

  //update cart quantity function:
  const { mutate: cartQuantityMutation } = useCartQuantity();
  const { mutate: cartDeleteMutation } = useCartDelete();

  const handleIncrement = (item) => {
    const data = {
      item_id: item?.id,
      quantity: item.quantity + 1,
    };
    cartQuantityMutation(data);
  };

  const handleDecrement = (item) => {
    const data = {
      item_id: item?.id,
      quantity: item.quantity - 1,
    };
    cartQuantityMutation(data);
  };

  const handleDelete = (item_id) => {
    const data = {
      item_id,
    };
    cartDeleteMutation(data);
  };

  return (
    <div className="flex items-center gap-4 justify-between bg-white rounded-md p-4">
      {/* image */}
      <div className="flex-shrink-0">
        <div className="h-24 w-24">
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
              <h5>{item?.name}</h5>
              <div className="text-black/40">
                {/* <p>Style: Minimal</p> */}
                <p>
                  Color: <span className="capitalize">{item?.color_name}</span>
                </p>
              </div>
            </div>
          </div>
          <button
            disabled={pauseAction}
            onClick={() => handleDelete(item?.id)}
            className={`cursor-pointer ${
              pauseAction
                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                : 'opacity-100'
            }`}
          >
            <DeleteSvg />
          </button>
        </div>

        {/* count */}
        <div className="flex items-center justify-between">
          {/* count */}
          <div className="border border-black/30 rounded-full flex items-center justify-center">
            <button
              disabled={item?.quantity === 1 || pauseAction}
              onClick={() => handleDecrement(item)}
              className={`cursor-pointer px-2 ${
                item?.quantity == 0 || pauseAction
                  ? 'cursor-not-allowed pointer-events-none'
                  : ''
              }`}
            >
              <MinusSvg />
            </button>
            <div className="px-3 border-x border-black/30 py-1 w-8 flex items-center justify-center text-sm">
              {item?.quantity}
            </div>
            <button
              disabled={item?.quantity === 10 || pauseAction}
              onClick={() => handleIncrement(item)}
              className={`cursor-pointer px-2 ${
                pauseAction || item?.quantity === 10
                  ? 'opacity-50 pointer-events-none'
                  : 'opacity-100'
              }`}
            >
              <PlusSvg />
            </button>
          </div>

          {/* price */}
          <div>
            <h5 className="normal-case font-medium text-black">
              {/* <span className="text-black/30 text-sm line-through">$20</span>$ */}
              ${(parseFloat(item?.product_price) * item?.quantity).toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
