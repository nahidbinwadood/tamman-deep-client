import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <ClipLoader
        color={"#ffffff"}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
