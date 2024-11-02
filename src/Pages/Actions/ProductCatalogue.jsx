import {
  CatalogueSvg,
  HamburgerSvg,
  PhoneSvg,
  UserSvg,
} from '@/Components/SvgContainer';
import { TextField } from '@mui/material';

const ProductCatalogue = () => {
  return (
    <div className="flex flex-col items-center max-w-[600px] mx-auto mb-20 w-full p-8 rounded-2xl bg-white shadow-lg">
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <UserSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="SMS" variant="outlined" fullWidth />
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
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <CatalogueSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="+Name" variant="outlined" fullWidth />
        </div>
      </div>
      <div className="flex gap-4 mt-10 w-full">
        <div className="flex-shrink-0 flex">
          <HamburgerSvg />
        </div>
        <div className="flex-1 space-y-5">
          <TextField label="New Item" variant="outlined" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
