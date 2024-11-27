/* eslint-disable react/prop-types */
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';

const VerifyEmail = ({ loading, setLoading, setEmail, setProceed }) => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const forgotPassMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/forget/password', data);
      return response.data;
    },
    onSuccess: (data) => {
      setLoading(false);
      if (data?.status) {
        console.log(data);
        setProceed(true);
        toast.success(data?.message);
      }
    },
    onError: (error) => {
      setLoading(false);
      console.log(error);
      toast.error(
        error.response?.data?.message || 'Your email is not registered !'
      );
    },
  });

  const onSubmit = (data) => {
    setLoading(true);
    setEmail(data.email);
    forgotPassMutation.mutate(data);
  };
  return (
    <div className="w-full flex h-screen font-inter">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center mt-10 ">
            <h3 className="font-semibold text-2xl">Reset Your Password</h3>
          </div>
          <div className="flex items-center justify-center mt-5">
            <p className="flex gap-2 items-center py-2 w-2/3 mx-auto text-center text-textLight">
              Enter your email or phone number to get back into your account
            </p>
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
                  {...register('email', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-lg"
                  placeholder="Enter Your Email"
                  type="email"
                  id=""
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
                    'Continue'
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

export default VerifyEmail;
