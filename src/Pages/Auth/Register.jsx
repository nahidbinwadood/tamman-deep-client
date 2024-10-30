import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-black.png';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useState } from 'react';
import {
  RegisterFacebookSvg,
  RegisterGoogleSvg,
} from '../../Components/SvgContainer';
const Register = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="  font-inter ">
      <div className="flex items-center justify-center h-full min-h-[calc(100vh-72px)] ">
        <div className="bg-white shadow-lg rounded-lg px-8 pt-4 pb-12 min-w-[525px] mt-10">
          <div className="pb-8 w-full flex items-center justify-center -ml-9">
            <img src={logo} alt="" />
          </div>
          <div className="w-full text-center space-y-3">
            <h2 className="font-inter text-3xl font-bold">Join our platform</h2>
            <p className="text-lg text-textColor">
              Already have an account?
              <Link to="/login" className="underline pl-[2px]">
                Login here
              </Link>
            </p>
          </div>
          <div className="mt-10">
            <form action="" className="space-y-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#3D4A5C] font-medium" htmlFor="email">
                  Name
                </label>
                <input
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
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <input
                    className="size-4"
                    type="checkbox"
                    name=""
                    id="remember"
                  />
                  <label
                    className="text-[#212A30] font-medium cursor-pointer"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>
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
                  className="w-full bg-primaryColor px-12 font-semibold text-lg py-3 rounded-lg text-white  hover:text-primaryColor hover:bg-transparent border border-primaryColor transition duration-300"
                >
                  Register
                </button>
              </div>
              <div className="flex items-center gap-2 py-2">
                <div className="w-full border-t border-[#57626933]" />
                <p className="text-[#111518] text-nowrap">Or Sign Up with</p>
                <div className="w-full border-t border-[#57626933]" />
                <div></div>
              </div>
              <div className="relative border border-b rounded-lg text-lg w-full text-center py-3 ">
                <button>Sign Up with Facebook</button>
                <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2">
                  <RegisterFacebookSvg />
                </div>
              </div>
              <div className="relative border border-b rounded-lg text-lg w-full text-center py-3">
                <button>Sign Up with Google</button>
                <div className="absolute top-1/2 left-8 -translate-x-1/2 -translate-y-1/2">
                  <RegisterGoogleSvg />
                </div>
              </div>
              <div>
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
