import GradientButton from '../Buttons/GradientButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import { CardListSvg, CardListWhiteSvg } from '../SvgContainer';

/* eslint-disable react/prop-types */
const PricingCard = ({ card }) => {
  return (
    <div
      className={`px-6 py-8 shadow-lg rounded-xl ${
        card.type == 'Premium Plus' ? 'bg-[#111518] text-white' : 'bg-white'
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
          <p className="text-3xl md:text-5xl font-bold">£{card?.price}</p>
        </div>
        <div>
          <h4 className="md:text-lg font-medium">GBP</h4>
          <h5
            className={`${
              card.type == 'Premium Plus' ? 'text-white' : 'text-textColor'
            }`}
          >
            /Billed monthly
          </h5>
        </div>
      </div>
      <div className="pt-5 md:pt-8 lg:pt-10 w-full">
        {card.type == 'Premium Plus' ? (
          <PrimaryButton fullWidth={true} title={'Buy this plan'} />
        ) : (
          <GradientButton title={'Buy this plan'} />
        )}
      </div>
      {/* hr */}
      <div className="my-6 md:my-8 lg:my-10 w-full border-t-[1px] border-[#BEC0C0]"></div>
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-bold">What&apos;s included?</h3>
        </div>
        {card?.includes?.map((include) => (
          <div key={include} className="flex items-center gap-3">
            {card.type == 'Premium Plus' ? (
              <div className="flex-shrink-0">
                <CardListWhiteSvg />
              </div>
            ) : (
              <div className='flex-shrink-0'>
                <CardListSvg />
              </div>
            )}
            <p className="md:text-lg font-medium">{include}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
