/* eslint-disable react/prop-types */

const InfoSection = ({ allInfo }) => {
  return (
    <div className="bg-[#F5F6F7]">
      <div className="container mx-auto flex items-center justify-evenly py-10">
        {allInfo?.map((info, idx) => (
          <div
            key={idx}
            className={`flex flex-1 gap-4 ${
              info?.border ? 'border-r' : ''
            } border-[#57626966] pl-5`}
          >
            <div className="flex gap-3">
              {info?.img?.map((icon, idx) => (
                <span key={idx}>{icon?.logo}</span>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-bold">{info?.title}</h4>
              <p className="text-textColor w-[60%]">{info?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
