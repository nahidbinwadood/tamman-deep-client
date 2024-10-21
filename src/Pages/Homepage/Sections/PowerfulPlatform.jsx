import TitleSection from './../../../Components/TitleSection';
import PlatformCard from './../../../Components/Cards/PlatformCard';
import {
  BusinessCardSvg,
  HandShakeSvg,
  ListProfileSvg,
  NfcSvg,
  PenSvg,
} from './../../../Components/SvgContainer';
const PowerfulPlatform = () => {
  const platformCardsInfo = [
    {
      title: 'Business Card Scanner',
      svg: <BusinessCardSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      title: 'Action-Packed NFC and QR Codes',
      svg: <NfcSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      title: 'Business Card Scanner',
      svg: <HandShakeSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      title: 'Customizable Lead Generation Form',
      svg: <PenSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      title: 'Versatile Profile as a Social Link Tree',
      svg: <BusinessCardSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      title: 'Bulk Edit for Efficient Profile Updates',
      svg: <ListProfileSvg />,
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
  ];
  return (
    <div className="py-20 bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]">
      <div className="container mx-auto">
        <TitleSection
          title={'Features'}
          header={'The blocks of a '}
          highlightedHeader={'powerful platform'}
          description={
            'Connect with your network using V1CE business cards, phone cases, and QR codes. Experience the ecofriendly revolution in networking.'
          }
        />

        <div className="pt-10 grid grid-cols-3 gap-12">
          {platformCardsInfo?.map((info, idx) => (
            <PlatformCard
              key={idx}
              title={info?.title}
              svg={info?.svg}
              description={info?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PowerfulPlatform;
