import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useState } from 'react';
import {
  RegisterFacebookSvg,
  RegisterGoogleSvg,
} from '../../Components/SvgContainer';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useAuth from '@/Hooks/useAuth';
import { BeatLoader } from 'react-spinners';
const Register = () => {
  const [show, setShow] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { loading, setLoading, guestUserCart, clearGuestUserCart } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post('api/register', data);
      return response.data;
    },
    onSuccess: (data) => {
      setLoading(false);
      console.log(data);
      if (data.status == 'success') {
        clearGuestUserCart();
        toast.success('Account Created Successfully');
        navigate('/login');
      }
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.message);
    },
  });

  const onSubmit = (data) => {
    // Send the form data to the server

    if (data.password.length < 8) {
      toast.error('Password Length Must be more than 8 characters');
    } else {
      setLoading(true);
      const updatedCart = guestUserCart?.map(({ product_id, ...rest }) => ({
        ...rest,
        card_id: product_id,
      }));

      const updatedData = {
        ...data,
        cart: updatedCart,
      };
      console.log(updatedData);
      registerMutation.mutate(data);
    }
  };
  return (
    <div className="  font-inter ">
      <div className="flex items-center justify-center h-full min-h-[calc(100vh-72px)] ">
        <div className=" bg-white/90 shadow-lg rounded-lg px-8 py-12 min-w-[320px] md:min-w-[526px]">
          <div className="pb-4 md:pb-6 lg:pb-8 w-full flex items-center justify-center -ml-9 h-28 md:h-32">
            <img className="h-full object-cover" src={logo} alt="" />
          </div>
          <div className="w-full text-center space-y-3">
            <h2 className="font-inter text-xl md:text-2xl lg:text-3xl font-bold">
              Join our platform
            </h2>
            <p className="md:text-lg text-textColor">
              Already have an account ?
              <Link to="/login" className="underline pl-1">
                Login here
              </Link>
            </p>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="space-y-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[#3D4A5C] font-medium" htmlFor="email">
                  Name
                </label>
                <input
                  {...register('name', { required: true })}
                  placeholder="Enter Name"
                  className="w-full focus:outline-none border border-black/50 px-5 py-3 rounded-md"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#3D4A5C] font-medium" htmlFor="email">
                  Email address
                </label>
                <input
                  {...register('email', { required: true })}
                  placeholder="Enter Email Address"
                  className="w-full focus:outline-none border border-black/50 px-5 py-3 rounded-md"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[#3D4A5C] font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register('password', { required: true })}
                    placeholder="Enter Password"
                    className="w-full focus:outline-none border border-black/50 px-5 py-3 rounded-md"
                    type={!show ? 'password' : 'text'}
                    name="password"
                    id="password"
                  />
                  {show ? (
                    <LuEye
                      onClick={() => setShow(!show)}
                      className="absolute top-1/2 right-3 text-[#576269] -translate-x-1/2 -translate-y-1/2 size-5 cursor-pointer"
                    />
                  ) : (
                    <LuEyeOff
                      onClick={() => setShow(!show)}
                      className="absolute top-1/2 right-3 text-[#576269] -translate-x-1/2 -translate-y-1/2 size-5 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className={`w-full bg-primaryColor px-12 font-semibold md:text-lg py-2.5 md:py-3 rounded-lg text-white  hover:text-primaryColor border border-primaryColor transition duration-300 ${
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
                    'Sign Up'
                  )}
                </button>
              </div>
              <div className=" items-center gap-2 py-2 hidden">
                <div className="w-full border-t border-[#57626933]" />
                <p className="text-[#111518] text-nowrap">Or Sign Up with</p>
                <div className="w-full border-t border-[#57626933]" />
                <div></div>
              </div>
              <div className="relative border border-b rounded-lg text-lg w-full text-center py-3  hidden">
                <button>Sign Up with Facebook</button>
                <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2">
                  <RegisterFacebookSvg />
                </div>
              </div>
              <div className="relative border border-b rounded-lg text-lg w-full text-center py-3 hidden">
                <button>Sign Up with Google</button>
                <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2">
                  <RegisterGoogleSvg />
                </div>
              </div>
              <div className="hidden">
                <p className="text-center text-lg">
                  By continuing, you agree to our{' '}
                  <Link className="text-primaryColor">T&Cs</Link> , as well as
                  our{' '}
                  <Link className="text-primaryColor underline">
                    Privacy <br /> Policy.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex w-full items-center justify-center py-6">
        <div>
          <ul className="flex items-center gap-8 text-[#212A30] font-medium">
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
