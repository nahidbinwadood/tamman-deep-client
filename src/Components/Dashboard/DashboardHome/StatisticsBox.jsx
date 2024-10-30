
import PropTypes from "prop-types";

function StatisticsBox({Icon, title, quantity}) {
  return (
    <div  className="w-full  bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] p-6 rounded-xl border">
      <div className="p-3 w-fit r ">
        <Icon className={'size-10 text-teal-300'}></Icon>
      </div>
      <h3 className="text-white  font-medium text-lg pt-5">{title}</h3>
      <h2 className="text-white font-bold text-4xl pt-4">{quantity}</h2>
    </div>
  );
}

StatisticsBox.propTypes = {
    Icon: PropTypes.node,
    title: PropTypes.string,
    quantity: PropTypes.number
}

export default StatisticsBox;
