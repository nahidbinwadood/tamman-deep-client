/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import { CrossButtonSvg } from '../SvgContainer/SvgContainer';
import CartItem from '../Cart/CartItem';

const CartDrawer = ({ showCart, setShowCart }) => {
  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart]);

  return (
    <>
      {/* Overlay */}
      {showCart && (
        <div
          onClick={() => setShowCart(false)}
          className="fixed inset-0 z-40 bg-black/10 bg-opacity-50 backdrop-blur-md transform transition-all duration-500"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-96 z-50 min-h-[100vh] shadow-lg bg-[#F5F5F7] transform transition-transform duration-500 font-inter ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 flex justify-between items-center border-b ">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Cart </h2>
            <div className="size-2 rounded-full bg-black"></div>

            {/* count */}
            <div className="font-medium">0</div>
          </div>

          {/* cross btn */}
          <button
            className="size-8 bg-[#E9E9EB] rounded-full flex items-center justify-center"
            onClick={() => setShowCart(false)}
          >
            <CrossButtonSvg />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          {/* cart  item */}
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
