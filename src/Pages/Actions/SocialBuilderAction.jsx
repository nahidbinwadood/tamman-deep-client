import { AddImagePlusSvg, ShareSvg, UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';
import { useState } from 'react';

const SocialBuilderAction = () => {
  const [profilePhoto, setProfilePhoto] = useState('');

  //functions:
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex items-center justify-center mx-auto max-w-[650px] pb-20">
      <form action="" className="w-full">
        {/* image section */}
        <div>
          <div className="w-full flex items-center justify-center relative">
            <div className="size-40 z-10 relative">
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
            <h3 className="text-xl font-medium text-center mt-3">
              Profile Image
            </h3>
          </div>
        </div>

        {/* inputs */}
        <div className="flex gap-4 mt-10">
          <div className="flex-shrink-0 flex">
            <UserSvg />
          </div>
          <div className="flex-1 space-y-5">
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Title" variant="outlined" fullWidth />
            <TextField label="About" variant="outlined" fullWidth />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="flex flex-shrink-0 ">
            <ShareSvg />
          </div>
          <div className="flex-1 space-y-5">
            <TextField label="Social Link - 01" variant="outlined" fullWidth />
            <TextField label="Social Link - 02" variant="outlined" fullWidth />
            <TextField label="Social Link - 03" variant="outlined" fullWidth />
            <TextField label="Social Link - 04" variant="outlined" fullWidth />
            <TextField label="Social Link - 05" variant="outlined" fullWidth />
            <TextField label="Social Link - 06" variant="outlined" fullWidth />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialBuilderAction;
