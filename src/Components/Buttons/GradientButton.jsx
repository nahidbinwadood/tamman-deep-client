// eslint-disable-next-line react/prop-types
const GradientButton = ({ title, prev, next,card }) => {
  const gradientStyle = {
    background:
      'var(--L---01, linear-gradient(270deg, #116DFF 0%, #23C0B6 100%))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  return (
    <button className={`relative  rounded-lg overflow-hidden flex items-center justify-center gap-3 ${card ? "px-12 py-3 w-fit" :"px-8 py-4 w-full"}`}>
      {/* Gradient border */}
      <span
        className="absolute inset-0 rounded-lg"
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
      {prev && prev}
      <span
        className="relative z-10 font-semibold text-lg"
        style={gradientStyle}
      >
        {title}
      </span>

      {next && next}
    </button>
  );
};

export default GradientButton;
