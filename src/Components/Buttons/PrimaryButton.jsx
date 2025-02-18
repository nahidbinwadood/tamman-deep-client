import { ImSpinner9 } from 'react-icons/im';

// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title, fullWidth, dashboardBtn, plan, loading }) => {
  return (
    <button
      className={`bg-primaryColor flex items-center justify-center px-8 md:px-10 lg:px-12 font-semibold md:text-lg py-2.5 md:py-3 lg:py-4 rounded-lg text-white ${
        dashboardBtn ? 'hover:text-primaryColor' : 'hover:text-white'
      }  ${
        plan ? '' : 'hover:bg-transparent'
      } border border-primaryColor transition duration-300 ${
        fullWidth ? 'w-full' : 'w-fit'
      }`}
    >
      {loading ? <ImSpinner9 className="animate-spin size-7" /> : title}
    </button>
  );
};

export default PrimaryButton;
