/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import profileImg from '@/assets/images/profile.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from 'react';

const SmsPreview = ({ formData, isEditing, actionInfo }) => {
  const [imageUrl, setImageUrl] = useState('');

  // Handle image source logic

  // Update imageUrl when image changes
  useEffect(() => {
    const getImageSource = () => {
      if (formData?.image) {
        if (formData.image instanceof File) {
          return URL.createObjectURL(formData.image);
        } else {
          return `${import.meta.env.VITE_API_URL}/storage/app/public/${
            formData.image
          }`;
        }
      }

      // Check for actionInfo image
      if (actionInfo?.image) {
        return `${import.meta.env.VITE_API_URL}/storage/app/public/${
          actionInfo.image
        }`;
      }

      // Default image if no other options are available
      return profileImg;
    };

    const newImageUrl = getImageSource();
    setImageUrl(newImageUrl);

    // Cleanup function
    return () => {
      if (newImageUrl?.startsWith('blob:')) {
        URL.revokeObjectURL(newImageUrl);
      }
    };
  }, [formData?.image, actionInfo?.image]);
  return (
    <div
      style={{
        backgroundColor: `${
          actionInfo ? actionInfo?.backgroundColor : formData?.backgroundColor
        }`,
      }}
      className="min-w-[320px] max-w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit py-6 md:py-8 lg:py-10"
    >
      {/* img */}
      <div>
        <div className="w-full flex items-center justify-center relative">
          <div className="size-24 md:size-28 lg:size-32 z-10 relative">
            <LazyLoadImage
              effect="blur"
              className="size-24 md:size-28 lg:size-32 object-cover rounded-full"
              src={imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* information */}
      <div className="space-y-5 mt-5 mb-10 px-6">
        {/* title */}
        <div className="text-center space-y-2">
          <h4 className="text-xl md:text-2xl font-semibold text-[#fff]">
            {actionInfo
              ? actionInfo?.name
              : formData?.name
              ? formData?.name
              : 'Enter Your Name'}
          </h4>
        </div>

        {/* contact */}
        <div className="space-y-4">
          {/* email */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2 overflow-hidden">
              <p className="text-primaryColor"> Sms Number</p>
              <p className="text-[#555] font-medium w-full max-w-[300px]">
                {actionInfo
                  ? actionInfo?.number
                  : formData?.number
                  ? formData?.number
                  : 'Enter Your Sms Number'}
              </p>
            </div>
          </div>
          <div>
            {isEditing ? (
              <button className="bg-[#efefef] text-primaryColor w-full block text-center py-3 rounded-md font-medium">
                Contact Me
              </button>
            ) : (
              <Link
                to={`sms: ${actionInfo?.number}`}
                className="bg-[#efefef] text-primaryColor w-full block text-center py-3 rounded-md font-medium"
              >
                Contact Me
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsPreview;
