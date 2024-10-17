import TitleSection from './../../../Components/TitleSection';
import HowItWorksCard from './../../../Components/Cards/HowItWorksCard';

const HowItWorks = () => {
  const cardsInfo = [
    {
      image:
        'https://s3-alpha-sig.figma.com/img/7dbd/56d5/590ee7f9bb8f9343d6dae7ed945303db?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJG68XGzW3YB7goD5Ca1IpZ5SMepuq53Vso2gGfa7cB88DcoAbmUk160UAyBhJiUoDo9fp1AglFs3BXAxch8SVBWdjGbedKduGd5JLxVnHfmwR2KR5b9S1MePKLzjPNN1qA63P3XHUqjBlrbst-XC8hd73UAWOQY76XNkzJp6B9HsNvT9QTFu3-J~DsWbnkHd5-2afgxvEpZuwQB~rsS1SyaV33UtZpa4sfXQBQSKmQOzPDCHRxqXOKbRXVGMNzcyV52Ttrh0ytIn45C9OKv0yhtPzMR9Cf3vhhBLPyCtgX4tV9~P8OaJWniA9YeKt4MYRboa5zny33C1WWxNX80UA__',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'Forget about Google doc or typing down phone number manually. All it takes is a tap or scan.',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/87b7/e868/70b68ddd05aaa9630ff8051385337872?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V29Z9jgearn4lz-06KCZ67eajD5B~L7KZiVoV~pAFG3FWJN~QomD66k9dQSIX8OTbAB4H1BYnNr6K8xn29no8JbWiLLTW5JW5beJk9c2sUIYAXMrqovQ3xM4Dl4aWzP6lUy-UrGGY1v7RWDI~NcH6eZfrRT6Q7ONjYRiVflQs6sDOJhR1G0RB0jyOUgGa91sMClNsyAsCZB39n9KEc7Uetm6yMR03aNmZuSOpNLNQqMTXBCD1yZCcF~RMUFEDxVJvVwkHrBfyq12c8PU7-ScDaIRZXLeOndltCUQ6BeJ9QxyrZyc-HT0z0q2jkSSFf3g2ZzYyY~yPuoxynRh-XWt9Q__',
      highlightedTitle: 'Step 1',
      title: 'Grab a product',
      description:
        'Others don’t need a QL device or the APP to receive your info. Your profile opens in browser.',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/fd0f/fe14/d59b961682cadcb1d858785f6bcc5405?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ba9MyuE3tpoP6L1cw4lp5g2tnem1XduP5W8Rlyema19BEipz6iGcIvDkC2w5Dy4QHY8A0bbc0yKIW~5fUD9OdVx5rPAmd5zQ8hP1h4FmAsEhBgxQV9s5fOMZxsd1Zlo8~QhQRopNGsD~jxkaN3MQ8l7F56cndL0~wKgvYZChxZ-6qcK8eUxSswLSQ37ss8BGZsj0l5qMfxKZPWELts0KBx9-cM4gA2gDY4wolhTd1WF4kyseiWO65AQcOjrtGMx3WpDYuIduqVqB-ZD~sOW5Tot89WkNqkgC0qrAu1OOqU086aFwqR4ZrqNUk172hv2cFHIB~PDK~hyUiI3OckLRcA__',
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
