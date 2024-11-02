import { EmailSvg, UserSvg } from "@/Components/SvgContainer";
import { TextField } from "@mui/material";

const EmailActions = () => {
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Enter Your Name" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <EmailSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="Enter Your Mail" variant="outlined" fullWidth />
          <TextField label="Subject" variant="outlined" fullWidth />
          <TextField multiline rows={8} label="Description" variant="outlined" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default EmailActions;
