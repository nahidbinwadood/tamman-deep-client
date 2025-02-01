import { useQuery } from '@tanstack/react-query';
import {
  AndroidSvg,
  AppleSvg,
  HammerSvg,
  MobileSvg,
  SmileSvg,
} from '../../Components/SvgContainer';
import ProductsCard from './../../Components/Cards/ProductsCard';
import InfoSection from '@/Components/Shop/InfoSection';
import ShopFilters from '@/Components/Shop/ShopFilters';
import useAxiosPublic from '@/Hooks/useAxiosPublic';

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
      img: [{ logo: <AndroidSvg /> }, { logo: <AppleSvg /> }],
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
    <div className="mt-[88px]">
      <div className="mt-40 container mx-auto">
        {/* title */}
        <div>
          <h2 className="text-4xl font-bold">All products</h2>
        </div>

        {/* filters */}
        <ShopFilters />

        {/* products card */}
        <div className="my-10 grid grid-cols-4 gap-6 w-full">
          {isLoading ? (
            <div className=" ">loading ...</div>
          ) : (
            allProducts?.map((product) => (
              <ProductsCard product={product} key={product?.id} />
            ))
          )}
        </div>
      </div>
      {/* Info Section */}
      <InfoSection allInfo={allInfo} />
    </div>
  );
};

export default Shop;
