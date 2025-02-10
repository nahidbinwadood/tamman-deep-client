import { Link } from 'react-router-dom';
import banner from '../../../assets/images/cta-bg.jpg';
const CtaSection = () => {
  return (
    <div className="my-6 md:my-8 lg:my-10">
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${banner})`,
        }}
        className="mx-5 md:mx-8 bg-bgSecondary rounded-[20px] h-[60vh]  lg:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      >
        <div className="text-white text-center px-5">
          <h3 className="text-3xl lg:text-4xl font-bold pb-3">
            Go Green with One Tap
          </h3>
          <p className="font-semibold text-lg pb-6">
            And replace your paper cards
          </p>
          <Link to="/shop">
            <button className="py-3 border-white border px-16 rounded-xl hover:text-textColor hover:bg-white duration-500 transition">
              Shop One Tap Cards
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
