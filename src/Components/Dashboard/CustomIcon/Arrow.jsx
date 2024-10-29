import PropTypes from "prop-types";
function Arrow({ className }) {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
        stroke="#434D54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
};

export default Arrow;
