import TitleSection from './../../../Components/TitleSection';
import PricingCard from './../../../Components/Cards/PricingCard';

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
    <div className="hidden bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)] py-20">
      <TitleSection
        title={'Packages'}
        header={'Perfect Plans for'}
        highlightedHeader={'Your Success'}
        description={
          'Find the ideal Quick Link plan that fits your needs and empowers your business growth.'
        }
      />
      <div className="pt-16 grid grid-cols-3 gap-8 container mx-auto ">
        {cardsInfo?.map((card,idx) => (
          <PricingCard key={idx} card={card} />
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
