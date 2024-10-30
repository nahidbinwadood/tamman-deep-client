import { CalendarSvg } from '@/Components/SvgContainer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useState } from 'react';
const DateTriggerAction = () => {
  const [date, setDate] = useState();
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <CalendarSvg />
        </div>
        <div className="flex-1 space-y-5">
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
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <CalendarSvg />
        </div>
        <div className="flex-1 space-y-5">
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
        </div>
      </div>
    </div>
  );
};

export default DateTriggerAction;
