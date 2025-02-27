import { axiosPublic } from '@/Hooks/useAxiosPublic';
import GradientButton from '../Buttons/GradientButton';
import PrimaryButton from '../Buttons/PrimaryButton';
import { CardListSvg, CardListWhiteSvg } from '../SvgContainer';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import useAuth from '@/Hooks/useAuth';
import toast from 'react-hot-toast';

/* eslint-disable react/prop-types */
const PricingCard = ({ card }) => {
  const { user, subscription } = useAuth();

  const [loading, setLoading] = useState(false);
  const buyPlanFunc = async (type) => {
    const { data } = await axiosPublic.post(`/api/subscription/${type}`);
    return data;
  };
  const buyPlanMutation = useMutation({
    mutationKey: ['buyPlan', card.type.toLowerCase()],
    mutationFn: buyPlanFunc,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      setLoading(false);
      window.location.href = data.url;
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleBuyPlan = () => {
    if (user) {
      if (card?.type == 'Basic') {
        return;
      } else {
        if (subscription?.plan !== card?.type.toLowerCase()) {
          console.log(subscription);
          buyPlanMutation.mutate(card?.type.toLowerCase());
        } else {
          toast.error('You are already subscribed to this plan.');
        }
      }
    } else {
      toast.error('Please Login first to purchase.');
    }
  };
  return (
    <div
      className={`px-6 py-8 shadow-lg rounded-xl ${
        card.type == 'Premium Plus' ? 'bg-[#111518] text-white' : 'bg-white'
      }`}
    >
      <div>
        <h4
          className={`md:text-lg font-bold ${
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
      <div onClick={handleBuyPlan} className="pt-5 md:pt-8 lg:pt-10 w-full">
        {card.type == 'Premium Plus' ? (
          <PrimaryButton
            loading={loading}
            plan={true}
            fullWidth={true}
            title={'Buy this plan'}
          />
        ) : (
          <GradientButton loading={loading} title={'Buy this plan'} />
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
              <div className="flex-shrink-0">
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
