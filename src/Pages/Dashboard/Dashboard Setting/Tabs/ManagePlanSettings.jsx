import { InfoSvg } from '@/Components/SvgContainer';

const ManagePlanSettings = () => {
  return (
    <div className="mx-6">
      <div className="p-6 border border-borderColor rounded-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Plan</h3>
          <div className="flex items-center gap-2">
            <InfoSvg />
            <p className="text-sm text-textGray">Purchasing additional cards</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-textGray">Plan type: 1-4 profiles </p>
          <p className="text-textGray mt-4">
            Status: <span className="text-[#36B37E]">Active</span>
          </p>
        </div>
      </div>
      <div className="p-6 border border-borderColor rounded-xl mt-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Items</h3>
            <p className='mt-5 text-textGray'>Platform maintenance fee (1-3) profiles</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-textGray">Free</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePlanSettings;
