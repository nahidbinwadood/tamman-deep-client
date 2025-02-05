/* eslint-disable react/prop-types */
import { RiLinkM, RiMessage2Line } from 'react-icons/ri';
import { DialogContent } from '@/Components/ui/dialog';
import { MdContentCopy, MdOutlineMailOutline } from 'react-icons/md';
import useAuth from '@/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import Loader from '../Loaders/Loader';

const ActionShareModal = ({ setOpen }) => {
  const { activeCard } = useAuth();
  const axiosPublic = useAxiosPublic();

  const qrCodeImage = `${import.meta.env.VITE_API_URL}/storage/${
    activeCard?.qr_code
  }`;

  const getQrImage = async () => {
    const { data } = await axiosPublic.get(`/storage/${activeCard?.qr_code}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['qrCodeImage', activeCard?.qr_code],
    queryFn: getQrImage,
    enabled: !!activeCard?.qr_code,
  });

  console.log(data);

  return (
    <DialogContent className={'max-w-2xl font-inter'}>
      <div className="w-full p-8 ">
        <div className="hidden w-full items-center gap-4">
          <div className="flex w-full items-center gap-4">
            <RiLinkM size={24} />
            <div className="w-full">
              <input
                className="px-4 w-full focus:outline-none py-3 rounded-lg border bg-backgroundLight text-textColor"
                type="text"
                placeholder="https://link.v1ce.co.uk/3oc2gs/932634GGG"
                name=""
                id=""
              />
            </div>
          </div>
          <button>
            <MdContentCopy size={22} />
          </button>
        </div>
        <div className=" pt-4 px-10 hidden">
          <div className="flex items-center gap-4">
            <div className="flex cursor-pointer flex-1 justify-center px-4 py-1.5 rounded-lg border-2 items-center gap-2">
              <button>
                <MdOutlineMailOutline size={22} />
              </button>
              <h4 className="font-medium text-textColor">
                Add to apple wallet{' '}
              </h4>
            </div>
            <div className="px-4 cursor-pointer py-1.5 rounded-lg border">
              <MdOutlineMailOutline size={22} />
            </div>
            <div className="px-4 cursor-pointer  py-1.5 rounded-lg border">
              <RiMessage2Line size={22} />
            </div>
            <div className="px-4 cursor-pointer py-1.5 rounded-lg border">
              <MdOutlineMailOutline size={22} />
            </div>
          </div>
        </div>
        <div className=" pt-4 px-10 hidden">
          <div className="flex items-center gap-4">
            <div className="flex cursor-pointer flex-1 justify-center px-4 py-1.5 rounded-lg border-2 items-center gap-2">
              <button>
                <MdOutlineMailOutline size={22} />
              </button>
              <h4 className="font-medium text-textColor">
                Add to apple wallet{' '}
              </h4>
            </div>
            <div className="px-4 cursor-pointer py-1.5 rounded-lg border">
              <MdOutlineMailOutline size={22} />
            </div>
            <div className="px-4 cursor-pointer py-1.5 rounded-lg border">
              <RiMessage2Line size={22} />
            </div>
            <div className="px-4 cursor-pointer py-1.5 rounded-lg border">
              <MdOutlineMailOutline size={22} />
            </div>
          </div>
        </div>

        <div className="flex relative justify-center pt-8 flex-col items-center">
          {isLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div className="w-[200px]">
              <img
                src={`${
                  qrCodeImage
                    ? qrCodeImage
                    : 'https://i.imghippo.com/files/Op4816nHo.png'
                }`}
                alt=""
              />
            </div>
          )}
          <div className="flex items-center gap-6 pt-6">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-primaryColor font-medium text-white"
            >
              Download
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-primaryColor font-medium text-white"
            >
              Generate
            </button>
          </div>

          <h4 className=" px-4 font-medium text-primaryColor py-2 absolute top-10 left-20  rounded-md bg-backgroundLight">
            Pro
          </h4>
        </div>
      </div>
    </DialogContent>
  );
};

export default ActionShareModal;
