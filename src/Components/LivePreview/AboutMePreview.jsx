/* eslint-disable react/prop-types */

import profileImg from '@/assets/images/profile.png';

const AboutMePreview = ({ formData }) => {
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
        </div>

        {/* contact */}
        <div className="space-y-4">
          {/* email */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2 overflow-hidden w-full">
              <p className="text-primaryColor"> Description:</p>
              <textarea
                name=""
                id=""
                readOnly
                placeholder="Enter your description"
                rows={10}
                value={formData?.description && formData?.description}
                className="text-[#555] focus:outline-none font-medium w-full bg-transparent resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePreview;
