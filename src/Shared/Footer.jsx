import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';
import {
  // FooterSponsor1,
  // FooterSponsor2,
  // FooterSponsor3,
  // FooterSponsor4,
  // FooterSponsor5,
  // FooterSponsor6,
  // FooterSponsor7,
  // FooterSponsor8,
  // FooterSponsor9,
  // FooterSponsor10,
  // FooterSponsor11,
  SubmitFormSvg,
} from './../Components/SvgContainer';
const Footer = () => {
  const currentLocation = useLocation().pathname;
  // const sponsors = [
  //   { logo: <FooterSponsor1 /> },
  //   { logo: <FooterSponsor2 /> },
  //   { logo: <FooterSponsor3 /> },
  //   { logo: <FooterSponsor4 /> },
  //   { logo: <FooterSponsor5 /> },
  //   { logo: <FooterSponsor6 /> },
  //   { logo: <FooterSponsor7 /> },
  //   { logo: <FooterSponsor8 /> },
  //   { logo: <FooterSponsor9 /> },
  //   { logo: <FooterSponsor10 /> },
  //   { logo: <FooterSponsor11 /> },
  // ];
  return (
    <div
      className={` px-5 md:px-8 2xl:px-0 ${
        currentLocation == '/'
          ? 'bg-[#111518] text-white'
          : 'bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]'
      } `}
    >
      <div>
        <div className="container mx-auto pt-5">
          <div className="-ml-8 pb-3 h-20 md:h-24">
            <img
              className="h-full object-cover"
              src={`${currentLocation == '/' ? logoWhite : logoBlack}`}
              alt=""
            />
          </div>
          <div>
            <p className="text-lg md:text-xl font-medium">
              Stay tuned for latest exclusive deals and updates
            </p>
            <p
              className={`${
                currentLocation == '/' ? 'text-white/90' : 'text-textColor'
              } pt-3 md:pt-5`}
            >
              Join our mailing list today!
            </p>
          </div>
          <div className="pt-5">
            <form action="">
              <div className="relative lg:w-[870px]">
                <input
                  className={`${
                    currentLocation == '/'
                      ? 'bg-[#454e57] placeholder:text-white'
                      : 'bg-white text-black'
                  } w-full focus:outline-none rounded-lg py-3 px-5  pr-12`}
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <SubmitFormSvg dark={currentLocation == '/shop'} />
                </button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div className="pt-8 md:pt-12 lg:pt-16 flex lg:items-center justify-between lg:justify-normal lg:gap-72">
            <div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pb-4 sm:pb-6 md:pb-8">
                  Quick Links
                </h3>
              </div>
              <div className="flex flex-col gap-5 text-sm sm:text-base">
                <Link to="/">Terms of Services</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Shipping Policy</Link>
                <Link to="/">Return Policy</Link>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold pb-4 sm:pb-6 md:pb-8">
                  Quick Links
                </h3>
              </div>
              <div className="flex flex-col gap-5 text-sm sm:text-base">
                <Link to="/">Help Center</Link>
                <Link to="/">Contact</Link>
                <Link to="/">APP Download</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="border-t border-white/10" />
        </div>

        {/* <div className="w-full flex gap-2 items-center justify-center hidden">
          {sponsors?.map((sponsor, idx) => (
            <div key={idx}>{sponsor?.logo}</div>
          ))}
        </div> */}
        <div className="text-center text-sm py-5">
          <p>© 2025 One Tap All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
