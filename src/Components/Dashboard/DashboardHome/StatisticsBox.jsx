
import PropTypes from "prop-types";

function StatisticsBox({Icon, title, quantity}) {
  return (
    <div className="w-full p-6 bg-white rounded-xl border">
      <div className="p-3 w-fit rounded-xl shadow-sm  bg-[#F7F7FE]">
        <Icon className={'size-10 text-teal-300'}></Icon>
      </div>
      <h3 className="text-textLight font-medium text-lg pt-5">{title}</h3>
      <h2 className="text-textDark font-bold text-4xl pt-4">{quantity}</h2>
    </div>
  );
}

StatisticsBox.propTypes = {
    Icon: PropTypes.node,
    title: PropTypes.string,
    quantity: PropTypes.number
}

export default StatisticsBox;
