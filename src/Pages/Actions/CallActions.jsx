import CallPreview from '@/Components/LivePreview/CallPreview';
import {
  AddImagePlusSvg,
  BackButtonSvg,
  ColorsSvg,
  PhoneSvg,
  UserSvg,
} from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import profile from '@/assets/images/profile.png';
import useAuth from '@/Hooks/useAuth';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CallActions = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const { activeCard, allColors } = useAuth();
  const prevData = useLocation()?.state?.actionData;
  const prevDataId = useLocation()?.state?.actionId;
  const [activeBg, setActiveBg] = useState(
    prevData ? prevData?.backgroundColor : allColors[0]
  );
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    type: 'call',
    name: '',
    number: '',
    backgroundColor: activeBg,
  });

  //mutation function:
  const callMutation = useMutation({
    mutationKey: ['action', 'call'],
    mutationFn: async (info) => {
      const { data } = await axiosPublic.post('/api/action/store', info, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    onSuccess: (data) => {
      try {
        if (data.status == 'success') {
          setLoading(false);
          queryClient.invalidateQueries(['allActions']);
          toast.success('Your action has been created successfully!');
          navigate('/dashboard/profiles');
        }
      } catch (err) {
        toast.error(err.message);
      }
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.message);
    },
  });

  const callActionUpdate = useMutation({
    mutationKey: ['action', 'email'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/update', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data.status == 'success') {
        setLoading(false);
        queryClient.invalidateQueries(['allActions']);
        navigate('/dashboard/profiles');
        toast.success('Your action has been updated successfully!');
      }
    },
    onError: (error) => {
      setLoading(false);
      toast.error('Failed to create action, please try again!');
      console.error(error);
    },
  });

  //functions:
  const getImageSource = () => {
    // For new image uploads (File object)
    if (formData.image instanceof File) {
      return URL.createObjectURL(formData.image);
    }

    // If we have previous data and no new image
    if (prevData?.image && !(formData.image instanceof File)) {
      return `${import.meta.env.VITE_API_URL}/storage/app/public/${prevData.image}`;
    }

    // If formData has a string image URL
    if (typeof formData.image === 'string' && formData.image) {
      if (
        formData.image.startsWith('http') ||
        formData.image.startsWith('blob:')
      ) {
        return formData.image;
      }
      return `${import.meta.env.VITE_API_URL}/storage/app/public/${formData.image}`;
    }

    // Default fallback
    return profile; // Use your imported profile image
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleChangeColor = (color) => {
    setActiveBg(color);
    setFormData((prev) => ({
      ...prev,
      backgroundColor: color,
    }));
  };
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const handleSave = () => {
    setLoading(true);
    const data = {
      ...formData,
      backgroundColor: activeBg,
      order_item_id: activeCard?.id,
    };

    const newData = {
      ...formData,
      action_id: prevDataId,
      order_item_id: activeCard?.id,
      backgroundColor: activeBg,
    };

    if (prevData) {
      callActionUpdate.mutate(newData);
    } else {
      callMutation.mutate(data);
    }
  };

  //useEffect:
  useEffect(() => {
    if (
      formData.name.length > 0 &&
      formData.number.length > 0 &&
      formData?.image
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [formData]);

  useEffect(() => {
    if (prevData) {
      setFormData({
        type: 'call',
        name: prevData?.name || '',
        image: prevData?.image || '',
        number: prevData?.number || '',
        status: prevData?.status || 'inactive',
        backgroundColor: prevData?.backgroundColor || allColors[0],
      });
    }
  }, [allColors, prevData]);

  useEffect(() => {
    // Cleanup function to revoke object URLs
    return () => {
      if (formData.image instanceof File) {
        const imageUrl = URL.createObjectURL(formData.image);
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [formData.image]);

  return (
    <>
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        {/* navbar */}
        <div className="py-4 md:py-5 xl:py-6 flex items-center justify-between container mx-auto px-5 md:px-8 2xl:px-0">
          <Link
            to="/dashboard/profiles"
            className="flex items-center gap-3 cursor-pointer text-[#212A30]"
          >
            <BackButtonSvg light={true} />
            <span className="md:text-lg font-medium text-white">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/dashboard/profiles');
              }}
              className="px-10 py-3 rounded-lg bg-transparent text-white border border-white font-semibold text-lg transition-all duration-500 hidden md:block"
            >
              Cancel
            </button>
            <button
              disabled={!active}
              onClick={handleSave}
              className={`px-10 py-3 h-14 w-28 md:w-32 lg:w-36 flex items-center justify-center bg-white text-primaryColor border-2 border-primaryColor rounded-lg  font-semibold md:text-lg ${
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
      <div className="font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)] flex gap-8 md:gap-10 xl:gap-12 md:justify-center mx-auto w-full py-8 md:py-12 lg:py-16 2xl:py-20 flex-col md:flex-row px-5 md:px-8">
        <div className="flex flex-col h-fit md:w-[600px] p-6 md:p-7 lg:p-8 rounded-2xl bg-white shadow-lg">
          <div>
            <div className="w-full flex items-center justify-center relative">
              <div className="size-24 md:size-28 lg:size-40 z-10 relative">
                <LazyLoadImage
                  effect="blur"
                  className="size-24 md:size-28 lg:size-40 object-cover rounded-full"
                  src={getImageSource()}
                  alt=""
                />

                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-2 md:bottom-5 right-0 cursor-pointer"
                >
                  <input
                    onChange={handleProfilePhotoChange}
                    className="hidden"
                    type="file"
                    name="profilePicture"
                    id="profilePicture"
                  />
                  <div className="bg-primaryColor rounded-full size-6 md:size-7 lg:size-8 flex items-center justify-center">
                    <AddImagePlusSvg />
                  </div>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-center mt-3">
                Profile Image
              </h3>
            </div>
          </div>
          <div className="flex gap-4 mt-5 md:mt-7 lg:mt-8 xl:mt-10 w-full">
            <div className="flex-shrink-0 flex">
              <UserSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField
                label="Enter Your Name"
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-5 md:mt-7 lg:mt-8 xl:mt-10 w-full">
            <div className="flex-shrink-0 flex">
              <PhoneSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField
                name="number"
                onChange={handleChange}
                value={formData.number || ''}
                label="Number"
                type="number"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>

          {/* colors */}
          <div className="mt-5 md:mt-7 lg:mt-8 xl:mt-10">
            <h3 className="md:text-lg font-semibold flex items-center gap-2">
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
                  className={`size-5 md:size-6 hover:scale-125 transition-all duration-300 rounded-full cursor-pointer ${
                    activeBg == color ? 'scale-125 border' : 'scale-100'
                  } `}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* preview */}
        <CallPreview formData={formData} isEditing={true} />
      </div>
    </>
  );
};

export default CallActions;
