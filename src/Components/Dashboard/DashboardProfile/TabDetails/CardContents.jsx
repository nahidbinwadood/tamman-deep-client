import Loader from '@/Components/Loaders/Loader';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product';

const CardContents = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allCards = [], isLoading } = useQuery({
    queryKey: ['allCards'],
    queryFn: async () => {
      const { data } = await axiosPublic('/api/user/card');
      return data?.data;
    },
  });
  if (isLoading) {
    return (
      <div className="min-h-[50vh] col-span-8 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of Cards {allCards.length}
      </h4>

      <div className="space-y-3">
        {allCards?.map((item) => <Product key={item?.id} item={item} />) || (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default CardContents;
