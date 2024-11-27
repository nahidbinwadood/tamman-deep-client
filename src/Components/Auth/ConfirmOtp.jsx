/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import { useMutation } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';

const ConfirmOtp = ({ email, setResetPass, setInfo }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const confirmOtpMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/verify/otp', data);
      return response.data;
    },
    onSuccess: (data) => {
      setLoading(false);
      if (data?.status) {
        console.log(data);
        setResetPass(true);
        toast.success(data?.message);
      }
    },
    onError: (error) => {
      setLoading(false);
      console.log(error);
      toast.error(error.response?.data?.message || 'Invalid Otp !');
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    const info = {
      email,
      otp: data?.otp,
    };
    setInfo(info);

    confirmOtpMutation.mutate(info);
  };
  return (
    <div className="w-full flex h-screen font-inter">
      <div className="w-full   h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center mt-10">
            <h3 className="font-semibold text-2xl">Email Verification Code</h3>
          </div>
          <div className="flex items-center justify-center mt-6 text-textLight text-center w-1/2 mx-auto">
            <p>Enter the OTP code we emailed to your mail</p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              <div>
                <input
                  {...register('otp', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-lg"
                  placeholder="Enter Your OTP"
                  type="text"
                />
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

export default ConfirmOtp;
