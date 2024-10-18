import {
  CardListSvg,
  CardListWhiteSvg,
} from '../../../Components/SvgContainer';
import GradientButton from '../../../Components/Buttons/GradientButton';
import TitleSection from './../../../Components/TitleSection';
import PrimaryButton from '../../../Components/Buttons/PrimaryButton';

const PlansSection = () => {
  const cardsInfo = [
    {
      type: 'Basic',
      price: 0,
      includes: [
        'Basic Online Profile',
        'SMS, Call, WhatsApp, Link & Email',
        'Linktree',
        'Unlimited Actions',
      ],
    },
    {
      type: 'Premium Plus',
      price: 12.99,
      includes: [
        'Team account management',
        'Bulk editing',
        'Shared Contacts ',
        'Team Comments & Notes',
        'Private Comments',
        'Five codes per account',
        'Everything from Pro',
      ],
    },
    {
      type: 'Premium',
      price: 12.99,
      includes: [
        'Scheduling & Booking',
        'Leads Form',
        'Product Catalogue',
        'Business Card Scanning',
        'Date Trigger',
        'Zapier Integrations',
        'Add Profile Actions (Photo Gallery, Accordion)',
        'Remove Quick Link branding',
        'Up to three codes per account',
        'Everything from Free',
      ],
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)] py-20">
      <TitleSection
        title={'Packages'}
        header={'Perfect Plans for'}
        highlightedHeader={'Your Success'}
        description={
          'Find the ideal Quick Link plan that fits your needs and empowers your business growth.'
        }
      />
      <div className="pt-16 grid grid-cols-3 gap-8 container mx-auto ">
        {cardsInfo?.map((card) => (
          <div
            key={card?.price}
            className={`px-6 py-8 shadow-lg rounded-xl ${
              card.type == 'Premium Plus'
                ? 'bg-[#111518] text-white'
                : 'bg-white'
            }`}
          >
            <div>
              <h4
                className={`text-lg font-bold ${
                  card.type == 'Premium Plus' ? 'text-white' : 'text-textColor'
                }`}
              >
                {card?.type}
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-5xl font-bold">£{card?.price}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">GBP</h4>
                <h5
                  className={`${
                    card.type == 'Premium Plus'
                      ? 'text-white'
                      : 'text-textColor'
                  }`}
                >
                  /Billed monthly
                </h5>
              </div>
            </div>
            <div className="pt-10 w-full">
              {card.type == 'Premium Plus' ? (
                <PrimaryButton fullWidth={true} title={'Buy this plan'} />
              ) : (
                <GradientButton title={'Buy this plan'} />
              )}
            </div>
            {/* hr */}
            <div className="my-10 w-full border-t-[1px] border-[#BEC0C0]"></div>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold">What&apos;s included?</h3>
              </div>
              {card?.includes?.map((include) => (
                <div key={include} className="flex items-center gap-3">
                  {card.type == 'Premium Plus' ? (
                    <CardListWhiteSvg />
                  ) : (
                    <CardListSvg />
                  )}
                  <p className="text-lg font-medium">{include}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
