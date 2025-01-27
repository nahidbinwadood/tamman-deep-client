import CheckoutCard from '@/Components/Cards/CheckoutCard';
import useAuth from '@/Hooks/useAuth';

const Checkout = () => {
  const { cartItems } = useAuth();
  const totalPrice = cartItems?.reduce((acc, item) => {
    return acc + parseFloat(item?.totalPrice);
  }, 0);
  return (
    <div className="min-h-screen mt-[95px] py-20 font-inter container mx-auto flex gap-12">
      {/* info */}
      <div className="w-1/2">
        <h2 className="text-2xl font-medium">Delivery</h2>

        <form action="" className="mt-6 w-full space-y-4">
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email Address"
              className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
              type="email"
              name="address"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="address">Address</label>
            <input
              placeholder="Address"
              className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
              type="text"
              name="address"
              id="address"
            />
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="city">City</label>
              <input
                placeholder="City"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                placeholder="Postal Code"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="number"
                name="postalCode"
                id="postalCode"
              />
            </div>
          </div>

          {/* card info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium py-4">Payment</h2>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="nameOnCard">Name On Card</label>
              <input
                placeholder="Name On Card"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="text"
                name="nameOnCard"
                id="nameOnCard"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                placeholder="Card Number"
                className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                type="number"
                name="cardNumber"
                id="cardNumber"
              />
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="expDate">Expiration Date</label>
                <input
                  placeholder="Expiration Date"
                  className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                  type="number"
                  name="expDate"
                  id="expDate"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="securityCode">Security Code</label>
                <input
                  placeholder="Security Code"
                  className="py-3 px-4 border border-black/20 w-full focus:outline-none rounded-md"
                  type="number"
                  name="securityCode"
                  id="securityCode"
                />
              </div>
            </div>
          </div>

          {/* pay now */}
          <div className="pt-2">
            <button className="w-full text-center bg-primaryColor text-white py-3 rounded-md">
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
              <CheckoutCard key={item?.id} item={item} />
            ))}
          </div>

          {/* total price */}
          <div className="mt-6 px-4 space-y-4">
            <h4 className="text-lg font-semibold">
              Subtotal {cartItems.length} items
            </h4>
            <div className="w-full flex items-center justify-between text-xl font-semibold ">
              <h4>Total</h4>
              <p>$ {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
