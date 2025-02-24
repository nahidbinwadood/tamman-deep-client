/* eslint-disable react/prop-types */

function StatisticsBox({ Icon, title, quantity }) {
  return (
    <div className="w-full  bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] p-6 rounded-xl border">
      <div className="p-3 w-fit r ">
        <Icon className={'size-7 md:size-8 lg:size-10 text-teal-300'}></Icon>
      </div>
      <h3 className="text-white  font-medium md:text-lg pt-3 md:pt-5">{title}</h3>
      <h2 className="text-white font-bold text-3xl md:text-4xl pt-2 md:pt-4">{quantity}</h2>
    </div>
  );
}

export default StatisticsBox;
