import TitleSection from './../../../Components/TitleSection';
import HowItWorksCard from './../../../Components/Cards/HowItWorksCard';

const HowItWorks = () => {
  const cardsInfo = [
    {
      image: 'https://i.postimg.cc/j51PRJTR/card-1.png',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'Forget about Google doc or typing down phone number manually. All it takes is a tap or scan.',
    },
    {
      image: 'https://i.postimg.cc/fy0XyTWm/card-2.png',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'Others don’t need a QL device or the APP to receive your info. Your profile opens in browser.',
    },
    {
      image: 'https://i.postimg.cc/NMFRhkWN/card-3.png',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'With one tap on a smart phone, your connection has access to all the information you want to share.',
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <TitleSection header={'How it '} highlightedHeader={'works'} />
      <div className="pt-16 grid grid-cols-3 gap-6">
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
