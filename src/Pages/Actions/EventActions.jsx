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
import { useEffect, useState } from 'react';
import { BackButtonSvg } from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
const EventActions = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'event',
    name: '',
    eventName: '',
    timezone: '',
    startDate: '',
    endDate: '',
    street1: '',
    street2: '',
    street3: '',
    postalCode: '',
    url: '',
    description: '',
    status: 'inactive',
  });

  //save data on db:
  const eventMutation = useMutation({
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
    eventMutation.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    // Update formData when startDate changes
    if (startDate) {
      setFormData((prev) => ({
        ...prev,
        startDate: format(startDate, 'yyyy-MM-dd'),
      }));
    }

    // Update formData when endDate changes
    if (endDate) {
      setFormData((prev) => ({
        ...prev,
        endDate: format(endDate, 'yyyy-MM-dd'),
      }));
    }
    if (formData.name.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [endDate, formData, startDate]);

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
          <div className="flex flex-col items-center max-w-[600px] mx-auto pb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
            <div className="flex gap-4 mt-5 w-full">
              <div className="flex-shrink-0 flex">
                <UserSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-5 w-full">
              <div className="flex-shrink-0 flex">
                <EventSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Event Name"
                  variant="outlined"
                  fullWidth
                  name="eventName"
                  value={formData?.eventName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-5 w-full">
              <div className="flex-shrink-0 flex">
                <CalendarWithTimeSvg />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <Select
                  onValueChange={handleTimezoneChange}
                  value={formData.timezone}
                >
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
                <TextField
                  label="Street  1"
                  variant="outlined"
                  fullWidth
                  name="street1"
                  value={formData?.street1}
                  onChange={handleChange}
                />
                <TextField
                  label="Street  2"
                  variant="outlined"
                  fullWidth
                  name="street2"
                  value={formData?.street2}
                  onChange={handleChange}
                />
                <TextField
                  label="Postal Code"
                  variant="outlined"
                  fullWidth
                  name="street3"
                  value={formData?.street3}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex  gap-5 mt-5 w-full">
              <div className="flex-shrink-0 flex">
                <ShareSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Url"
                  variant="outlined"
                  fullWidth
                  name="url"
                  value={formData?.url}
                  onChange={handleChange}
                />
                <TextField
                  multiline
                  rows={8}
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={formData?.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventActions;
