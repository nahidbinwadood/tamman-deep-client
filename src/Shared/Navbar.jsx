import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { CartSvg, ProfileSvg, SearchSvg } from './../Components/SvgContainer';

const Navbar = () => {
  return (
    <div className="absolute h-[88px] w-full bg-transparent top-0 left-0">
      <div className="container mx-auto w-full flex items-center justify-between">
        <div className="h-full">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="text-white space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <SearchSvg />
          </div>
          <div>
            <CartSvg />
          </div>
          <div>
            <ProfileSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
