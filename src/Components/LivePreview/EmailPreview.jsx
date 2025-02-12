/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import profileImg from '@/assets/images/profile.png';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const EmailPreview = ({ formData, isEditing, actionInfo }) => {
  console.log(formData?.image);
  // console.log(prevData?.image);
  const [imageUrl, setImageUrl] = useState('');

  // Handle image source logic

  // Update imageUrl when image changes
  useEffect(() => {
    const getImageSource = () => {
      // Check if there is a prev image
      // if (prevData?.image) {
      //   return `${import.meta.env.VITE_API_URL}/storage/${prevData.image}`;
      // }

      if (formData?.image) {
        if (formData.image instanceof File) {
          return URL.createObjectURL(formData.image);
        } else {
          return `${import.meta.env.VITE_API_URL}/storage/${formData.image}`;
        }
      }

      // Check for actionInfo image
      if (actionInfo?.image) {
        return `${import.meta.env.VITE_API_URL}/storage/${actionInfo.image}`;
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
      className="min-w-[350px] max-w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit py-10"
    >
      {/* img */}
      <div>
        <div className="w-full flex items-center justify-center relative">
          <div className="size-32 z-10 relative">
            <LazyLoadImage
              effect="blur"
              className="h-full w-full object-cover rounded-full"
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
          <h4 className=" text-2xl font-semibold text-[#fff]">
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
              <p className="text-primaryColor font-semibold">Email</p>
              <p className="text-[#555] font-medium w-full max-w-[300px]">
                {actionInfo
                  ? actionInfo?.email
                  : formData?.email
                  ? formData?.email
                  : 'Enter Your Email'}
              </p>
            </div>
            {/* <div className="flex items-center gap-4 justify-center">
              <Link
                to={`mailto: ${formData?.email}`}
                className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
              >
                <IoMdMail className="text-white size-4" />
              </Link>
            </div> */}
          </div>

          <div>
            {isEditing ? (
              <button
                // to={`mailto:${formData?.email}`}
                className="bg-[#efefef] text-primaryColor w-full block text-center py-3 rounded-md font-medium"
              >
                Contact Me
              </button>
            ) : (
              <Link
                to={`mailto:${actionInfo?.email}`}
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

export default EmailPreview;
