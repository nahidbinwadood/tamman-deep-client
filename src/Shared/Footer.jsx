import { Link, useLocation } from 'react-router-dom';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';
import {
  FooterSponsor1,
  FooterSponsor2,
  FooterSponsor3,
  FooterSponsor4,
  FooterSponsor5,
  FooterSponsor6,
  FooterSponsor7,
  FooterSponsor8,
  FooterSponsor9,
  FooterSponsor10,
  FooterSponsor11,
  SubmitFormSvg,
} from './../Components/SvgContainer';
const Footer = () => {
  const isHomepage = useLocation().pathname;
  const sponsors = [
    { logo: <FooterSponsor1 /> },
    { logo: <FooterSponsor2 /> },
    { logo: <FooterSponsor3 /> },
    { logo: <FooterSponsor4 /> },
    { logo: <FooterSponsor5 /> },
    { logo: <FooterSponsor6 /> },
    { logo: <FooterSponsor7 /> },
    { logo: <FooterSponsor8 /> },
    { logo: <FooterSponsor9 /> },
    { logo: <FooterSponsor10 /> },
    { logo: <FooterSponsor11 /> },
  ];
  return (
    <div
      className={`${
        isHomepage == '/'
          ? 'bg-[#111518] text-white'
          : 'bg-gradient-to-b from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]'
      } `}
    >
      <div>
        <div className="container mx-auto pt-5">
          <div className="-ml-8 pb-3">
            <img src={`${isHomepage=="/" ? logoWhite :logoBlack}`} alt="" />
          </div>
          <div>
            <p className="text-xl font-medium">
              Stay tuned for latest exclusive deals and updates
            </p>
            <p className={`${isHomepage=="/" ? "text-white/90" :"text-textColor"}  pt-5`}>Join our mailing list today!</p>
          </div>
          <div className="pt-5">
            <form action="">
              <div className="relative w-[870px]">
                <input
                  className={`${isHomepage=="/" ? "bg-[#454e57] placeholder:text-white" :"bg-white text-black"} w-full focus:outline-none rounded-lg py-3 px-5  pr-12`}
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <SubmitFormSvg dark={true} />
                </button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div className="pt-16 flex items-center gap-72">
            <div>
              <div>
                <h3 className="text-2xl font-semibold pb-8">Quick Links</h3>
              </div>
              <div className="flex flex-col gap-5">
                <Link to="/services">Terms of Services</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/shipping-policy">Shipping Policy</Link>
                <Link to="/return-policy">Return Policy</Link>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-2xl font-semibold pb-8">Quick Links</h3>
              </div>
              <div className="flex flex-col gap-5">
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/app-download">APP Download</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="border-t border-white/10" />
        </div>

        <div className="w-full flex gap-2 items-center justify-center pb-5">
          {sponsors?.map((sponsor, idx) => (
            <div key={idx}>{sponsor?.logo}</div>
          ))}
        </div>
        <div className="text-center text-sm pb-5">
          <p>© 2024, Quick Link All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
