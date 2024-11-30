import {
  AddImagePlusSvg,
  ShareSvg,
  UserSvg,
  BackButtonSvg,
} from '@/Components/SvgContainer';
import { useEffect, useState } from 'react';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import profile from '@/assets/images/profile.png';

const SocialBuilderAction = () => {
  //states:
  const [profilePhoto, setProfilePhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'social-builder',
    image: '',
    name: '',
    title: '',
    about: '',
    socialLink1: '',
    socialLink2: '',
    socialLink3: '',
    socialLink4: '',
    socialLink5: '',
    socialLink6: '',
    status: 'inactive',
  });

  //save data on db:
  const socialBuilderMutation = useMutation({
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

  //functions:

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
  //functions:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(formData);
    setLoading(true);
    socialBuilderMutation.mutate(formData);
    // navigate to profile page
  };

  useEffect(() => {
    if (formData.name.length > 0 && formData.title.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
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
      <div className="pt-8 pb-8 font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mx-auto max-w-[650px] pb-20">
            <form
              action=""
              className="w-full p-8 rounded-2xl bg-white shadow-lg"
            >
              {/* image section */}
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

              {/* inputs */}
              <div className="flex gap-4 mt-10">
                <div className="flex-shrink-0 flex">
                  <UserSvg />
                </div>
                <div className="flex-1 space-y-5">
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    name="name"
                    value={formData?.name}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    name="title"
                    value={formData?.title}
                    onChange={handleChange}
                  />
                  <TextField
                    label="About"
                    variant="outlined"
                    fullWidth
                    name="about"
                    value={formData?.about}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-5">
                <div className="flex flex-shrink-0 ">
                  <ShareSvg />
                </div>
                <div className="flex-1 space-y-5">
                  <TextField
                    label="Social Link - 01"
                    variant="outlined"
                    fullWidth
                    name="socialLink1"
                    value={formData?.socialLink1}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Social Link - 02"
                    variant="outlined"
                    fullWidth
                    name="socialLink2"
                    value={formData?.socialLink2}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Social Link - 03"
                    variant="outlined"
                    fullWidth
                    name="socialLink3"
                    value={formData?.socialLink3}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Social Link - 04"
                    variant="outlined"
                    fullWidth
                    name="socialLink4"
                    value={formData?.socialLink4}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Social Link - 05"
                    variant="outlined"
                    fullWidth
                    name="socialLink5"
                    value={formData?.socialLink5}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Social Link - 06"
                    variant="outlined"
                    fullWidth
                    name="socialLink6"
                    value={formData?.socialLink6}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialBuilderAction;
