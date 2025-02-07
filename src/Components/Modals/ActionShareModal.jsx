/* eslint-disable react/prop-types */
import { RiLinkM } from 'react-icons/ri';
import { DialogContent } from '@/Components/ui/dialog';
import { MdContentCopy } from 'react-icons/md';

import Loader from '../Loaders/Loader';

const ActionShareModal = ({ setOpen, isLoading, isFetching, qrCodeImage }) => {
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

        <div className="flex relative justify-center pt-8 flex-col items-center">
          {isLoading || isFetching ? (
            <div>
              <Loader />
            </div>
          ) : (
            <div className="w-[200px]">
              <img src={`${qrCodeImage ? qrCodeImage : ''}`} alt="" />
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
      </div>
    </DialogContent>
  );
};

export default ActionShareModal;
