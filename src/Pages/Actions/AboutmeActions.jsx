import { AddImagePlusSvg, UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';
import { useState } from 'react';

const AboutmeActions = () => {
  const [profilePhoto, setProfilePhoto] = useState('');

  //functions:
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
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
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Enter Your Name" variant="outlined" fullWidth />
          <TextField
            multiline
            rows={8}
            label="Description"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default AboutmeActions;
