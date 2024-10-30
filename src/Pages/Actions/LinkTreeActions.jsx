import { ShareSvg, UploadGallerySvg, UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';
import { useState } from 'react';

const LinkTreeActions = () => {
  const [profilePhoto, setProfilePhoto] = useState('');
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Linktree" variant="outlined" fullWidth />
          <div className="rounded-lg border border-borderColor p-4 relative">
            {profilePhoto && (
              <div className="w-full h-full absolute top-0 left-0">
                <img
                  className="w-full h-full object-cover"
                  src={profilePhoto}
                  alt=""
                />
              </div>
            )}
            <label
              htmlFor="upload"
              className="w-full flex flex-col gap-3 items-center justify-center cursor-pointer"
            >
              <div className="p-2 bg-primaryColor rounded-full">
                <UploadGallerySvg />
              </div>
              <p className="text-sm font-medium text-[#8897AE]">Upload</p>

              <input
                onChange={handleProfilePhotoChange}
                className="hidden"
                type="file"
                name=""
                id="upload"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <ShareSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Edit Label" variant="outlined" fullWidth />
          <TextField label="Url Link" variant="outlined" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default LinkTreeActions;
