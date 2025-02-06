import { IoMdMail } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

const EmailActionLivePreview = () => {
  const { action } = useParams();

  const formData = {
    name: 'nahid',
    email: 'nahid@gmail.com',
  };
  return (
    <div className="h-screen flex items-center justify-center">
      {action == 'email' && (
        <div className="w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit bg-gradient-to-l from-[#116DFF] to-[#23C0B6] py-10">
          {/* img */}
          <div>
            <div className="w-full flex items-center justify-center relative">
              <div className="size-32 z-10 relative">
                <img
                  className="h-full w-full object-cover rounded-full"
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
                {formData?.fullName ? formData?.fullName : 'Enter Your Name'}
              </h4>

              {/* logo */}
              <div className="w-full flex items-center justify-center">
                <div className="size-20">
                  <img
                    className="h-full w-full object-cover"
                    //   src={gmailBg}
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
                  <p className="text-primaryColor">Email</p>
                  <p className="text-[#555] font-medium w-full max-w-[300px]">
                    {formData?.email ? formData?.email : 'Enter Your Email'}
                  </p>
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <Link
                    to={`mailto: ${formData?.email}`}
                    className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                  >
                    <IoMdMail className="text-white size-4" />
                  </Link>
                </div>
              </div>

              <div>
                <Link
                  to={`mailto:${formData?.email}`}
                  className="bg-[#efefef] text-primaryColor w-full block text-center py-3 rounded-md font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailActionLivePreview;
