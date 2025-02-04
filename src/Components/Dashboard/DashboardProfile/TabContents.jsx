/* eslint-disable react/prop-types */
import { useState } from 'react';
import ActionShow from './ActionShow';
import Product from './Product';
import useAuth from '@/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Loader from '@/Components/Loader/Loader';

const TabContents = ({ allCards, activeTab }) => {
  const [activeItemId, setActiveItemId] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { activeCard } = useAuth();
  const handleToggle = (itemId) => {
    // Set the active item ID, deactivate all others
    setActiveItemId(itemId);
  };

  // fetching data from Db:
  const {
    data: allActions = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['allActions'],
    queryFn: async () => {
      const { data } = await axiosPublic(`api/action/show/${activeCard?.id}`);
      return data?.data?.product_types;
    },
    enabled: !!activeCard?.id,
  });

  console.log(allActions);

  //console.log(allActions);

  if (isLoading ) {
    return (
      <div className="h-[70vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of
        {activeTab == `My Cards`
          ? ` Cards ( ${allCards.length} )`
          : ` Actions ( ${allActions.length} )`}
      </h4>

      <div className="space-y-3">
        {activeTab == 'My Cards'
          ? allCards?.map((item) => <Product key={item?.id} item={item} />) || (
              <p>No items found</p>
            )
          : allActions?.map((item) => (
              <ActionShow
                key={item.id} // Use item.id instead of index
                isActive={activeItemId === item.id}
                item={item}
                onToggle={handleToggle}
              />
            )) || <p>No items found</p>}
      </div>
    </div>
  );
};

export default TabContents;
