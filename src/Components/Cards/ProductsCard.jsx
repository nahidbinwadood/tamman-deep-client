/* eslint-disable react/prop-types */

const ProductsCard = ({ product }) => {
  const { image, price } = product;

  const handleCart = (product) => {
    console.log(product);
  };
  return (
    <div>
      <div className="bg-[#fbfbfb] border border-black/50 rounded-lg ">
        <div className="h-[400px]">
          <img
            className="h-full w-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>

        {/* description */}
        <div className="px-7 py-8">
          <div className="space-y-2">
            <h4 className="font-semibold text-2xl">
              Bamboo NFC Business Cards
            </h4>
            <p>The last business card you&lsquo;ll ever need.</p>
          </div>

          <div className="w-full flex items-center justify-between mt-5 ">
            {/* price */}
            <p className="text-black/80 font-medium ">${price}</p>
            <button
              onClick={() => handleCart(product)}
              className="px-6 py-3 bg-primaryColor rounded-md text-white hover:bg-transparent hover:text-primaryColor transition-all border border-primaryColor font-medium duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
