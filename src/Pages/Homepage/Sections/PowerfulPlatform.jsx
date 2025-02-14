import TitleSection from './../../../Components/TitleSection';
import PlatformCard from './../../../Components/Cards/PlatformCard';
import { useFeatureContents } from '@/Hooks/cms.hook';

const PowerfulPlatform = () => {
  const allFeatures = useFeatureContents();

  return (
    <div className="py-10 md:py-16 2xl:py-20 bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]">
      <div className="container mx-auto px-5 md:px-8 2xl:px-0">
        <TitleSection
          title={'Features'}
          header={'The blocks of a '}
          highlightedHeader={'powerful platform'}
          description={
            'Connect with your network using V1CE business cards, phone cases, and QR codes. Experience the ecofriendly revolution in networking.'
          }
        />

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 lg:gap-12">
          {allFeatures?.map((info) => (
            <PlatformCard key={info?.id} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerfulPlatform;
