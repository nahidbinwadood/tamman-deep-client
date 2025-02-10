import CallPreview from '@/Components/LivePreview/CallPreview';
import ContactPreview from '@/Components/LivePreview/ContactPreview';
import EmailPreview from '@/Components/LivePreview/EmailPreview';
import SmsPreview from '@/Components/LivePreview/SmsPreview';
import WhatsAppPreview from '@/Components/LivePreview/WhatsAppPreview';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useParams } from 'react-router-dom';

const ActionPreviewLive = () => {
  const { unique_code } = useParams();

  const [actionType, setActionType] = useState();

  //   console.log(unique_code);
  const axiosPublic = useAxiosPublic();

  const { data: getActionData } = useQuery({
    queryKey: ['getActionData'],
    queryFn: async () => {
      const { data } = await axiosPublic(`/api/action/view/${unique_code}`);
      console.log(data);
      setActionType(data?.data?.name);
      return data?.data?.data;
    },
  });

  console.log(getActionData);
  // console.log(actionType);
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      {/* <h1>hello from qr code</h1> */}
      {actionType == 'email' ? (
        <EmailPreview actionInfo={getActionData} />
      ) : actionType == 'whats-app' ? (
        <WhatsAppPreview actionInfo={getActionData} />
      ) : actionType == 'sms' ? (
        <SmsPreview actionInfo={getActionData} />
      ) : actionType == 'call' ? (
        <CallPreview actionInfo={getActionData} />
      ) : actionType == 'contact-card' ? (
        <ContactPreview actionInfo={getActionData} />
      ) : null}
    </div>
  );
};

export default ActionPreviewLive;
