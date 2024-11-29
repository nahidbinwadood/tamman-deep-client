import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { BsGrid } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineQrCodeScanner, MdSort } from 'react-icons/md';
const DashboardProfileHeader = () => {
  const layout = [
    { icon: <BsGrid />, id: 2 },
    { icon: <HiOutlineBars3 />, id: 1 },
  ];
  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div className="flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-[120px] font-inter text-textColor py-[22px] bg-white">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className={'font-inter'}>
            <SelectItem value="lower">Lower</SelectItem>
            <SelectItem value="=Higher">Higher</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-3">
          {layout.map((icon) => (
            <div
              key={icon.id}
              className="px-4 cursor-pointer py-3.5 rounded-md border bg-white "
            >
              {icon.icon}
            </div>
          ))}
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-3">
        <div className="px-4 cursor-pointer py-3 rounded-md border bg-white flex items-center gap-4">
          <IoIosSearch size={26} />
          <input
            className="w-full bg-inherit focus:outline-none text-sm text-textColor h-full "
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
        </div>
        <div className="px-4 cursor-pointer text-textColor py-3 border rounded-md bg-white flex items-center gap-3">
          <MdSort size={24} />
          <h4 className="text-sm font-medium text-textColor ">Sort</h4>
        </div>
        <div className="px-4 cursor-pointer text-textColor py-3 border rounded-md bg-white flex items-center gap-3">
          <MdOutlineQrCodeScanner size={22} />
          <h4 className="text-sm font-medium text-textColor ">Scan</h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileHeader;
