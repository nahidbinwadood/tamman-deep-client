/* eslint-disable react/prop-types */

import { DeleteModalSvg } from '../SvgContainer';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

const DeleteModal = ({ setOpen, onConfirm }) => {
  return (
    <DialogContent className={'max-w-lg font-inter'}>
      <DialogHeader>
        <DialogTitle> </DialogTitle>
        <DialogDescription></DialogDescription>
        <div className="w-full p-8 ">
          <div className="w-full flex items-center justify-center">
            <DeleteModalSvg />
          </div>
          <div className="mt-6 space-y-6">
            <h4 className="text-2xl text-center font-medium">
              Are you sure you want to delete this Action ?
            </h4>
            <div className="w-full flex items-center justify-end gap-4">
              <button
                onClick={() => setOpen(false)}
                className="w-32 py-2 border border-primaryColor text-primaryColor hover:bg-primaryColor rounded-md hover:text-white transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="w-32 py-2 border bg-primaryColor text-white rounded-md flex items-center justify-center"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default DeleteModal;
