/* eslint-disable react/prop-types */
import { DialogContent, DialogTitle } from '@/Components/ui/dialog';
import { MdContentCopy } from 'react-icons/md';
import { RiLinkM } from 'react-icons/ri';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from '../Loaders/Loader';
import useAuth from '@/Hooks/useAuth';
import { Link } from 'react-router-dom';

const ActionShareModal = ({ setOpen, isLoading, isFetching, qrCodeImage }) => {
  const { activeCard } = useAuth();
  console.log(activeCard);
  // console.log(qrCodeImage);
  return (
    <DialogContent className={'max-w-2xl font-inter'}>
      <DialogTitle>
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

          <div className="flex relative justify-center pt-8 flex-col items-center">
            {isLoading || isFetching ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div className="w-[200px]">
                <LazyLoadImage
                  effect="blur"
                  src={`${qrCodeImage ? qrCodeImage : ''}`}
                  alt=""
                />
              </div>
            )}
            <div className="  items-center gap-6 pt-6 hidden">
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

          {/* link */}

          <div className="mt-5 w-full flex items-center justify-center">
            <Link
              target="_blank"
              className="text-primaryColor"
              to={`${`https://onetapcard.uk`}/${activeCard?.unique_code}`}
            >
              Live Link
            </Link>
          </div>
        </div>
      </DialogTitle>
    </DialogContent>
  );
};

export default ActionShareModal;
