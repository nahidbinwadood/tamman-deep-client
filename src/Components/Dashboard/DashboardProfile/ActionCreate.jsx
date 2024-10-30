import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import { HiPlusCircle } from 'react-icons/hi2';
import ActionTab from './ActionTab';
import CommonAction from './CommonAction';

function ActionCreate() {
  return (
    <Dialog className={''}>
      <DialogTrigger>
      <CommonAction isCreateAction={true} Icon={HiPlusCircle} title={'Create Action'}></CommonAction>
      </DialogTrigger>
      <DialogContent className={'max-w-5xl font-inter p-8 rounded-md  h-[80%] overflow-hidden '}>
        <DialogHeader>
          <DialogTitle>
            <p className="text-4xl text-center font-semibold text-textDark pb-8 border-gray-100 border-b-2">
              Create New Action
            </p>
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="pt-4">
            <ActionTab></ActionTab>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ActionCreate;
