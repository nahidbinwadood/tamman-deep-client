import { useState } from 'react';
import toast from 'react-hot-toast';

const ProfileSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Profile picture saved successfully');
  };
  return (
    <div className="px-20 py-12 flex justify-between">
      <div>
        <h2 className="text-xl font-semibold">Profile page appearance:</h2>
        <p className="text-[#576269] mt-2 w-1/2 text-lg">
          Customize the look of the profile pages of your cardholders. Changes
          will apply to all profile pages belonging to your organisation.
        </p>
      </div>
      <div className=" min-w-[525px]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full flex flex-col gap-5"
        >
          <div className="w-full border-dashed border-borderColor">
            <label className="relative cursor-pointer">
              <input
                onChange={handleImageChange}
                className="hidden"
                type="file"
                name=""
                id="imageContainer"
              />
              <div className="h-[270px] w-full border-dashed border-borderColor">
                {selectedImage ? (
                  <img
                    className="w-full h-full rounded-xl object-cover"
                    src={selectedImage}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-full h-full  rounded-xl"
                    src="https://i.postimg.cc/mr6FSGKk/profile-Image-Container.png"
                    alt=""
                  />
                )}
              </div>
            </label>
          </div>
          <div className="mt-5 w-full flex items-center justify-between">
            <label
              htmlFor="imageContainer"
              className="px-12 py-4 border border-borderColor rounded-lg text-textGray cursor-pointer"
            >
              Upload a photo
            </label>
            <button
              disabled={!selectedImage}
              className={`bg-primaryColor text-white border border-primaryColor px-10 py-3 rounded-xl text-lg font-medium transition duration-300 ${
                !selectedImage
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-transparent hover:text-primaryColor'
              }`}
            >
              Save
            </button>
          </div>
          <div>
            <p className="text-textGray pt-3">
              Recommended dimensions 1024px x 704px
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
