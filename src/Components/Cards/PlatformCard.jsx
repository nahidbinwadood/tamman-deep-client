/* eslint-disable react/prop-types */
const PlatformCard = ({ info }) => {
  return (
    <div className="p-6 rounded-lg hover:shadow-lg transition-all duration-300 border border-black/10">
      <div className="flex items-center justify-center">
        <div className="bg-white p-3 size-16 flex items-center justify-center rounded-full ">
          <img src={info?.image} alt="" />
        </div>
      </div>
      <div className="text-center pt-2 md:pt-5">
        <h3 className="text-xl font-bold">{info?.title}</h3>
        <p className="text-textColor pt-3 md:pt-6">{info?.description}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
