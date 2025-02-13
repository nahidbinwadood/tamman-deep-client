import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from './useAxiosPublic';

const FeatureContents = async () => {
  const { data } = await axiosPublic('/api/cms/feature');
  return data;
};

export const useFeatureContents = () => {
  const result = useQuery({
    queryKey: ['allFeatures'],
    queryFn: FeatureContents,
  });
  return result?.data?.data;
};
