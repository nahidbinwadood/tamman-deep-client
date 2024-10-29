
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({title,fullWidth}) => {
    return (
        <button className={`bg-primaryColor px-12 font-semibold text-lg py-4 rounded-lg text-white hover:text-zinc-800  hover:bg-transparent border border-primaryColor transition duration-300 ${fullWidth ? "w-full" :"w-fit"}`}>
            {title}
        </button>
    );
};

export default PrimaryButton;