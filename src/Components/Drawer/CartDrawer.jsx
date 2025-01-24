/* eslint-disable react/prop-types */

import { useEffect } from 'react';

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
        className={`fixed top-0 right-0 w-80 z-50 min-h-[100vh] bg-primaryColor transform transition-transform duration-500 ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Your Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-white text-3xl"
          >
            &times;
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4">
          <p className="text-white">Cart items go here...</p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
