// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title, fullWidth, dashboardBtn }) => {
  return (
    <button
      className={`bg-primaryColor px-8 md:px-10 lg:px-12 font-semibold text-lg py-2.5 md:py-3 lg:py-4 rounded-lg text-white ${
        dashboardBtn ? 'hover:text-primaryColor' : 'hover:text-white'
      }  hover:bg-transparent border border-primaryColor transition duration-300 ${
        fullWidth ? 'w-full' : 'w-fit'
      }`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
