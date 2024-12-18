/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ActionTab({ setOpen }) {
  const [category, setCategory] = useState('communication');
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const actions = [
    {
      id: 1,
      name: 'Communication',
      category: 'communication',
    },
    {
      id: 2,
      name: 'Profile & Identity',
      category: 'profile-and-identity',
    },
    {
      id: 3,
      name: 'Business Tools',
      category: 'business-tools',
    },
    {
      id: 4,
      name: 'Utilities',
      category: 'utilities',
    },
  ];

  useEffect(() => {
    const getCreationData = async () => {
      try {
        const result = await axios.get('/create-actions.json');
        const filteredByCategory = result.data.filter(
          (item) => item.category === category
        );
        setData(filteredByCategory);
      } catch (err) {
        console.log(err);
      }
    };

    getCreationData();
  }, [category]);

  const handleTab = (category, index) => {
    setCategory(category);
    setActiveIndex(index);
  };

  return (
    <div className="grid grid-cols-12 font-inter h-full divide-gray-100  divide-x-2 gap-6">
      <div className="col-span-4 space-y-2">
        {actions?.map((category, index) => (
          <h4
            onClick={() => handleTab(category?.category, index)}
            className={`px-4 py-2 text-center text-lg font-semibold ${
              activeIndex === index
                ? 'bg-[#e3eff1] text-primaryColor '
                : 'bg-white'
            } cursor-pointer  border-gray-200 rounded-md bg-white border`}
            key={category.id}
          >
            {category.name}
          </h4>
        ))}
      </div>
      <div className="col-span-8 px-6  space-y-6 h-[560px] overflow-hidden overflow-y-scroll scrollbar-hidden">
        {data.map((actions) => (
          <div className="flex cursor-pointer items-top gap-5" key={actions.id}>
            <div className="w-4/12 h-56 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src={actions.image}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-textDark pb-4">
                {actions.title}
              </h3>
              <p className="text-sm font-medium h-24">{actions.description}</p>

              <div className="pt-4 flex justify-end">
                <Link
                  onClick={() => setOpen(false)}
                  to={actions?.path}
                  className="px-4 py-2 rounded-md  bg-primaryColor text-white border border-primaryColor hover:text-primaryColor hover:bg-transparent transition duration-300"
                >
                  + Create
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionTab;
