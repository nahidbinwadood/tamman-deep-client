/* eslint-disable react/prop-types */

const CheckoutCard = ({ item }) => {
  console.log(item);
  return (
    <div className="flex items-center gap-4 justify-between bg-white rounded-md p-4 border border-black/20">
      {/* image */}
      <div className="flex-shrink-0">
        <div className="h-20 md:h-32 md:w-52">
          <img
            className="w-full h-full object-cover"
            src={`${import.meta.env.VITE_API_URL}/${item?.image}`}
            alt=""
          />
        </div>
      </div>
      {/* info */}
      <div className="space-y-5 w-full flex">
        {/* card description */}
        <div className="flex justify-between w-full">
          <div className="space-y-2">
            <div className="space-y-1">
              <h5>
                <span className="capitalize "> {item?.name}</span>
                <span className="font-semibold"> x {item?.quantity}</span>
              </h5>
              <div className="text-black/40">
                <p>
                  Color: <span className="capitalize">{item?.color_name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* count */}
        <div className="flex items-center justify-between">
          <div>
            <h5 className="normal-case font-medium text-black">
              {/* <span className="text-black/30 text-sm line-through">$20</span>$ */}
              ${parseFloat(item?.product_price).toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
