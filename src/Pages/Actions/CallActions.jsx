import { PhoneSvg} from '@/Components/SvgContainer';
import { TextField } from '@mui/material';

const CallActions = () => {
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
      <div className="flex items-center gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <PhoneSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="+880" variant="outlined" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default CallActions;
