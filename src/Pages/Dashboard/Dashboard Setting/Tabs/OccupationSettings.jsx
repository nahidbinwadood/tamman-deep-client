const OccupationSettings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-20 py-12 flex justify-between">
      <h2 className="text-xl font-semibold">Occupation settings:</h2>
      <div className="border border-borderColor rounded-xl p-6 min-w-[525px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full flex flex-col gap-5"
        >
          <div className="flex w-full items-center gap-4">
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="occupationName" className="font-medium text-textGray">
                Occupation name
              </label>
              <input
                placeholder="Enter Occupation Name"
                className=" px-5 py-3 border border-borderColor rounded-lg focus:outline-none"
                type="text"
                name="occupationName"
                id="occupationName"
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

export default OccupationSettings;
