import { TextField } from '@mui/material';
import { BackButtonSvg, UserSvg } from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';

const PaypalAction = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: 'paypal',
    userName: '',
    amount: '',
    currency: '',
    status: 'inactive',
  });

  //save data on db:
  const paypalMutation = useMutation({
    mutationKey: ['action', 'contactCard'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/store', data);
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

  //calendar
  const handleCurrencyChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      currency: value,
    }));
  };

  const handleSave = () => {
    console.log(formData);
    setLoading(true);
    paypalMutation.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    if (formData.userName.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [formData]);
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
          <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
            <div className="flex gap-4 mt-10 w-full">
              <div className="flex-shrink-0 flex">
                <UserSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  name="userName"
                  value={formData?.userName}
                  onChange={handleChange}
                />
                <TextField
                  label="Amount"
                  variant="outlined"
                  fullWidth
                  name="amount"
                  value={formData?.amount}
                  onChange={handleChange}
                />
                <Select
                  onValueChange={handleCurrencyChange}
                  value={formData.currency}
                >
                  <SelectTrigger className="w-full h-14 border-black/30 text-base text-textGray">
                    <SelectValue placeholder="USD" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Currency</SelectLabel>
                      <SelectItem value="AUD">
                        Australian dollar [AUD]
                      </SelectItem>
                      <SelectItem value="BRL">Brazilian real [BRL]</SelectItem>
                      <SelectItem value="CAD">Canadian dollar [CAD]</SelectItem>
                      <SelectItem value="EUR">Euro [EUR]</SelectItem>
                      <SelectItem value="GBP">British pound [GBP]</SelectItem>
                      <SelectItem value="INR">Indian rupee [INR]</SelectItem>
                      <SelectItem value="JPY">Japanese yen [JPY]</SelectItem>
                      <SelectItem value="MXN">Mexican peso [MXN]</SelectItem>
                      <SelectItem value="NZD">
                        New Zealand dollar [NZD]
                      </SelectItem>
                      <SelectItem value="RUB">Russian ruble [RUB]</SelectItem>
                      <SelectItem value="ZAR">
                        South African rand [ZAR]
                      </SelectItem>
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

export default PaypalAction;
