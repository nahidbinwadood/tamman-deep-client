

function CommonAction({ title, Icon }) {
  return (
    <div className="flex cursor-pointer items-center gap-3 p-4 rounded-xl bg-[#F6FAFF] border">
      <div className="px-4 rounded-xl text-primaryColor py-3 bg-backgroundLight">
        <Icon size={24} />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default CommonAction;
