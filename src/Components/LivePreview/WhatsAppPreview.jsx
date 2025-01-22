/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import profileImg from '@/assets/images/profile.png';
import whatsAppBg from '../../assets/images/wp.png';
import { IoMdMail } from 'react-icons/io';
const WhatsAppPreview = ({ formData }) => {
  return (
    <div className="w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit bg-gradient-to-l from-[#116DFF] to-[#23C0B6] py-10">
      {/* img */}
      <div>
        <div className="w-full flex items-center justify-center relative">
          <div className="size-32 z-10 relative">
            <img
              className="h-full w-full object-cover rounded-full"
              src={
                formData?.image
                  ? URL.createObjectURL(formData.image)
                  : profileImg
              }
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* information */}
      <div className="space-y-5 mt-5 mb-10 px-6">
        {/* title */}
        <div className="text-center space-y-2">
          <h4 className=" text-2xl font-semibold text-[#fff]">
            {formData?.name ? formData?.name : 'Enter Your Name'}
          </h4>

          {/* logo */}
          <div className="w-full flex items-center justify-center py-2">
            <div className="size-20">
              <img
                className="h-full w-full object-cover"
                src={whatsAppBg}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="space-y-4">
          {/* email */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2 overflow-hidden">
              <p className="text-primaryColor">Whats App</p>
              <p className="text-[#555] font-medium w-full max-w-[300px]">
                {formData?.number ? formData?.number : 'Enter WhatsApp Number'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Link
                to="mailto: info@TechVise.co.uk"
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <IoMdMail className="text-white size-4" />
              </Link>
            </div>
          </div>
          <div>
            <Link
              to={`https://wa.me/${formData?.number}`}
              className="bg-[#efefef] text-primaryColor w-full block text-center py-3 rounded-md font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPreview;
