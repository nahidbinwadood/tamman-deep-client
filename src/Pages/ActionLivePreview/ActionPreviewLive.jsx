import EmailPreview from '@/Components/LivePreview/EmailPreview';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { useParams } from 'react-router-dom';

const ActionPreviewLive = () => {
  const { unique_code } = useParams();

  const [actionType, setActionType] = useState();


  console.log(actionType);

  //   console.log(unique_code);
  const axiosPublic = useAxiosPublic();

  const { data: getActionData } = useQuery({
    queryKey: ['getActionData'],
    queryFn: async () => {
      const { data } = await axiosPublic(`/api/action/view/${unique_code}`);
      setActionType(data?.data?.product_types[1]?.name);
    //   return data?.data?.product_types[1]?.data[0]?.data;
    //   return data?.data?.product_types[0]?.data[0]?.data;
      return data?.data?.product_types;
    },
  });

  console.log(getActionData);
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      {/* <h1>hello from qr code</h1> */}
      <EmailPreview actionInfo={getActionData} isEditing={true} />
    </div>
  );
};

export default ActionPreviewLive;
