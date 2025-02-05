import CheckoutCard from '@/Components/Cards/CheckoutCard';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { CgSpinnerTwo } from 'react-icons/cg';

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const fetchCartItems = async () => {
    const response = await axiosPublic('/api/cart');
    return response?.data?.data;
  };

  const { data: allCartItems = [] } = useQuery({
    queryKey: ['allCartItems'],
    queryFn: fetchCartItems,
  });
  const totalPrice = allCartItems?.reduce((acc, item) => {
    return acc + parseFloat(item?.product_price) * item?.quantity;
  }, 0);

  const axiosPublic = useAxiosPublic();

  const items = allCartItems.map((item) => ({
    product_id: item.id,
    color_id: item?.color_id,
    quantity: item.quantity,
  }));

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { data } = await axiosPublic.post('/api/checkout', { items });
      console.log(data);
      if (data.status == 'success') {
        setLoading(false);
        window.location.href = data.url;
      }
    } catch (error) {
      setLoading(false);
      console.error('Payment initiation failed:', error);
    }
  };
  return (
    <div className="min-h-screen py-20 font-inter container mx-auto flex items-center justify-center gap-12">
      {/* cart */}
      <div className="overflow-y-auto">
        {/* title */}
        <div>
          <h4 className="text-2xl font-semibold">My Cart</h4>
          {/* items */}
          <div className="mt-4 space-y-4">
            {allCartItems?.map((item) => (
              <CheckoutCard key={item?.color_id} item={item} />
            ))}
          </div>

          {/* total price */}
          <div className="mt-6 px-4 space-y-4">
            <h4 className="text-lg font-semibold">
              Subtotal {allCartItems.length} items
            </h4>
            <div className="w-full flex items-center justify-between text-xl font-semibold ">
              <h4>Total</h4>
              <p>$ {parseFloat(totalPrice).toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              disabled={loading}
              onClick={handlePayment}
              type="submit"
              className={`w-full flex items-center justify-center text-center bg-primaryColor text-white py-3 rounded-md`}
            >
              {loading ? (
                <CgSpinnerTwo className="size-6 animate-spin" />
              ) : (
                'Pay Now'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
