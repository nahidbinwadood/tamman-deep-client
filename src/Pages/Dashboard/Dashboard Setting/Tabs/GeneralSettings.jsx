

const GeneralSettings = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-20 py-12 flex justify-between">
      <h2 className="text-xl font-semibold">Account settings:</h2>
      <div className="border border-borderColor rounded-xl p-6 min-w-[525px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full flex flex-col gap-5"
        >
          <div className="flex w-full items-center gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-textGray">
                First Name
              </label>
              <input
                placeholder="Enter First Name"
                className=" px-5 py-3 border border-borderColor rounded-lg focus:outline-none"
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="font-medium text-textGray ">
                Last Name
              </label>
              <input
                placeholder="Enter Last Name"
                className=" px-5 py-3 border border-borderColor rounded-lg focus:outline-none"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-medium text-textGray focus:outline-none"
              >
                Email Address
              </label>
              <input
                placeholder="Enter Email Address"
                className=" px-5 py-3 border border-borderColor rounded-lg focus:outline-none"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="w-full border-t border-borderColor my-3" />
          <div className="w-full flex justify-end">
            <button className="bg-primaryColor text-white border border-primaryColor px-10 py-3 rounded-xl text-lg font-medium hover:bg-transparent hover:text-primaryColor transition duration-300">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralSettings;
