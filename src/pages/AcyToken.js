import acytoken from "../texts/acytoken";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const AcyToken = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <MdTextField
          text={acytoken}
          title={"The ACY Protocol token"}
        ></MdTextField>
      </div>
    </div>
  );
};

export default AcyToken;
