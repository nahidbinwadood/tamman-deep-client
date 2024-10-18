import { Link, NavLink, useLocation } from 'react-router-dom';
import logoWhite from '../assets/images/logo.svg';
import logoBlack from '../assets/images/logo-black.png';

import { CartSvg, ProfileSvg, SearchSvg } from './../Components/SvgContainer';

const Navbar = () => {
  const isHomepage = useLocation().pathname;

  return (
    <div className="absolute h-[88px] w-full bg-transparent top-0 left-0">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="h-full -ml-8">
          <Link to="/">
            <img src={isHomepage == '/' ? logoWhite : logoBlack} alt="" />
          </Link>
        </div>
        <div
          className={`${
            isHomepage == '/' ? 'text-white' : 'text-black'
          } space-x-6`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className="flex items-center gap-6">
          <div>
            {isHomepage == '/' ? <SearchSvg /> : <SearchSvg light={true} />}
          </div>
          <div>
            {isHomepage == '/' ? <CartSvg /> : <CartSvg light={true} />}
          </div>
          <div>
            {isHomepage == '/' ? <ProfileSvg /> : <ProfileSvg light={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
