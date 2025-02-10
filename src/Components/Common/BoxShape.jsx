/* eslint-disable react/prop-types */

function BoxShape({ children }) {
  return (
    <div className="h-full p-6 rounded-[12px] bg-white border border-[#EBECEF]">
      {children}
    </div>
  );
}

export default BoxShape;
