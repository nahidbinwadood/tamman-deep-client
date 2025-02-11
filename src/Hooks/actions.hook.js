import { axiosPublic } from './useAxiosPublic';

export const getActionDataFunction = async (data) => {
  const response = await axiosPublic.post('/api/action/edit', data);
  return response?.data?.data?.data;
};
