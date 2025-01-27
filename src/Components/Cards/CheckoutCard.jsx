/* eslint-disable react/prop-types */

const CheckoutCard = ({ item }) => {
  return (
    <div className="flex items-center gap-4 justify-between bg-white rounded-md p-4 border border-black/20">
      {/* image */}
      <div className="flex-shrink-0">
        <div className="h-32 w-full">
          <img
            className="w-full h-full object-cover"
            src={item?.image}
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
                One Tap Card <span className="font-semibold">x {item?.quantity}</span>
              </h5>
              <div className="text-black/40">
                <p>Style: Minimal</p>
                <p>Color: Black</p>
              </div>
            </div>
          </div>
        </div>

        {/* count */}
        <div className="flex items-center justify-between">
          <div>
            <h5 className="normal-case font-medium text-black">
              {/* <span className="text-black/30 text-sm line-through">$20</span>$ */}
              ${parseFloat(item.totalPrice).toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
