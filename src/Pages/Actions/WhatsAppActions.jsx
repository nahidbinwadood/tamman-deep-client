import { PhoneSvg, UserSvg } from '@/Components/SvgContainer';
import { TextField } from '@mui/material';

const WhatsAppActions = () => {
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="WhatsApp" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <PhoneSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="+880" variant="outlined" fullWidth />
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

export default WhatsAppActions;
