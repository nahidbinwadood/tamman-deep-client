import { ShareSvg, UploadGallerySvg, UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { BackButtonSvg } from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
const LinkTreeActions = () => {
  // states:
  const [profilePhoto, setProfilePhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'link-tree',
    actionName: '',
    image: '',
    label: '',
    url: '',
    status: 'inactive',
  });

  //save data on db:
  const linkTreeMutation = useMutation({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log(formData);
    setLoading(true);
    linkTreeMutation.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    if (formData.actionName.length > 0) {
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
          <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
            <div className="flex gap-4 mt-10 w-full">
              <div className="flex-shrink-0 flex">
                <UserSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Action Name"
                  variant="outlined"
                  fullWidth
                  name="actionName"
                  value={formData?.actionName}
                  onChange={handleChange}
                />
                <div className="rounded-lg border border-borderColor p-4 relative">
                  {profilePhoto && (
                    <div className="w-full h-full absolute top-0 left-0">
                      <img
                        className="h-full w-full object-cover rounded-full"
                        src={
                          formData?.image
                            ? URL.createObjectURL(formData.image)
                            : profilePhoto
                        }
                        alt="Profile"
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
                <TextField
                  label="Edit Label"
                  variant="outlined"
                  fullWidth
                  name="label"
                  value={formData?.label}
                  onChange={handleChange}
                />
                <TextField
                  label="Url Link"
                  variant="outlined"
                  fullWidth
                  name="url"
                  value={formData?.url}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTreeActions;
