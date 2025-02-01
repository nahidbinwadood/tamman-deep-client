import CheckoutCard from '@/Components/Cards/CheckoutCard';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';

const Checkout = () => {
  const { cartItems } = useAuth();
  const [loading, setLoading] = useState(false);
  const totalPrice = cartItems?.reduce((acc, item) => {
    return acc + parseFloat(item?.totalPrice);
  }, 0);

  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const items = cartItems.map((item) => ({
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
    <div className="min-h-screen font-inter container mx-auto flex items-center justify-center gap-12">
      {/* info */}
      <div className="w-1/2 hidden">
        <h2 className="text-2xl font-medium">Delivery</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="mt-6 w-full space-y-3"
        >
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                {...register('firstName', {
                  required: {
                    value: true,
                    message: 'First name is required',
                  },
                })}
                placeholder="First Name"
                className={`py-3 px-4 border  w-full focus:outline-none rounded-md ${
                  errors.firstName?.message
                    ? 'border-red-500 '
                    : 'border-black/20'
                }`}
                type="text"
                name="firstName"
                id="firstName"
              />
              <p className="text-red-500">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Last name is required',
                  },
                })}
                placeholder="Last Name"
                className={`py-3 px-4 border w-full focus:outline-none rounded-md ${
                  errors?.lastName?.message
                    ? 'border-red-500 '
                    : 'border-black/20'
                }`}
                type="text"
                name="lastName"
                id="lastName"
              />
              <p className="text-red-500">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              })}
              placeholder="Email Address"
              className={`py-3 px-4 border w-full focus:outline-none rounded-md
                ${
                  errors?.email?.message ? 'border-red-500 ' : 'border-black/20'
                }`}
              type="email"
              name="email"
              id="email"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="address">Address</label>
            <input
              {...register('address', {
                required: {
                  value: true,
                  message: 'Address is required',
                },
              })}
              placeholder="Address"
              className={`py-3 px-4 border   w-full focus:outline-none rounded-md ${
                errors?.address?.message ? 'border-red-500 ' : 'border-black/20'
              }`}
              type="text"
              name="address"
              id="address"
            />
            <p className="text-red-500">{errors.address?.message}</p>
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="city">City</label>
              <input
                {...register('city', {
                  required: {
                    value: true,
                    message: 'City is required',
                  },
                })}
                placeholder="City"
                className={`py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md ${
                  errors?.city?.message ? 'border-red-500 ' : 'border-black/20'
                }`}
                type="text"
                name="city"
                id="city"
              />
              <p className="text-red-500">{errors.city?.message}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                {...register('postalCode', {
                  required: {
                    value: true,
                    message: 'Postal code is required',
                  },
                })}
                placeholder="Postal Code"
                className={`py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md ${
                  errors?.postalCode?.message
                    ? 'border-red-500 '
                    : 'border-black/20'
                }`}
                type="number"
                name="postalCode"
                id="postalCode"
              />{' '}
              <p className="text-red-500">{errors.postalCode?.message}</p>
            </div>
          </div>

          {/* pay now */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full text-center bg-primaryColor text-white py-3 rounded-md"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
      {/* cart */}
      <div className="w-1/2">
        {/* title */}
        <div>
          <h4 className="text-2xl font-semibold">My Cart</h4>
          {/* items */}
          <div className="mt-4 space-y-4">
            {cartItems?.map((item) => (
              <CheckoutCard key={item?.color_id} item={item} />
            ))}
          </div>

          {/* total price */}
          <div className="mt-6 px-4 space-y-4">
            <h4 className="text-lg font-semibold">
              Subtotal {cartItems.length} items
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
