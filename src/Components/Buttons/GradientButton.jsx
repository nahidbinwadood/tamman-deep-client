/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const GradientButton = ({
  title,
  prev,
  prevLight,
  next,
  nextLight,
  card,
  loading,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative rounded-lg group overflow-hidden flex items-center justify-center gap-3 ${
        card
          ? 'px-12 py-3 w-fit hover:bg-primaryColor duration-300 transition-all'
          : 'px-8 py-3 md:py-3.5 lg:py-4 w-full hover:bg-primaryColor duration-300 transition-all'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient border */}
      <span
        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background:
            'var(--L---01, linear-gradient(270deg, #116DFF 0%, #23C0B6 100%))',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '2px', // Thin border
        }}
      />
      {/* Button text */}

      {isHovered ? prevLight : prev}

      {/* show Text */}
      {loading ? (
        <ImSpinner9
          className={`animate-spin group-hover:text-white text-primaryColor size-7`}
        />
      ) : !isHovered ? (
        <span
          className={`relative z-10 font-semibold md:text-lg transition-all duration-300 ${
            isHovered ? 'text-white' : 'bg-clip-text text-transparent'
          }`}
          style={{
            backgroundImage: !isHovered
              ? 'linear-gradient(270deg, #116DFF 0%, #23C0B6 100%)'
              : '',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </span>
      ) : (
        <span
          className={`relative z-10 text-white font-semibold text-lg transition-all duration-300`}
        >
          {title}
        </span>
      )}
      {isHovered ? nextLight : next}
    </button>
  );
};

export default GradientButton;
