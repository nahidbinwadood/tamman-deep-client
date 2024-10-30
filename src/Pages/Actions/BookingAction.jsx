import {
  AddImagePlusSvg,
  CalendarSvg,
  DisabledSvg,
  EmailLightSvg,
  UserSvg,
  WhatsAppSvg,
} from '@/Components/SvgContainer';
import { Button } from '@/Components/ui/button';
import { Calendar } from '@/Components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { cn } from '@/lib/utils';
import { TextField } from '@mui/material';
import { format } from 'date-fns';
import { useState } from 'react';
const BookingAction = () => {
  const [date, setDate] = useState();
  const [profilePhoto, setProfilePhoto] = useState('');
  const [activeTab, setActiveTab] = useState('Deactivated');

  const tabs = [
    {
      title: 'Deactivated',
      svg: <DisabledSvg />,
    },
    {
      title: 'Email',
      svg: <EmailLightSvg />,
    },
    {
      title: 'WhatsApp',
      svg: <WhatsAppSvg />,
    },
  ];
  //functions:
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  return (
    <div className="flex   justify-center">
      <div className="flex items-center justify-center mx-auto max-w-[650px] pb-20">
        <form action="" className="w-full">
          {/* image section */}
          <div>
            <div className="w-full flex items-center justify-center relative">
              <div className="size-40 z-10 relative">
                <img
                  className=" h-full w-full object-cover rounded-full"
                  src={
                    profilePhoto
                      ? profilePhoto
                      : 'https://i.postimg.cc/501JRsTz/profilepic.png'
                  }
                  alt=""
                />
                <label
                  htmlFor="profilePicture"
                  className="absolute bottom-5 right-0 cursor-pointer"
                >
                  <input
                    onChange={handleProfilePhotoChange}
                    className="hidden"
                    type="file"
                    name="profilePicture"
                    id="profilePicture"
                  />
                  <div className="bg-primaryColor rounded-full size-8 flex items-center justify-center">
                    <AddImagePlusSvg />
                  </div>
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-center mt-3">
                Profile Image
              </h3>
            </div>
          </div>

          {/* inputs */}
          <div className="flex gap-4 mt-10">
            <div className="flex-shrink-0 flex">
              <UserSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField label="Title" variant="outlined" fullWidth />
              <TextField
                label="Description"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
              />
              <Select>
                <SelectTrigger className="w-full h-14 border-black/30 text-base text-textGray">
                  <SelectValue placeholder="Timezone of event location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Timezone of event location</SelectLabel>
                    <SelectItem value="G.M.T 1+">G.M.T 1+</SelectItem>
                    <SelectItem value="G.M.T 2+">G.M.T 2+</SelectItem>
                    <SelectItem value="G.M.T 3+">G.M.T 3+</SelectItem>
                    <SelectItem value="G.M.T 4+">G.M.T 4+</SelectItem>
                    <SelectItem value="G.M.T 5+">G.M.T 5+</SelectItem>
                    <SelectItem value="G.M.T 6+">G.M.T 6+</SelectItem>
                    <SelectItem value="G.M.T 7+">G.M.T 7+</SelectItem>
                    <SelectItem value="G.M.T 8+">G.M.T 8+</SelectItem>
                    <SelectItem value="G.M.T 9+">G.M.T 9+</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <TextField
                label="Enter Event Duration"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-shrink-0 ">
              <CalendarSvg />
            </div>
            <div className="flex-1 space-y-5">
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal h-14 text-base',
                        !date && 'text-muted-foreground'
                      )}
                    >
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <TextField
                label="Description"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex-shrink-0 flex">
              <UserSvg />
            </div>
            <div className="flex-1 space-y-5">
              <TextField label="Title" variant="outlined" fullWidth />
              <TextField
                label="Description"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
              />
              <div className="flex items-center gap-3 w-full ">
                {tabs?.map((tab) => (
                  <div
                    onClick={() => setActiveTab(tab?.title)}
                    key={tab?.title}
                    className={`relative flex cursor-pointer items-center justify-center w-1/3 p-4 border rounded-lg ${
                      activeTab === tab?.title
                        ? 'border-primaryColor'
                        : 'border-[#E6EBEF]'
                    } `}
                  >
                    <div>
                      <div className=" flex items-center justify-center">
                        <div className="bg-primaryColor p-2 rounded-full">
                          {tab?.svg}
                        </div>
                      </div>
                      <p className="text-textGray mt-2 text-sm">{tab?.title}</p>
                    </div>
                    {/* pro */}
                    {(tab?.title == 'Email' || tab?.title == 'WhatsApp') && (
                      <div className="absolute top-2 right-2 py-1 px-2 rounded-sm bg-primaryColor/10">
                        <p className="text-xs text-primaryColor font-medium">
                          Pro
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField
                label="Whatsapp Phone Number"
                variant="outlined"
                fullWidth
              />
            </div>
          </div>
        </form>
      </div>
      <div className="flex mt-60 h-fit flex-col gap-10 items-center justify-center mx-auto min-w-[450px] py-10 rounded-[24px] bg-gradient-to-l from-[rgba(17,109,255,0.05)] to-[rgba(35,192,182,0.05)]">
        <div className="pt-10">
          <h4 className="text-xl font-semibold">Live Preview</h4>
        </div>
        <div>
          <div className="size-40 mx-auto">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.postimg.cc/FRMZdVGP/sample-Image.png"
              alt=""
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="font-semibold text-2xl">John Doea</h3>
            <p className="mt-3 text-textGray w-4/5 mx-auto">
              Hey I am a product designer at toto company. Where I make things
              happen
            </p>
            <p className="mt-3 font-medium">New Jersy, Wakanda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAction;
