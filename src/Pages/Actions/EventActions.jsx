import {
  BuildingSvg,
  CalendarWithTimeSvg,
  EventSvg,
  ShareSvg,
  UserSvg,
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
const EventActions = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Event Name" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-5 w-full">
        <div className="flex-shrink-0 flex">
          <EventSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Event Name" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-5 w-full">
        <div className="flex-shrink-0 flex">
          <CalendarWithTimeSvg />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Select>
            <SelectTrigger className="w-full h-14 border-black/20 text-base text-textGray/80">
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
          <div className="flex items-center gap-5">
            <div className="w-1/2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal h-14 text-base border-black/30',
                      !startDate && 'text-muted-foreground'
                    )}
                  >
                    {startDate ? (
                      format(startDate, 'PPP')
                    ) : (
                      <span>Start Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    className={' text-base text-textGray/80'}
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-1/2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal h-14 text-base border-black/30',
                      !endDate && 'text-muted-foreground'
                    )}
                  >
                    {endDate ? (
                      format(endDate, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  gap-5 mt-5 w-full">
        <div className="flex-shrink-0 flex">
          <BuildingSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Street  1" variant="outlined" fullWidth />
          <TextField label="Street  2" variant="outlined" fullWidth />
          <TextField label="Postal Code" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex  gap-5 mt-5 w-full">
        <div className="flex-shrink-0 flex">
          <ShareSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Url" variant="outlined" fullWidth />
          <TextField
            multiline
            rows={8}
            label="Description"
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default EventActions;
