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
      className="md:h-[100vh] bg-black pt-[88px] text-white bg-no-repeat bg-cover bg-center px-5 md:px-8 lg:px-10 xl:px-12 2xl:px-0"
    >
      <div className="flex h-full w-full flex-col md:flex-row py-10">
        <div className="lg:pl-6 2xl:pl-60 lg:w-1/2 flex flex-col justify-center ">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[50px] md:leading-[60px] lg:leading-[80px] lg:tracking-[-0.64px]">
            <h1>
              Digital business cards for
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#116DFF] to-[#23C0B6] font-bold leading-[132%] tracking-[-0.64px] ml-4">
                modern networking.
              </span>
            </h1>
          </div>
          <div>
            <p className="py-5 lg:py-8 font-semibold sm:text-xl lg:text-2xl">
              Share instantly. Stay connected.
            </p>
          </div>
          <div>
            <Link to="/shop">
              <PrimaryButton title={'Shop Now'} />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
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
