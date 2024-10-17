import heroBg from '../../../assets/images/Hero-Bg.png';
import heroBanner from '../../../assets/images/homepage-hero.png';
import { Link } from 'react-router-dom';
import PrimaryButton from './../../../Components/Buttons/PrimaryButton';
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="h-[100vh] bg-black pt-[88px] text-white bg-no-repeat bg-cover bg-center"
    >
      <div className="flex h-full w-full ">
        <div className="pl-60 w-1/2 flex flex-col justify-center ">
          <div className="text-6xl font-bold leading-[80px] tracking-[-0.64px]">
            <h1>Digital business cards</h1>
            <h1>
              for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#116DFF] to-[#23C0B6] font-bold leading-[132%] tracking-[-0.64px]">
                modern networking.
              </span>
            </h1>
          </div>
          <div>
            <p className="py-8 font-semibold text-2xl">
              Share instantly. Stay connected.
            </p>
          </div>
          <div>
            <Link to="/shop">
              <PrimaryButton title={'Shop Now'} />
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={heroBanner}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
