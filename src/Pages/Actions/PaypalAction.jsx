import { UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';

const PaypalAction = () => {
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="PayPal" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="User Name" variant="outlined" fullWidth />
          <TextField label="Amount" variant="outlined" fullWidth />
          <TextField label="USD" variant="outlined" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default PaypalAction;
