import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const Login = () => {
  const { setUser, loading, setLoading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/login', data);
      return response.data;
    },
    onSuccess: async (data) => {
      console.log(data.user);
      if (data.status === 'success') {
        setUser(data?.user);
        localStorage.setItem('token', data?.token);
        navigate('/dashboard/home');
      }
      toast.success('Login successful');
      setLoading(false);
    },
    onError: (error) => {
      console.log('login failed', error);
      setLoading(false);
    },
  });

  //send the login post request:
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    const info = {
      email: 'mdrobin@gmail.com',
      password: '12345678',
    };
    mutation.mutate(info);
  };

  return (
    <div className="  font-inter ">
      <div className="flex items-center justify-center h-full min-h-[calc(100vh-72px)]">
        <div className="bg-white/90 shadow-lg rounded-lg px-8 py-12 min-w-[526px]">
          <div className="pb-8 w-full flex items-center justify-center -ml-9">
            <img src={logo} alt="" />
          </div>
          <div className="w-full text-center space-y-3">
            <h2 className="font-inter text-3xl font-bold">
              Log in to your One Tap account
            </h2>
            <p className="text-lg text-textColor">
              Haven’t Signed Up yet?{' '}
              <Link to="/register" className="underline pl-[2px]">
                Sign Up here
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="space-y-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[#3D4A5C] font-medium" htmlFor="email">
                  Email address
                </label>
                <input
                  {...register('email', { required: true })}
                  placeholder="Enter Email"
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
              <div className="flex items-center justify-end">
                <div>
                  <Link
                    className="text-primaryColor font-medium"
                    to="/forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="pt-3">
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
                    'Log in'
                  )}
                </button>
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

export default Login;
