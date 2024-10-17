/* eslint-disable react/prop-types */
const HowItWorksCard = ({ image, highlightedTitle, title, description }) => {
  return (
    <div className="shadow-md rounded-lg">
      <div className="h-[300px] w-full">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="pt-6 p-6">
        <div>
          <h4 className="text-xl font-bold">
            <span className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] text-transparent bg-clip-text">
              {highlightedTitle}:
            </span>
            {title}
          </h4>
          <p className="pt-4 text-textColor">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
