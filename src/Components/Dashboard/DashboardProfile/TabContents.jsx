/* eslint-disable react/prop-types */
import { useState } from 'react';
import ActionShow from './ActionShow';
import Product from './Product';

const TabContents = ({ activeTab, allActions }) => {
  const cards = [
    {
      id: 1,
      cardSerial: 1,
      userType: 'Premium',
      status: 'active',
    },
  ];
  const [activeItemId, setActiveItemId] = useState(null);

  const handleToggle = (itemId) => {
    // Set the active item ID, deactivate all others
    setActiveItemId(itemId);
  };

  console.log(allActions);
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of{' '}
        {activeTab == `My Cards`
          ? `Cards ( ${cards.length} )`
          : `Actions ( ${allActions.length} )`}
      </h4>

      <div className="space-y-3">
        {activeTab == 'My Cards'
          ? cards?.map((item, index) => (
              <Product key={index} item={item} />
            )) || <p>No items found</p>
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
