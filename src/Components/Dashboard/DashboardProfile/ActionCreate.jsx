import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommonAction from "./CommonAction";
import {  HiPlusCircle } from "react-icons/hi2";
import ActionTab from "./ActionTab";


function ActionCreate() {
  return (
    <Dialog className={''}>
      <DialogTrigger>
      <CommonAction Icon={HiPlusCircle} title={'Create Action'}></CommonAction>
      </DialogTrigger>
      <DialogContent className={'max-w-5xl p-8 rounded-md  h-[80%] overflow-hidden '}>
        <DialogHeader>
          <DialogTitle ><p className="text-3xl font-bold text-textDark pb-8 border-gray-100 border-b-2">Create New Action</p></DialogTitle>
          <DialogDescription>
          </DialogDescription>
          <div className="pt-4">
            <ActionTab></ActionTab>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ActionCreate;
