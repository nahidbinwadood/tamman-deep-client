/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { CrossButtonSvg } from '../SvgContainer/SvgContainer';
import CartItem from '../Cart/CartItem';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/Hooks/useAuth';
import toast from 'react-hot-toast';
import { useAllCartItems, useCartQuantity } from '@/Hooks/Cart.hooks';
import { ImSpinner9 } from 'react-icons/im';
// import { ImSpinner9 } from 'react-icons/im';

const CartDrawer = ({ showCart, setShowCart }) => {
  const { user, guestUserCart } = useAuth();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { allCartItems, isFetching } = useAllCartItems();
  const { isLoading } = useCartQuantity();

  const totalPrice = allCartItems?.reduce((acc, item) => {
    return acc + parseFloat(item?.product_price) * item?.quantity;
  }, 0);

  const totalPriceGuest = guestUserCart?.reduce((acc, item) => {
    return acc + parseFloat(item?.product_price) * item?.quantity;
  }, 0);

  // console.log(guestUserCart);

  // console.log(totalPrice);
  // At the top of your component, add a useEffect for handling body overflow
  useEffect(() => {
    if (showCart) {
      // Prevent scrolling on the main body
      document.body.style.overflow = 'hidden';
      // Store original padding to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore scrolling when cart is closed
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup function to ensure we restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [showCart]);

  // handlers:

  const handleCheckout = () => {
    if (user) {
      setLoading(true);
      navigate('/checkout');
      setShowCart(false);
    } else {
      toast.error('Please Login First');
      navigate('/login');
      setShowCart(false);
    }
  };

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
          className={`fixed top-0 right-0 w-full  md:w-[450px] z-50 min-h-[100vh] shadow-lg bg-[#F5F5F7] transform transition-transform duration-500 font-inter ${
            showCart ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 h-[65px] flex justify-between items-center border-b">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold">Cart</h2>
              <div className="size-2 rounded-full bg-black"></div>

              {/* count */}
              <div className="font-medium">
                {user
                  ? allCartItems?.length
                  : guestUserCart && guestUserCart?.length}
              </div>
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

          {isFetching || isLoading ? (
            <div
              style={{ height: 'calc(100vh - 65px)' }}
              className="h-[calc(100vh - 65px)] flex items-center justify-center"
            >
              <ImSpinner9 className="animate-spin size-8" />
            </div>
          ) : (
            <div style={{ height: 'calc(100vh - 65px)' }}>
              {allCartItems?.length > 0 ||
              (guestUserCart && guestUserCart.length > 0) ? (
                <div
                  style={{ height: 'calc(100vh - 65px)' }}
                  className="flex flex-col justify-between"
                >
                  {/* Cart Items */}
                  <div className="p-4 overflow-y-auto flex flex-col gap-3">
                    {allCartItems.length > 0
                      ? allCartItems.map((item) => (
                          <CartItem key={item?.color_id} item={item} />
                        ))
                      : guestUserCart.map((item) => (
                          <CartItem
                            key={item?.color_id}
                            item={item}
                            guest={true}
                          />
                        ))}
                  </div>

                  {/* Checkout Button */}
                  <div className="bg-white px-5 py-8 space-y-4">
                    <div className="w-full flex items-center justify-between font-semibold text-lg font-inter">
                      <h4>Subtotal</h4>
                      <p>
                        $
                        {user
                          ? totalPrice.toFixed(2)
                          : totalPriceGuest.toFixed(2)}
                      </p>
                    </div>

                    {/* proceed to checkout button */}
                    <button
                      disabled={loading}
                      onClick={handleCheckout}
                      to="/checkout"
                      className={`w-full bg-primaryColor flex items-center gap-2 justify-center py-3 rounded-md font-medium text-white cursor-pointer  `}
                    >
                      Checkout
                      <span className="size-2 rounded-full bg-white inline-block"></span>
                      <span>
                        $
                        {user
                          ? totalPrice.toFixed(2)
                          : totalPriceGuest.toFixed(2)}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center flex-col gap-4 h-full items-center text-lg font-medium">
                  <h2 className="text-xl md:text-2xl">Your cart is empty.</h2>
                  <div>
                    <h4 className="text-base md:text-lg">
                      Buy Your Digital Card
                      <Link
                        onClick={() => setShowCart(false)}
                        to="/shop"
                        className="text-primaryColor px-2 py-2 underline"
                      >
                        From here
                      </Link>
                    </h4>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
