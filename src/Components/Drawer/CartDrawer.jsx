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
      <div>
        <div
          aria-hidden={!showCart}
          className={`fixed top-0 right-0 w-[450px] z-50 min-h-[100vh] shadow-lg bg-[#F5F5F7] transform transition-transform duration-500 font-inter ${
            showCart ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 h-[65px] flex justify-between items-center border-b">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold">Cart</h2>
              <div className="size-2 rounded-full bg-black"></div>

              {/* count */}
              <div className="font-medium">0</div>
            </div>

            {/* Cross Button */}
            <button
              className="size-8 bg-[#E9E9EB] rounded-full flex items-center justify-center"
              onClick={() => setShowCart(false)}
            >
              <CrossButtonSvg />
            </button>
          </div>

          {/* Drawer Content */}
          <div
            style={{ height: 'calc(100vh - 65px)' }}
            className="flex flex-col justify-between"
          >
            {/* Cart Items */}
            <div className="p-4 overflow-y-auto flex flex-col gap-3">
              <CartItem />
              <CartItem />
            </div>

            {/* Checkout Button */}
            <div className="bg-white px-5 py-8 space-y-4">
              <div className="w-full flex items-center justify-between font-semibold text-lg font-inter">
                <h4>Subtotal</h4>
                <p>$30.99</p>
              </div>

              {/* proceed to checkout button */}
              <div>
                <button className="w-full bg-primaryColor flex items-center gap-2 justify-center py-3 rounded-md font-medium text-white">
                  Checkout
                  <span className="size-2 rounded-full bg-white inline-block"></span>
                  <span>$30.99</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
