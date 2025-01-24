import cardImg from '@/assets/images/cart-card-1.png';
import { DeleteSvg, MinusSvg, PlusSvg } from '../SvgContainer/SvgContainer';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const CartItem = () => {
  const [count, setCount] = useState(1);
  const basePrice = 15;
  const totalPrice = basePrice * count;

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 10));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  return (
    <div className="flex items-center gap-4 justify-between bg-white rounded-md p-4">
      {/* image */}
      <div className="flex-shrink-0">
        <img src={cardImg} alt="" />
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
          <div className="cursor-pointer">
            <DeleteSvg />
          </div>
        </div>

        {/* count */}
        <div className="flex items-center justify-between">
          {/* count */}
          <div className="border border-black/30 rounded-full flex items-center justify-center">
            <button
              disabled={count === 0}
              onClick={handleDecrement}
              className={`cursor-pointer px-2 ${
                count === 0 ? 'cursor-not-allowed' : ''
              }`}
            >
              <MinusSvg />
            </button>
            <div className="px-3 border-x border-black/30 py-1 w-8 flex items-center justify-center text-sm">
              {count}
            </div>
            <button
              disabled={count === 10}
              onClick={handleIncrement}
              className="cursor-pointer px-2"
            >
              <PlusSvg />
            </button>
          </div>

          {/* price */}
          <div>
            <h5 className="normal-case font-medium text-black">
              <span className="text-black/30 text-sm line-through">$20</span>$
              {totalPrice.toFixed(2)}
            </h5>
          </div>
        </div>

        {/* choice */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Black">Black</SelectItem>
            <SelectItem value="Red">Red</SelectItem>
            <SelectItem value="Yellow">Yellow</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default CartItem;
