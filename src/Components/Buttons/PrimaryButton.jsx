
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({title}) => {
    return (
        <button className="bg-primaryColor px-12 font-semibold text-lg py-4 rounded-lg text-white hover:text-white hover:bg-transparent border border-primaryColor transition duration-300">
            {title}
        </button>
    );
};

export default PrimaryButton;