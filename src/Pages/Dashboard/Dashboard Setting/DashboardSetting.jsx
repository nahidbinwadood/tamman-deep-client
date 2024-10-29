import { useState } from 'react';
import GeneralSettings from './Tabs/GeneralSettings';
import ProfileSettings from './Tabs/ProfileSettings';
import ManagePlanSettings from './Tabs/ManagePlanSettings';
import OccupationSettings from './Tabs/OccupationSettings';

const DashboardSetting = () => {
  const tabs = ['General', 'Profile', 'Occupation', 'Manage Plan'];
  const [activeTab, setActiveTab] = useState('General');

  return (
    <>
      <div className="mx-6 py-8 bg-white rounded-xl">
        {/* tabs */}
        <div className="p-6 flex items-center gap-2 w-full">
          {tabs.map((tab) => (
            <div
              onClick={() => setActiveTab(tab)}
              key={tab}
              className={`w-full text-lg pb-3 text-center cursor-pointer ${
                activeTab == tab
                  ? 'border-b-2 border-black'
                  : 'border-b-0 text-textGray'
              } `}
            >
              <h4>{tab}</h4>
            </div>
          ))}
        </div>

        {/* tab contents */}
        <div>
          {activeTab == 'General' && <GeneralSettings />}
          {activeTab == 'Profile' && <ProfileSettings />}
          {activeTab == 'Occupation' && <OccupationSettings />}
          {activeTab == 'Manage Plan' && <ManagePlanSettings />}
        </div>
      </div>
      {/* account security */}
      {(activeTab == 'General' || activeTab == 'Profile') && (
        <div className="mx-6 px-12 bg-white rounded-xl mt-6">
          <div className="px-8 py-6 w-full flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Account security</h2>
            </div>
            <div>
              <div className="border border-borderColor p-6 rounded-xl flex items-center justify-between min-w-[525px]">
                <p className="font-medium">Reset Password</p>
                <button className="px-8 py-3 rounded-xl border border-borderColor">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSetting;
