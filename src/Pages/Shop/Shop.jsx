import { useQuery } from '@tanstack/react-query';
import {
  AndroidSvg,
  HammerSvg,
  MobileSvg,
  SmileSvg,
} from '../../Components/SvgContainer';
import ProductsCard from './../../Components/Cards/ProductsCard';
import InfoSection from '@/Components/Shop/InfoSection';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Loader from '@/Components/Loaders/Loader';

const Shop = () => {
  const allInfo = [
    {
      img: [{ logo: <SmileSvg /> }],
      title: 'Connect with anyone',
      description: 'Just one person needs Tapt to begin networking.',
      border: true,
    },
    {
      img: [{ logo: <MobileSvg /> }],
      title: 'No app required',
      description: 'Use your web browser to exchange contact details.',
      border: true,
    },
    {
      img: [{ logo: <AndroidSvg /> }],
      title: 'Connect with anyone',
      description: 'Works with all mobile devices.',
      border: true,
    },
    {
      img: [{ logo: <HammerSvg /> }],
      title: 'Built to last',
      description: 'Crafted like a credit card, our cards are durable.',
      border: false,
    },
  ];
  const axiosPublic = useAxiosPublic();

  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ['allProducts'],
    queryFn: async () => {
      const { data } = await axiosPublic('/api/card');
      return data?.data;
    },
  });

  return (
    <div className="2xl:mt-[88px]">
      <div className="mt-28 2xl:mt-40 container mx-auto px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-0">
        {/* title */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            All products
          </h2>
        </div>

        {/* filters */}
        {/* <ShopFilters /> */}

        {/* products card */}
        {isLoading ? (
          <div className="h-[70vh] flex items-center justify-center pb-20">
            <Loader />
          </div>
        ) : (
          <div className="my-5 md:my-8 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {allProducts?.map((product) => (
              <ProductsCard product={product} key={product?.id} />
            ))}
          </div>
        )}
      </div>
      {/* Info Section */}
      <InfoSection allInfo={allInfo} />
    </div>
  );
};

export default Shop;
