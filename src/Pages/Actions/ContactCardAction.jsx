import { AddImagePlusSvg, CameraSvg } from '@/Components/SvgContainer';
import { useState } from 'react';

const ContactCardAction = () => {
  const [coverPhoto, setCoverPhoto] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(URL.createObjectURL(file));
  };
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex items-center justify-center mx-auto max-w-[650px] f">
      <form action="" className="w-full">
        {/* image section */}
        <div>
          <div className="h-56 bg-[#D2E3FC] rounded-xl relative">
            {coverPhoto && (
              <div className="h-56 w-full absolute inset-0 top-0 left-0">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={coverPhoto}
                  alt=""
                />
              </div>
            )}
            <label
              htmlFor="uploadCoverPhoto"
              className="flex items-center gap-2 absolute bottom-5 right-5 bg-white px-5 py-2 text-sm rounded-full cursor-pointer"
            >
              <input
                onChange={handleCoverPhotoChange}
                className="hidden"
                type="file"
                name=""
                id="uploadCoverPhoto"
              />
              <CameraSvg />
              <span>Add cover photo</span>
            </label>
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className="size-40 -mt-20 z-10 relative">
              <img
                className=" h-full w-full object-cover rounded-full"
                src={
                  profilePhoto
                    ? profilePhoto
                    : 'https://i.postimg.cc/501JRsTz/profilepic.png'
                }
                alt=""
              />
              <label
                htmlFor="profilePicture"
                className="absolute bottom-5 right-0 cursor-pointer"
              >
                <input
                  onChange={handleProfilePhotoChange}
                  className="hidden"
                  type="file"
                  name="profilePicture"
                  id="profilePicture"
                />
                <div className="bg-primaryColor rounded-full size-8 flex items-center justify-center">
                  <AddImagePlusSvg />
                </div>
              </label>
            </div>
          </div>
          <div>
            <h3 className='text-xl font-medium text-center mt-3'>Profile Image</h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCardAction;
