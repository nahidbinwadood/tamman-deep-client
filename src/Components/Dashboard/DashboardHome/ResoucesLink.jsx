
import Arrow from "../CustomIcon/Arrow";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



function ResoucesLink({ title, Icon }) {
  return (
    <Link to={'/'} className="">
      <div className="flex items-center mt-6 justify-between">
        <div className="p-4 rounded-full bg-[#F4F9FF] ">
          <Icon></Icon>
        </div>
        <Arrow></Arrow>
      </div>
      <h4 className="text-lg font-medium text-textDark pt-4 pb-6 border-b border-dashed">
        {title}
      </h4>
    </Link>
  );
}

ResoucesLink.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.node
};
export default ResoucesLink;