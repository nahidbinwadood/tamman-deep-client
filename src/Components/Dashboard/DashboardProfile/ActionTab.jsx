/* eslint-disable react/prop-types */
import useAuth from '@/Hooks/useAuth';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function ActionTab({ setOpen }) {
  const { activeCard, subscription } = useAuth();
  const [category, setCategory] = useState('communication');
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const contentRef = useRef(null);

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

  //handlers:

  const handleCreateAction = (action) => {
    console.log(action);
    if (activeCard) {
      setOpen(false);
      if (subscription) {
        navigate(`${action?.path}`);
      } else {
        if (
          action?.title == 'Email' ||
          action?.title == 'WhatsApp' ||
          action?.title == 'SMS' ||
          action?.title == 'Call' ||
          action?.title == 'Link Tree' ||
          action?.title == 'Contact Card'
        ) {
          navigate(`${action?.path}`);
        } else {
          toast.error('You need Premium subscription to access this action');
        }
      }
    } else {
      setOpen(false);
      toast.error('You need to active a card before create any action');
    }
  };

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
    // Scroll back to top when changing categories
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="grid xl:grid-cols-12 max-h-[80vh] 2xl:max-h-[600px] font-inter h-full md:divide-gray-100 md:divide-x-2 gap-6">
      <div
        className="xl:col-span-4 md:space-y-2 gap-2 flex md:block overflow-x-auto md:overflow-x-hidden pb-2 md:pb-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex md:block md:space-y-2 flex-nowrap whitespace-nowrap md:whitespace-normal">
          {actions?.map((category, index) => (
            <h4
              onClick={() => handleTab(category?.category, index)}
              className={`px-2 md:px-4 py-2 text-center md:text-lg font-semibold ${
                activeIndex === index
                  ? 'bg-[#e3eff1] text-primaryColor '
                  : 'bg-white'
              } cursor-pointer border-gray-200 rounded-md bg-white border md:w-full mr-2 md:mr-0 flex-shrink-0`}
              key={category.id}
            >
              {category.name}
            </h4>
          ))}
        </div>
      </div>
      <div
        ref={contentRef}
        className="xl:col-span-8 md:px-6 space-y-6 overflow-y-auto scrollbar-hidden  "
      >
        {data.map((actions) => (
          <div
            className="flex flex-col md:flex-row cursor-pointer items-start gap-4 md:gap-6 flex-shrink-0"
            key={actions.id}
          >
            <div className="w-full md:w-4/12 h-40 md:h-56 overflow-hidden rounded-lg flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src={actions.image}
                alt={actions.title}
                loading="lazy"
              />
            </div>
            <div className="2xl:flex-1">
              <h3 className="text-lg md:text-2xl font-semibold text-textDark pb-2 md:pb-4">
                {actions.title}
              </h3>
              <p className="text-sm font-medium line-clamp-3">
                {actions.description}
              </p>

              <div className="pt-3 md:pt-4 flex justify-end">
                <button
                  onClick={() => handleCreateAction(actions)}
                  className="px-4 py-2 rounded-md bg-primaryColor text-white border border-primaryColor hover:text-primaryColor hover:bg-transparent transition duration-300"
                >
                  + Create
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionTab;
