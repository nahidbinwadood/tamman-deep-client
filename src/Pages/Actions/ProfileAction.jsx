import {
  AddImagePlusSvg,
  AlignContentSvg,
  UserSvg,
} from '@/Components/SvgContainer';
import { TextField } from '@mui/material';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
const ProfileAction = () => {
  const [profilePhoto, setProfilePhoto] = useState('');

  //functions:
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex items-center justify-center">
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
              <TextField
                label="Name"
                variant="outlined" // You can also use "filled" or "standard"
                fullWidth
              />
              <TextField
                label="Title"
                variant="outlined" // You can also use "filled" or "standard"
                fullWidth
              />
              <TextField
                label="About"
                variant="outlined" // You can also use "filled" or "standard"
                fullWidth
              />
              <TextField
                label="Location"
                variant="outlined" // You can also use "filled" or "standard"
                fullWidth
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-shrink-0 ">
              <AlignContentSvg />
            </div>
            <div className="flex-1 space-y-5">
              <Select>
                <SelectTrigger className="w-full h-14 border-black/30 text-base text-textGray">
                  <SelectValue placeholder="Text Align" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Text Align</SelectLabel>
                    <SelectItem value="Left">Left</SelectItem>
                    <SelectItem value="Center">Center</SelectItem>
                    <SelectItem value="Right">Right</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full h-14 border-black/30 text-base text-textGray">
                  <SelectValue placeholder="Page Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Page Direction</SelectLabel>
                    <SelectItem value="LTR">LTR</SelectItem>
                    <SelectItem value="RTL">RTL</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center mx-auto min-w-[450px] py-10 rounded-[24px] bg-gradient-to-l from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]">
        <div className="pt-10">
          <h4 className="text-xl font-semibold">Live Preview</h4>
        </div>
        <div>
          <div className="size-40 mx-auto">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.postimg.cc/FRMZdVGP/sample-Image.png"
              alt=""
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-semibold text-2xl">John Doea</h3>
            <p className="mt-3 text-textGray w-4/5 mx-auto">
              Hey I am a product designer at toto company. Where I make things
              happen
            </p>
            <p className="mt-3 font-medium">New Jersy, Wakanda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAction;
