import {
  AddImagePlusSvg,
  BuildingSvg,
  CameraSvg,
  EmailSvg,
  PhoneSvg,
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
    <div className="flex items-center justify-center mx-auto max-w-[650px] pb-20">
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
            <TextField label="First Name" variant="outlined" fullWidth />
            <TextField label="Last Name" variant="outlined" fullWidth />
            <TextField label="Company Name" variant="outlined" fullWidth />
            <TextField label="Position" variant="outlined" fullWidth />
            <div className="flex items-center gap-4">
              <div className="w-[55%]">
                {/* <FormControl fullWidth>
                  <InputLabel id="month">Month</InputLabel>
                  <Select labelId="month" id="month" label="Age">
                    {months.map((monthName, index) => (
                      <MenuItem key={index} value={monthName}>
                        {monthName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
                <Select>
                  <SelectTrigger className="w-full h-14 border-black/30 text-base text-textGray">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Months</SelectLabel>
                      <SelectItem value="January">January</SelectItem>
                      <SelectItem value="February">February</SelectItem>
                      <SelectItem value="March">March</SelectItem>
                      <SelectItem value="April">April</SelectItem>
                      <SelectItem value="May">May</SelectItem>
                      <SelectItem value="June">June</SelectItem>
                      <SelectItem value="July">July</SelectItem>
                      <SelectItem value="August">August</SelectItem>
                      <SelectItem value="September">September</SelectItem>
                      <SelectItem value="October">October</SelectItem>
                      <SelectItem value="November">November</SelectItem>
                      <SelectItem value="December">December</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[15%]">
                <TextField label="Day" variant="outlined" fullWidth />
              </div>
              <div className="w-[30%]">
                <TextField label="Year" variant="outlined" fullWidth />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="flex flex-shrink-0">
            <BuildingSvg />
          </div>
          <div className="flex-1 space-y-4">
            <TextField label="Street 1" variant="outlined" fullWidth />
            <TextField label="Street 2" variant="outlined" fullWidth />
            <TextField label="Postal Code" variant="outlined" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
            <TextField label="Country" variant="outlined" fullWidth />
            <TextField
              label="Postal Code Position"
              variant="outlined"
              fullWidth
            />
            <TextField label="State" variant="outlined" fullWidth />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="flex flex-shrink-0">
            <PhoneSvg />
          </div>
          <div className="flex-1 space-y-4">
            <TextField label="Enter Your Number" variant="outlined" fullWidth />
            <TextField
              label="Enter Your Office Number"
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="flex flex-shrink-0">
            <EmailSvg />
          </div>
          <div className="flex-1 space-y-4">
            <TextField label="Enter Your Mail" variant="outlined" fullWidth />
            <TextField
              label="Enter Your Secondary Mail"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Enter Your Website Link"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Enter Your Secondary Website Link"
              variant="outlined"
              fullWidth
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactCardAction;
