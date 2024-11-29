/* eslint-disable react/prop-types */
import Product from './Product';

const TabContents = ({ activeTab, allActions }) => {
  const actions = allActions.map((action) => ({
    type: action.name,
    data: action.data.flatMap((item) => item.data), // Flatten the data into a single array
  }));
  const data = actions?.flatMap((item) => item.data);

  console.log(data);
  return (
    <div className="col-span-8 p-5 rounded-xl border bg-white">
      <h4 className="font-normal text-textDark pb-4 ">
        List of {activeTab == 'My Cards' ? 'Cards' : 'Actions'}
      </h4>

      <div className="space-y-3">
        {data?.map((item, index) => <Product key={index} item={item} />) || (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default TabContents;
