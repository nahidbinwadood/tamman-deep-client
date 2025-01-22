import {
  AddImagePlusSvg,
  BackButtonSvg,
  PhoneSvg,
  UserSvg,
} from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import profile from '@/assets/images/profile.png';
import WhatsAppPreview from '@/Components/LivePreview/WhatsAppPreview';
const WhatsAppActions = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    type: 'whats-app',
    name: '',
    image: '',
    number: '',
    status: 'inactive',
  });

  ///handle form Data:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //submit data on db:
  const emailAction = useMutation({
    mutationKey: ['action', 'whats-app'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/store', data);
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

  //functions:
  const handleSave = () => {
    setLoading(true);
   // emailAction.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    if (formData.name.length > 0 && formData.number.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [formData]);

  const [profilePhoto, setProfilePhoto] = useState('');
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
  return (
    <>
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        {/* navbar */}
        <div className="py-6 flex items-center justify-between container mx-auto ">
          <Link
            to="/dashboard/profiles"
            className="flex items-center gap-3 cursor-pointer text-[#212A30]"
          >
            <BackButtonSvg light={true} />
            <span className="text-lg font-medium text-white">
              Action Creation
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/dashboard/profiles');
                toast.success('Action Activated!');
              }}
              className="px-10 py-3 rounded-lg bg-transparent text-white border border-white font-semibold text-lg transition-all duration-500"
            >
              Assign Action
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

      {/* outlet */}
      <div className="font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)] flex gap-12 justify-center mx-auto w-full py-20">
        <div className="flex flex-col items-center h-fit w-[600px] p-8 rounded-2xl bg-white shadow-lg">
          <div>
            <div className="w-full flex items-center justify-center relative">
              <div className="size-40 z-10 relative">
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
          <div className="flex gap-4 mt-10 w-full">
            <div className="flex-shrink-0 flex">
              <UserSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField
                label="Enter Your Name"
                variant="outlined"
                fullWidth
                type='text'
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-10 w-full">
            <div className="flex-shrink-0 flex">
              <PhoneSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField
                 label="Enter Your Number"
                variant="outlined"
                fullWidth
                type='number'
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* preview */}
        <WhatsAppPreview formData={formData} />
      </div>
    </>
  );
};

export default WhatsAppActions;
