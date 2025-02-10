/* eslint-disable react/prop-types */

const InfoSection = ({ allInfo }) => {
  return (
    <div className="bg-[#F5F6F7]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
        {allInfo?.map((info, idx) => (
          <div
            key={idx}
            className={`flex flex-1 gap-4 ${
              info?.border ? 'xl:border-r' : ''
            } border-[#57626966] pl-5`}
          >
            <div className="flex gap-3 mt-1 w-5 flex-shrink-0">
              {info?.img?.map((icon, idx) => (
                <span key={idx}>{icon?.logo}</span>
              ))}
            </div>
            <div className="space-y-1">
              <h4 className="sm:text-lg font-bold">{info?.title}</h4>
              <p className="text-textColor w-[60%] text-sm sm:text-base">{info?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
