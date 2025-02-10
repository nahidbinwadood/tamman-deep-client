import ReviewSlider from './../../../Components/ReviewSlider';
import {
  Sponsor1Svg,
  Sponsor2Svg,
  Sponsor3Svg,
  Sponsor4Svg,
  Sponsor5Svg,
} from './../../../Components/SvgContainer';
const ReviewSection = () => {
  const sponsors = [
    { logo: <Sponsor1Svg /> },
    { logo: <Sponsor2Svg /> },
    { logo: <Sponsor3Svg /> },
    { logo: <Sponsor4Svg /> },
    { logo: <Sponsor5Svg /> },
  ];
  return (
    <div className="hidden mx-8 bg-bgSecondary rounded-[20px] py-16 px-[380px]">
      <div className="flex items-center justify-between text-white">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold w-[70%]">
            Our clients are at the heart of{' '}
            <span
              className="leading-[1.32] tracking-tight bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(270deg, #116DFF 0%, #23C0B6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              everything we do
            </span>
          </h2>
        </div>
        <div className="w-1/2">
          <ReviewSlider />
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between">
        {sponsors?.map((sponsor, idx) => (
          <div key={idx}>{sponsor?.logo}</div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
