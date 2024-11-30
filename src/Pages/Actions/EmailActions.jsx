import { BackButtonSvg, EmailSvg, UserSvg } from '@/Components/SvgContainer';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { TextField } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';

const EmailActions = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    type: 'Email',
    name: '',
    email: '',
    subject: '',
    description: '',
    status: 'inactive',
  });

  ///handle form Data:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //submit data on db:
  const emailAction = useMutation({
    mutationKey: ['action', 'email'],
    mutationFn: async (data) => {
      const response = await axiosPublic.post('/api/action/store', data);
      return response.data;
    },
    onSuccess: (data) => {
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

  const handleSave = () => {
    setLoading(true);
    emailAction.mutate(formData);
    // navigate to profile page
  };

  //useEffect:
  useEffect(() => {
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.subject.length > 0 &&
      formData.description.length > 0
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [formData]);
  return (
    <>
      <div className="shadow-md font-inter bg-gradient-to-l from-[#116DFF] to-[#23C0B6]">
        {/* navbar */}
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

      {/* outlet */}
      <div className="pt-8 pb-8 font-inter bg-[#f3f8fe] min-h-[calc(100vh-104px)]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
            <div className="flex gap-4 mt-10 w-full">
              <div className="flex-shrink-0 flex">
                <UserSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Enter Your Name"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-10 w-full">
              <div className="flex-shrink-0 flex">
                <EmailSvg />
              </div>
              <div className="flex-1 space-y-5">
                <TextField
                  label="Enter Your Mail"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  multiline
                  rows={8}
                  label="Description"
                  variant="outlined"
                  fullWidth
                  name="description"
                  value={formData.description}
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

export default EmailActions;
