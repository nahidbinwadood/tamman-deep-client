import {
  AndroidSvg,
  AppleSvg,
  DotSvg,
  FilterSvg,
  HammerSvg,
  MobileSvg,
  SmileSvg,
} from '../../Components/SvgContainer';
import GradientButton from '../../Components/Buttons/GradientButton';
import card from '../../assets/images/card-ez.png';
import ProductsCard from './../../Components/Cards/ProductsCard';

const Shop = () => {
  const allProducts = [
    {
      image: card,
      title: 'Tapt Black',
      price: 5500,
    },
    {
      image: card,
      title: 'Tapt Black',
      price: 5500,
    },
    {
      image: card,
      title: 'Tapt Black',
      price: 5500,
    },
    {
      image: card,
      title: 'Tapt Black',
      price: 5500,
    },
    {
      image: card,
      title: 'Tapt Black',
      price: 5500,
    },
  ];
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

  return (
    <div className="mt-[88px]">
      <div className="mt-40 container mx-auto">
        {/* title */}
        <div>
          <h2 className="text-4xl font-bold">All products</h2>
        </div>

        {/* filters */}
        <div className="mt-16 w-full flex items-center justify-between">
          <div>
            <GradientButton title={'Show filters'} prev={<FilterSvg />} />
          </div>
          <div className="flex items-center gap-5">
            <p className="text-nowrap">Sort by:</p>
            <GradientButton title={'Best Selling'} next={<DotSvg />} />
          </div>
        </div>

        {/* products card */}
        <div className="my-10 grid grid-cols-3 gap-12">
          {allProducts?.map((product, idx) => (
            <ProductsCard product={product} key={idx} />
          ))}
        </div>

        {/* Recently Viewed */}
        <div className="pt-40 pb-20">
          <div>
            <h2 className="text-4xl font-bold">Recently Viewed</h2>
          </div>

          {/* viewed card */}
          <div className="mt-10 grid grid-cols-3 gap-12">
            {[...allProducts].slice(0, 2)?.map((product, idx) => (
              <ProductsCard product={product} key={idx} />
            ))}
          </div>
        </div>
      </div>
      {/* Info Section */}
      <div className="bg-[#F5F6F7]">
        <div className="container mx-auto flex items-center justify-evenly py-10">
          {allInfo?.map((info, idx) => (
            <div
              key={idx}
              className={`flex flex-1 gap-4 ${
                info?.border ? 'border-r' : ''
              } border-[#57626966] pl-5`}
            >
              <div className="flex gap-3">
                {info?.img?.map((icon, idx) => (
                  <span key={idx}>{icon?.logo}</span>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-bold">{info?.title}</h4>
                <p className="text-textColor w-[60%]">{info?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
