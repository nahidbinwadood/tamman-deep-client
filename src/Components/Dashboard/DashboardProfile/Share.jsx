import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommonAction from "./CommonAction";
import { RiLinkM, RiMessage2Line, RiShareForwardLine } from "react-icons/ri";
import { MdContentCopy, MdOutlineMailOutline } from "react-icons/md";

function Share() {
  return (
    <Dialog>
      <DialogTrigger>
        <CommonAction Icon={RiShareForwardLine} title={"Share"}></CommonAction>
      </DialogTrigger>
      <DialogContent className={"max-w-2xl"}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full p-8 ">
          <div className="flex w-full items-center gap-4">
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

          <div className=" pt-4 px-10">
            <div className="flex items-center gap-4">
              <div className="flex cursor-pointer flex-1 justify-center px-4 py-1.5 rounded-lg border-2 items-center gap-2">
                <button>
                  <MdOutlineMailOutline size={22} />
                </button>
                <h4 className="font-medium text-textColor">
                  Add to apple wallet{" "}
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
          <div className=" pt-4 px-10">
            <div className="flex items-center gap-4">
              <div className="flex cursor-pointer flex-1 justify-center px-4 py-1.5 rounded-lg border-2 items-center gap-2">
                <button>
                  <MdOutlineMailOutline size={22} />
                </button>
                <h4 className="font-medium text-textColor">
                  Add to apple wallet{" "}
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
            <div className="w-[200px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/26d4/3d7e/30a0d619211f1d0972de049527a3465e?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IbPtAdkDmvNv7YiMbWisraTJ-Rtj5xt8LEnb2h5LEUVuoR2X--ECnvigS6cZr05HvCYhDTNtGHgg--7Yej2wU6LIgIcNYiR1ZzJO2SWHUlAtqzGmB~kMqEVFQtBLlO~8rvoo8dikSwK13ZavdRcZlbZcDY0y97sUwFSuZbLamtj7~eOOG6fMpVsGIrfPHFGomvK0Yb7YsV7Dzs48J3dhUzQpLG~ZS~Sz~YqWrB5OvFQe8PV0~wIuFKcQpeRCHX4WyfFhKkx~lwM8p2EOcVdr07pzmCVk2MH-4xgNBoAjMgiVMQypBeTTPWfyv0gvbmJbu2xWrEmo1cDHsW6scLOVNA__"
                alt=""
              />
            </div>
            <div className="flex items-center gap-6 pt-6">
              <button className="px-4 py-2 rounded-lg bg-primaryColor font-medium text-white">
                Download
              </button>
              <button className="px-4 py-2 rounded-lg bg-primaryColor font-medium text-white">
                Generate
              </button>
            </div>

            <h4  className=" px-4 font-medium text-primaryColor py-2 absolute top-10 left-20  rounded-md bg-backgroundLight">Pro</h4>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Share;
