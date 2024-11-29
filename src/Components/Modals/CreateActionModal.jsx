/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/Components/ui/dialog';
import ActionTab from '../Dashboard/DashboardProfile/ActionTab';

const CreateActionModal = ({ setOpen }) => {
  return (
    <DialogContent
      className={
        'max-w-5xl font-inter p-8 rounded-md  h-[80%] overflow-hidden '
      }
    >
      <DialogHeader>
        <DialogTitle>
          <p className="text-4xl text-center font-semibold text-textDark pb-8 border-gray-100 border-b-2">
            Create New Action
          </p>
        </DialogTitle>

        <div className="pt-4">
          <ActionTab setOpen={setOpen}></ActionTab>
        </div>
      </DialogHeader>
    </DialogContent>
  );
};

export default CreateActionModal;
