import { Switch } from "@/Components/ui/switch";
import { TiBusinessCard } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";

function Product() {
  return (
    <div className="border p-4 justify-between rounded-lg flex items-center ">
      <div className="flex flex-1 items-center gap-4">
        <div className="w-16 h-8 rounded-lg bg-backgroundLight"></div>
        <h4 className="text-textDark">Demo Product</h4>
      </div>
      <div className="flex flex-1 text-textColor tex-sm items-center gap-2">
        <TiBusinessCard color="gray" size={24} />
        <h4>Contact Card #1</h4>
      </div>
      <div className="flex-1">
        <Switch className={"data-[state=checked]:bg-primaryColor"} />
      </div>
      <div className="cursor-pointer">
        <TbEdit size={24} />
      </div>
    </div>
  );
}

export default Product;
