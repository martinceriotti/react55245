import { InfinitySpin } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default Loader;
