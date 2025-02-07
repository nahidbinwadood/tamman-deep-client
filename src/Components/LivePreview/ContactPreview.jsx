/* eslint-disable react/prop-types */
import { FaEarthAfrica, FaMessage } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IoCall, IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import profileImg from '@/assets/images/profile.png';
import coverImg from '@/assets/images/cover-bg.webp';
const ContactPreview = ({ formData, isEditing, actionInfo }) => {
  const handleSaveContact = () => {
    // Create a more detailed vCard format string
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${actionInfo.fullName}`,
      `N:${actionInfo.fullName.split(' ').slice(-1)[0]};${actionInfo.fullName
        .split(' ')
        .slice(0, -1)
        .join(' ')};;;`,
      `ORG:${actionInfo.companyName}`,
      `TITLE:${actionInfo.position}`,
      `TEL;type=WORK:${actionInfo.officeNumber}`,
      `TEL;type=CELL:${actionInfo.number}`,
      `EMAIL;type=WORK:${actionInfo.mail}`,
      `ADR;type=WORK:;;${actionInfo.address};;;;`,
      `URL:${actionInfo.website}`,
      'END:VCARD',
    ].join('\r\n');

    // Create blob with correct MIME type and encoding
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices, try to use the native sharing functionality
      if (navigator.share) {
        const file = new File([blob], `${actionInfo.fullName}.vcf`, {
          type: 'text/vcard',
        });
        navigator
          .share({
            files: [file],
            title: `Contact: ${actionInfo.fullName}`,
          })
          .catch(() => {
            // Fallback to direct download if sharing fails
            window.location.href = url;
          });
      } else {
        // Fallback for mobile browsers that don't support sharing
        window.location.href = url;
      }
    } else {
      // For desktop, use traditional download approach
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${actionInfo.fullName}.vcf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Cleanup
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div
      style={{
        backgroundColor: `${
          actionInfo ? actionInfo?.backgroundColor : formData?.backgroundColor
        }`,
      }}
      className="min-w-[350px] max-w-[450px] font-inter rounded-xl overflow-hidden shadow-xl h-fit my-10"
    >
      {/* img */}
      <div>
        <div className="h-48 bg-[#D2E3FC] rounded-xl relative">
          <div className="h-48 w-full absolute inset-0 top-0 left-0">
            <img
              className="w-full h-full object-cover rounded-t-xl"
              src={
                actionInfo
                  ? `${import.meta.env.VITE_API_URL}/storage/${
                      actionInfo?.cover_image
                    }`
                  : formData?.cover_image
                  ? URL.createObjectURL(formData.cover_image)
                  : coverImg
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
                actionInfo
                  ? `${import.meta.env.VITE_API_URL}/storage/${
                      actionInfo?.image
                    }`
                  : formData?.image
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
            {actionInfo
              ? actionInfo?.fullName
              : formData?.fullName
              ? formData?.fullName
              : 'Enter Your Name'}
          </h4>

          {/* position */}
          <div className="w-full flex items-center justify-center gap-2 text-[#fff]">
            <p>
              {actionInfo
                ? actionInfo?.companyName
                : formData?.companyName
                ? formData?.companyName
                : 'Company Name'}
            </p>
            <p>|</p>
            <p>
              {actionInfo
                ? actionInfo?.position
                : formData?.position
                ? formData?.position
                : 'Position'}
            </p>
          </div>

          {/* address */}
          <div className="w-full flex items-center justify-center gap-2 py-2">
            <IoLocationSharp className="size-6 text-primaryColor" />
            <p className="text-[#fff]">
              {actionInfo
                ? actionInfo?.address
                : formData?.address
                ? formData?.address
                : 'Enter Your Address'}
            </p>
          </div>
        </div>

        {/* actions */}
        <div className="w-full flex items-center justify-center gap-5">
          {isEditing ? (
            <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md">
              <IoCall className="text-white size-5" />
            </button>
          ) : (
            <Link
              to={`tel: ${
                actionInfo?.officeNumber
                  ? actionInfo?.officeNumber
                  : formData?.officeNumber
              }`}
              className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
            >
              <IoCall className="text-white size-5" />
            </Link>
          )}
          {isEditing ? (
            <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md">
              <FaMessage className="text-white size-5" />
            </button>
          ) : (
            <Link
              to={`sms:${
                actionInfo?.officeNumber
                  ? actionInfo?.officeNumber
                  : formData?.officeNumber
              }?body=Hello, I would like to inquire about...`}
              className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
            >
              <FaMessage className="text-white size-5" />
            </Link>
          )}
          {isEditing ? (
            <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md">
              <IoMdMail className="text-white size-5" />
            </button>
          ) : (
            <Link
              to={`mailto: ${
                actionInfo?.mail ? actionInfo?.mail : formData?.mail
              }`}
              className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] px-6 py-3 rounded-md"
            >
              <IoMdMail className="text-white size-5" />
            </Link>
          )}
        </div>

        {/* contact */}
        <div className="space-y-4">
          {/* office */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Office</p>
              <p className="text-[#555] font-medium">
                {actionInfo
                  ? actionInfo?.officeNumber
                  : formData?.officeNumber
                  ? formData?.officeNumber
                  : 'Enter Office Number'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <IoCall className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`tel: ${
                    actionInfo?.officeNumber
                      ? actionInfo?.officeNumber
                      : formData?.officeNumber
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <IoCall className="text-white size-4" />
                </Link>
              )}
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <FaMessage className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`sms: ${
                    actionInfo?.officeNumber
                      ? actionInfo?.officeNumber
                      : formData?.officeNumber
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <FaMessage className="text-white size-4" />
                </Link>
              )}
            </div>
          </div>

          {/* personal */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Personal</p>
              <p className="text-[#555] font-medium">
                {actionInfo
                  ? actionInfo?.number
                  : formData?.number
                  ? formData?.number
                  : 'Enter Your Number'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <IoCall className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`tel: ${
                    actionInfo?.number ? actionInfo?.number : formData?.number
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <IoCall className="text-white size-4" />
                </Link>
              )}
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <FaMessage className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`sms: ${
                    actionInfo?.number ? actionInfo?.number : formData?.number
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <FaMessage className="text-white size-4" />
                </Link>
              )}
            </div>
          </div>

          {/* email */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Email</p>
              <p className="text-[#555] font-medium">
                {actionInfo
                  ? actionInfo?.mail
                  : formData?.mail
                  ? formData?.mail
                  : 'Enter Your Email'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <IoMdMail className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`mailto: ${
                    actionInfo?.mail ? actionInfo?.mail : formData?.mail
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <IoMdMail className="text-white size-4" />
                </Link>
              )}
            </div>
          </div>

          {/* website */}
          <div className="bg-[#efefef] p-5 rounded-md w-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-primaryColor">Website</p>
              <p className="text-[#555] font-medium">
                {actionInfo
                  ? actionInfo?.website
                  : formData?.website
                  ? formData?.website
                  : 'Enter Your Website'}
              </p>
            </div>
            <div className="flex items-center gap-4 justify-center">
              {isEditing ? (
                <button className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md">
                  <FaEarthAfrica className="text-white size-4" />
                </button>
              ) : (
                <Link
                  to={`${
                    actionInfo?.website
                      ? actionInfo?.website
                      : formData?.website
                  }`}
                  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] size-8 flex items-center justify-center rounded-md"
                >
                  <FaEarthAfrica className="text-white size-4" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* save button */}

        <div>
        <button
  onClick={() => {
    if (typeof isEditing === "undefined") {
      handleSaveContact();
    }
  }}
  className="bg-gradient-to-l from-[#116DFF] to-[#23C0B6] w-full block text-white text-center py-3 rounded-md font-medium"
>
  Add to Contact
</button>

        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
