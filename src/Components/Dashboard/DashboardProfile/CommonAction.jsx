

function CommonAction({ title, Icon, isCreateAction }) {
  return (
    <div className={`flex cursor-pointer font-inter hover:text-white transition duration-200 hover:bg-gradient-to-tl from-[#116DFF] to-[#23C0B6] items-center gap-3 p-4 group text-textDark rounded-xl  border`}>
      <div className="px-4 rounded-xl text-primaryColor py-3 bg-backgroundLight">
        <Icon size={24} />
      </div>
      <h4 >{title}</h4>
    </div>
  );
}

export default CommonAction;
