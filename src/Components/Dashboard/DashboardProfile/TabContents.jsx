/* eslint-disable react/prop-types */
import Product from './Product';

const TabContents = ({ activeTab, allActions }) => {
  const cards = [
    {
      id: 1,
      cardSerial: 1,
      userType: 'Premium',
      status:"active"
    },
    {
      id: 2,
      cardSerial: 2,
      userType: 'Premium',
      status:"inactive"
    },
    {
      id: 3,
      cardSerial: 3,
      userType: 'Premium',
      status:"inactive"
    },
  ];

  const actions = allActions.map((action) => ({
    type: action.name,
    data: action.data.flatMap((item) => item.data), // Flatten the data into a single array
  }));
  const data = actions?.flatMap((item) => item.data);

  console.log(data);
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white h-fit">
      <h4 className="font-normal text-textDark pb-4 ">
        List of {activeTab == 'My Cards' ? 'Cards' : 'Actions'}
      </h4>

      <div className="space-y-3">
        {activeTab == 'My Cards'
          ? cards?.map((item, index) => <Product key={index} item={item} />) || (
              <p>No items found</p>
            )
          : data?.map((item, index) => <Product key={index} item={item} />) || (
              <p>No items found</p>
            )}
      </div>
    </div>
  );
};

export default TabContents;
