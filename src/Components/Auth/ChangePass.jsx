/* eslint-disable react/prop-types */
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

import { useState } from 'react';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const ChangePass = ({ info }) => {
  const [show, SetShow] = useState(false);
  const [showAgain, SetShowAgain] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //mutation:
  const axiosPublic = useAxiosPublic();

  const changePassMutation = useMutation({
    mutationFn: async (data) => {
      console.log(data);
      const response = await axiosPublic.post('/api/password/update', data);
      return response.data;
    },
    onSuccess: (data) => {
      setLoading(false);
      if (data?.status) {
        console.log(data);
        navigate('/login');
        toast.success(data?.message);
      }
    },
    onError: (error) => {
      setLoading(false);
      console.log(error);
      toast.error(
        error.response?.data?.message || 'You used Old Password ! Try again'
      );
    },
  });

  // function:
  const onSubmit = (data) => {
    setLoading(true);
    if (data) {
      if (data.newPassword == data.confirmPassword) {
        const updatedInfo = {
          ...info,
          new_password: data?.new_password,
          new_password_confirmation: data?.new_password_confirmation,
        };
        changePassMutation.mutate(updatedInfo);
      } else {
        toast.error('Passwords do not match!');
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full flex h-screen font-inter">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center mt-10">
            <h3 className="font-semibold text-2xl">Change Password</h3>
          </div>
          <div className="flex items-center justify-center mt-3 w-2/3 mx-auto text-textLight text-center">
            <p className="flex gap-2 items-center py-2">
              Must be 6-20 characters (letters, numbers or symbols)
            </p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              <div className="w-full relative">
                <input
                  {...register('new_password', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-md"
                  placeholder="New Password"
                  type={show ? 'text' : 'password'}
                  id="new_password"
                />
                <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10">
                  {show ? (
                    <FaRegEye
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  )}
                </div>
              </div>
              <div className="w-full relative">
                <input
                  {...register('new_password_confirmation', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-md"
                  placeholder="Confirm Password"
                  type={showAgain ? 'text' : 'password'}
                  id="new_password_confirmation"
                />
                <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10">
                  {showAgain ? (
                    <FaRegEye
                      onClick={() => SetShowAgain(!showAgain)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => SetShowAgain(!showAgain)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  )}
                </div>
              </div>

              {/* button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`w-full bg-primaryColor px-12 font-semibold text-lg py-3 rounded-lg text-white  hover:text-primaryColor  border border-primaryColor transition duration-300  ${
                    loading ? 'hover:bg-primaryColor' : 'hover:bg-transparent'
                  }`}
                >
                  {loading ? (
                    <BeatLoader
                      color={'#ffffff'}
                      loading={loading}
                      size={8}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
