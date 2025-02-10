/* eslint-disable react/prop-types */
const TitleSection = ({ title, header, highlightedHeader, description }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h3 className="font-bold text-textColor ">{title && title}</h3>
      <h2 className="text-2xl md:text-3xl font-bold pt-3 md:pt-4 text-center">
        {header && header}
        <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#116DFF] to-[#23C0B6] font-inter font-bold leading-[132%] tracking-[-0.48px]">
          {highlightedHeader && highlightedHeader}
        </span>
      </h2>
      <p className="pt-5 text-lg lg:w-2/3 mx-auto text-center text-textColor">
        {description && description}
      </p>
    </div>
  );
};

export default TitleSection;
