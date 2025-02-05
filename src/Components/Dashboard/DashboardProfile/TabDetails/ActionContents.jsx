import Loader from '@/Components/Loaders/Loader';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ActionShow from '../ActionShow';
import useAuth from '@/Hooks/useAuth';

const ActionContents = () => {
  const { activeCard } = useAuth();
  const axiosPublic = useAxiosPublic();

  // fetching data from Db:
  const { data: allActions = [], isLoading } = useQuery({
    queryKey: ['allActions'],
    queryFn: async () => {
      const { data } = await axiosPublic(`api/action/show/${activeCard?.id}`);
      return data?.data?.product_types;
    },
    enabled: !!activeCard?.id,
  });

  if (isLoading) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of Actions {allActions.length}
      </h4>

      <div className="space-y-3">
        {allActions?.map((item) => (
          <ActionShow key={item.id} item={item} />
        )) || <p>No items found</p>}
      </div>
    </div>
  );
};

export default ActionContents;
