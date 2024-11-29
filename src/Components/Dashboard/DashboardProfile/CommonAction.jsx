/* eslint-disable react/prop-types */

function CommonAction({ tab, activeTab, setActiveTab, setOpen }) {
  const { title, Icon } = tab;
  const isActiveTab = title == activeTab;

  const handleClick = (title) => {
    setOpen(true);
    setActiveTab(title);
  };
  return (
    <div
      onClick={() => handleClick(title)}
      className={`flex cursor-pointer font-inter hover:text-white transition-all duration-300 hover:bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] items-center gap-3 p-4 group text-textDark rounded-xl  border ${
        isActiveTab && title !== 'Create Action' && title !== 'Share'
          ? 'bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] text-white'
          : ''
      }`}
    >
      <div className="px-4 rounded-xl text-primaryColor py-3 bg-backgroundLight">
        <Icon size={24} />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default CommonAction;
