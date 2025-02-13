import Marquee from 'react-fast-marquee';
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
    <div className="mx-5 md:mx-8 bg-bgSecondary rounded-[20px] py-8 md:py-12 lg:py-16  px-8 md:px-12 lg:px-20 xl:px-24 2xl:px-[380px] my-10">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between text-white">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:w-[70%]">
            Our clients are at the heart of
            <span
              className="leading-[1.32] tracking-tight bg-clip-text text-transparent ml-1"
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
        <div className="w-full md:w-1/2">
          <ReviewSlider />
        </div>
      </div>
      <div className="mt-10 md:mt-12 lg:mt-16  ">
        {/* {sponsors?.map((sponsor, idx) => (
          <div key={idx}>{sponsor?.logo}</div>
        ))} */}

        <Marquee autoFill={true}>
          {sponsors?.map((sponsor, idx) => (
            <div className="mr-12 md:mr-16 lg:mr-20" key={idx}>
              {sponsor?.logo}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ReviewSection;
