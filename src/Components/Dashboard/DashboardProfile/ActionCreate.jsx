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
    <Dialog>
      <DialogTrigger>
      <CommonAction Icon={HiPlusCircle} title={'Create Action'}></CommonAction>
      </DialogTrigger>
      <DialogContent className={'max-w-5xl'}>
        <DialogHeader>
          <DialogTitle ><p className="text-3xl font-bold text-textDark pb-4 border-b-2">Create New Action</p></DialogTitle>
          <DialogDescription>
          </DialogDescription>
          <div>
            <ActionTab></ActionTab>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default ActionCreate;
