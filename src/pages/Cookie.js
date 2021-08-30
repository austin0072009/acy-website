import cookiePolicy from "../texts/cookiePolicy";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const Cookie = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <MdTextField text={cookiePolicy} title="Cookie"></MdTextField>
      </div>
    </div>
  );
};

export default Cookie;
