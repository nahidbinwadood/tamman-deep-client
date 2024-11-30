import { CalendarSvg, CalendarWithTimeSvg } from '@/Components/SvgContainer';
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
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { BackButtonSvg } from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';

const DateTriggerAction = () => {
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'date-trigger',
    date: '',
    timezone: '',
    status: 'inactive',
  });

  //save data on db:
  const dateTriggerMutation = useMutation({
    mutationKey: ['action', 'contactCard'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/store', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status == 'success') {
        setLoading(false);
        queryClient.invalidateQueries(['allActions']);
        navigate('/dashboard/profiles');
        toast.success('Your action has been created successfully!');
      }
    },
    onError: (error) => {
      setLoading(false);
      toast.error('Failed to create action, please try again!');
      console.error(error);
    },
  });

  //functions:

  //calendar:
  const handleTimezoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      timezone: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
    setLoading(true);
    dateTriggerMutation.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    // Update formData when startDate changes
    if (date) {
      setFormData((prev) => ({
        ...prev,
        date: format(date, 'yyyy-MM-dd'),
      }));
    }

    if (formData.date.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [date, formData]);
  return (
    <>
      {/* navbar */}
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        <div className="py-6 flex items-center justify-between container mx-auto ">
          <Link
            to="/dashboard/profiles"
            className="flex items-center gap-3 cursor-pointer text-[#212A30]"
          >
            <BackButtonSvg light={true} />
            <span className="text-lg font-medium text-white">
              Action Creation
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                navigate('/dashboard/profiles');
                toast.success('Action Activated!');
              }}
              className="px-10 py-3 rounded-lg bg-transparent text-white border border-white font-semibold text-lg transition-all duration-500"
            >
              Assign Action
            </button>
            <button
              disabled={!active}
              onClick={handleSave}
              className={`px-10 py-3 h-14 w-36 flex items-center justify-center bg-white text-primaryColor border-2 border-primaryColor rounded-lg  font-semibold text-lg ${
                !active ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
              }`}
            >
              {loading ? (
                <ImSpinner9 className="animate-spin size-5" />
              ) : (
                'Save'
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-8 font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center max-w-[600px] mx-auto w-full p-8 rounded-2xl bg-white shadow-lg ">
            <div className="flex gap-4 mt-5 w-full">
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
                <CalendarWithTimeSvg />
              </div>
              <div className="flex-1 space-y-5">
                <Select
                  onValueChange={handleTimezoneChange}
                  value={formData.timezone}
                >
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
        </div>
      </div>
    </>
  );
};

export default DateTriggerAction;
