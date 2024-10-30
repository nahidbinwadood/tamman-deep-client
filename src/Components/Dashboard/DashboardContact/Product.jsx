import ProfileImg from '../../../assets/images/contact-profile.png';
import { TiBusinessCard } from 'react-icons/ti';
function Product() {
  return (
    <div className="flex items-center border transition-all duration-200 text-textColor hover:text-white justify-between bg-white hover:bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] p-6 rounded-[8px]  ">
      <div className="flex items-center gap-3">
        <img src={ProfileImg} alt="ProfileImg" />
        <p className="text-[18px] font-medium ">Demo Product</p>
      </div>
      <div className="flex items-center gap-2">
        <TiBusinessCard />
        <p className=" ">Contact Card #1</p>
      </div>
    </div>
  );
}

export default Product;
