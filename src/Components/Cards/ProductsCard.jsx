/* eslint-disable react/prop-types */
import GradientButton from '../Buttons/GradientButton';

const ProductsCard = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div>
      <div className="bg-[#fbfbfb] border border-black/50 rounded-md py-6">
        <div>
          <div className="h-72 w-full">
            <img className="h-full w-full object-cover" src={image} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <GradientButton title={'Add to cart'} card={true} />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="w-full flex items-center justify-between">
          <h5 className="text-lg font-bold">{title}</h5>
          <p className="text-textColor font-medium">From $ {price}</p>
        </div>
        <div className="pt-4">
          <div className="flex items-center gap-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#3A3A3A" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#002147" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="10" fill="#A0522D" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
