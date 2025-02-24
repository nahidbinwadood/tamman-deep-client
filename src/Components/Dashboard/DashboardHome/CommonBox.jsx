import PropTypes from 'prop-types';

function CommonBox({ children, title }) {
  return (
    <div className=" bg-white p-6 flex flex-col  w-full h-full rounded-xl border">
      <h3 className="text-xl text-center md:text-start md:text-2xl font-semibold text-textDark ">
        {title}
      </h3>
      {children}
    </div>
  );
}

CommonBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default CommonBox;
