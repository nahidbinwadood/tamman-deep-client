import {
  AddImagePlusSvg,
  BackButtonSvg,
  BuildingSvg,
  CameraSvg,
  ColorsSvg,
  EmailSvg,
  PhoneSvg,
  UserSvg,
} from '@/Components/SvgContainer';
import profile from '@/assets/images/profile.png';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ImSpinner9 } from 'react-icons/im';
import ContactPreview from '@/Components/LivePreview/ContactPreview';
import useAuth from '@/Hooks/useAuth';

const ContactCardAction = () => {
  //states:
  const { activeCard, allColors } = useAuth();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [activeBg, setActiveBg] = useState(allColors[0]);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    type: 'contact-card',
    image: '',
    cover_image: '',
    fullName: '',
    companyName: '',
    position: '',
    // month: '',
    // day: '',
    // year: '',
    address: '',
    number: '',
    officeNumber: '',
    mail: '',
    website: '',
    status: 'inactive',
    backgroundColor: activeBg,
  });

  const [coverPhoto, setCoverPhoto] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');

  const navigate = useNavigate();

  //functions:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //calendar:
  const handleMonthChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      month: value,
    }));
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setCoverPhoto(objectUrl);

      setFormData((prev) => ({
        ...prev,
        cover_image: file, // Store the file directly
      }));
    }
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setProfilePhoto(objectUrl);

      setFormData((prev) => ({
        ...prev,
        image: file, // Store the file directly
      }));
    }
  };

  console.log(formData);
  //save the data on db:
  const contactCardMutation = useMutation({
    mutationKey: ['action', 'contactCard'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/store', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status == 'success') {
        setLoading(false);
        queryClient.invalidateQueries(['allActions']);
        navigate('/dashboard/profiles');
        toast.success('Your action has been created successfully!');
      }
    },
    onError: (error) => {
      setLoading(false);
      toast.error('Failed to create action, please try again!');
      console.error(error);
    },
  });
  const handleChangeColor = (color) => {
    setActiveBg(color);
    setFormData((prev) => ({
      ...prev,
      backgroundColor: color,
    }));
  };
  const handleSave = () => {
    setLoading(true);
    const data = {
      ...formData,
      backgroundColor: activeBg,
      order_item_id: activeCard?.id,
    };
    contactCardMutation.mutate(data);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    // if (
    //   formData.firstName.length > 0 &&
    //   formData.number.length > 0 &&
    //   formData.description.length > 0
    // ) {
    //   setActive(true);
    // } else {
    //   setActive(false);
    // }
    setActive(true);
  }, [formData]);

  return (
    <>
      {/* navbar */}
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        <div className="py-6 flex items-center justify-between container mx-auto ">
          <Link
            to="/dashboard/profiles"
            className="flex items-center gap-3 cursor-pointer text-[#212A30]"
          >
            <BackButtonSvg light={true} />
            <span className="text-lg font-medium text-white">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/dashboard/profiles');
              }}
              className="px-10 py-3 rounded-lg bg-transparent text-white border border-white font-semibold text-lg transition-all duration-500"
            >
              Cancel
            </button>
            <button
              disabled={!active}
              onClick={handleSave}
              className={`px-10 py-3 h-14 w-36 flex items-center justify-center bg-white text-primaryColor border-2 border-primaryColor rounded-lg  font-semibold text-lg ${
                !active ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
              }`}
            >
              {loading ? (
                <ImSpinner9 className="animate-spin size-5" />
              ) : (
                'Save'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* action body */}
      <div className="flex gap-12 justify-center mx-auto w-full py-20">
        <form className="w-full p-8 rounded-2xl bg-white shadow-lg max-w-[650px]">
          {/* image section */}
          <div>
            <div className="h-56 bg-[#D2E3FC] rounded-xl relative">
              {coverPhoto && (
                <div className="h-56 w-full absolute inset-0 top-0 left-0">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={
                      formData?.cover_image
                        ? URL.createObjectURL(formData.cover_image)
                        : profilePhoto || profile
                    }
                    alt="Cover"
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
                  className="h-full w-full object-cover rounded-full"
                  src={
                    formData?.image
                      ? URL.createObjectURL(formData.image)
                      : profilePhoto || profile
                  }
                  alt="Profile"
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
          {/* colors */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              Colors
              <span>
                <ColorsSvg />
              </span>
            </h3>

            {/* all colors */}
            <div className="flex items-center gap-3 mt-2">
              {allColors?.map((color) => (
                <div
                  key={color}
                  onClick={() => handleChangeColor(color)}
                  style={{ backgroundColor: `${color}` }}
                  className={`size-6 hover:scale-125 transition-all duration-300 rounded-full cursor-pointer ${
                    activeBg == color ? 'scale-125 border' : 'scale-100'
                  } `}
                ></div>
              ))}
            </div>
          </div>
          {/* inputs */}
          <div className="flex gap-4 mt-10">
            <div className="flex-shrink-0 flex">
              <UserSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData?.fullName}
                onChange={handleChange}
              />
              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                name="companyName"
                value={formData?.companyName}
                onChange={handleChange}
              />
              <TextField
                label="Position"
                variant="outlined"
                fullWidth
                name="position"
                value={formData?.position}
                onChange={handleChange}
              />
              <div className="  items-center gap-4 hidden">
                <div className="w-[55%]">
                  <Select
                    onValueChange={handleMonthChange}
                    value={formData.month}
                  >
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
                  <TextField
                    label="Day"
                    variant="outlined"
                    fullWidth
                    name="day"
                    value={formData?.day}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-[30%]">
                  <TextField
                    label="Year"
                    variant="outlined"
                    fullWidth
                    name="year"
                    value={formData?.year}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-shrink-0">
              <BuildingSvg />
            </div>
            <div className="flex-1 space-y-4">
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                name="address"
                value={formData?.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-shrink-0">
              <PhoneSvg />
            </div>
            <div className="flex-1 space-y-4">
              <TextField
                label="Enter Your Office Number"
                variant="outlined"
                fullWidth
                type="number"
                name="officeNumber"
                value={formData?.officeNumber}
                onChange={handleChange}
              />
              <TextField
                label="Enter Your Number"
                variant="outlined"
                fullWidth
                type="number"
                name="number"
                value={formData?.number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-shrink-0">
              <EmailSvg />
            </div>
            <div className="flex-1 space-y-4">
              <TextField
                label="Enter Your Mail"
                variant="outlined"
                fullWidth
                name="mail"
                value={formData?.mail}
                onChange={handleChange}
              />
              <TextField
                label="Enter Your Website Link"
                variant="outlined"
                fullWidth
                name="website"
                value={formData?.website}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        {/* live preview */}

        <ContactPreview formData={formData} isEditing={true} />
      </div>
    </>
  );
};

export default ContactCardAction;
