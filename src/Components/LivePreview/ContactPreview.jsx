/* eslint-disable react/prop-types */
import { FaEarthAfrica, FaMessage } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile.png';

const ContactPreview = ({ formData }) => {
  return (
    <div className="w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit">
      {/* img */}
      <div>
        <div className="h-56 bg-[#D2E3FC] rounded-xl relative">
          <div className="h-56 w-full absolute inset-0 top-0 left-0">
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={
                formData?.cover_image
                  ? URL.createObjectURL(formData.cover_image)
                  : profileImg
              }
              alt="Cover"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative">
          <div className="size-32 -mt-16 z-10 relative">
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
          <h4 className=" text-2xl font-semibold text-[#555]">
            {formData?.fullName ? formData?.fullName : 'Enter Your Name'}
          </h4>

          {/* position */}
          <div className="w-full flex items-center justify-center gap-2 text-[#555]">
            <p>
              {formData?.companyName ? formData?.companyName : 'Company Name'}
            </p>
            <p>|</p>
            <p>{formData?.position ? formData?.position : 'Position'}</p>
          </div>

          {/* address */}
          <div className="w-full flex items-center justify-center gap-2 py-2">
            <IoLocationSharp className="size-6 text-primaryColor" />
            <p className="text-[#555]">
              {formData?.address ? formData?.address : 'Enter Your Address'}
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="w-full flex items-center justify-center gap-5">
          <Link
            to="tel: +441276474643"
            className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
          >
            <IoCall className="text-white size-5" />
          </Link>
          <Link
            to="sms: +441276474643"
            className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
          >
            <FaMessage className="text-white size-5" />
          </Link>
          <Link
            to="sms: +441276474643"
            className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
          >
            <IoMdMail className="text-white size-5" />
          </Link>
        </div>

        {/* contact */}
        <div className="space-y-4">
          {/* office */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Office</p>
              <p className="text-[#555] font-medium">
                {formData?.officeNumber
                  ? formData?.officeNumber
                  : 'Enter Office Number'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Link
                to={`tel: ${formData?.officeNumber}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <IoCall className="text-white size-4" />
              </Link>
              <Link
                to={`sms: ${formData?.officeNumber}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <FaMessage className="text-white size-4" />
              </Link>
            </div>
          </div>

          {/* personal */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Personal</p>
              <p className="text-[#555] font-medium">
                {formData?.number ? formData?.number : 'Enter Number'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Link
                to={`tel: ${formData?.number}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <IoCall className="text-white size-4" />
              </Link>
              <Link
                to={`sms: ${formData?.number}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <FaMessage className="text-white size-4" />
              </Link>
            </div>
          </div>

          {/* email */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Email</p>
              <p className="text-[#555] font-medium">
                {formData?.mail ? formData?.mail : 'Enter Your Email'}
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

          {/* website */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Website</p>
              <p className="text-[#555] font-medium">
                {formData?.website ? formData?.website : 'Enter Your Website'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Link
                to={`${formData?.website}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <FaEarthAfrica className="text-white size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* save button */}

        <div>
          <Link className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6]  w-full block text-white text-center py-3 rounded-md font-medium">
            Add to Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
