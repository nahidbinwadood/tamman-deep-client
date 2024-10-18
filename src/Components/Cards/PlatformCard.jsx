/* eslint-disable react/prop-types */
const PlatformCard = ({ title, svg, description }) => {
  return (
    <div className="shadow-md p-6 rounded-lg">
      <div className="flex items-center justify-center">
        <div className="bg-white p-3 rounded-full ">{svg}</div>
      </div>
      <div className="text-center pt-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-textColor pt-6">{description}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
