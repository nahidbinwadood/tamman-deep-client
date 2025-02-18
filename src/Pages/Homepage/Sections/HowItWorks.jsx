import TitleSection from './../../../Components/TitleSection';
import HowItWorksCard from './../../../Components/Cards/HowItWorksCard';

const HowItWorks = () => {
  const cardsInfo = [
    {
      image: 'https://i.postimg.cc/j51PRJTR/card-1.png',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'Ditch the hassle of manually entering phone numbers or using Google Docs. Simply tap or scan to share your details instantly.',
    },
    {
      image: 'https://i.postimg.cc/fy0XyTWm/card-2.png',
      highlightedTitle: 'Step 2',
      title: 'Instant Access',
      description:
        'No special apps or devices are required! Your profile opens directly in the browser, making it easy for anyone to connect with you.',
    },
    {
      image: 'https://i.postimg.cc/NMFRhkWN/card-3.png',
      highlightedTitle: 'Step 3',
      title: 'Share Seamlessly',
      description:
        'With one tap on a smart phone, your connection has access to all the information you want to share.',
    },
  ];
  return (
    <div className="container mx-auto pt-5 pb-10 sm:py-7 lg:py-12 2xl:py-20 px-5 md:px-8 2xl:px-0">
      <TitleSection header={'How it '} highlightedHeader={'works'} />
      <div className="pt-0 md:pt-6 2xl:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsInfo?.map((card) => (
          <HowItWorksCard
            key={card?.image}
            image={card?.image}
            highlightedTitle={card?.highlightedTitle}
            title={card?.title}
            description={card?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
