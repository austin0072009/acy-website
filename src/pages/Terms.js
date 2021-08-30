import tou from "../texts/termsOfUse";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <MdTextField text={tou} title="Terms of Use"></MdTextField>
      </div>
    </div>
  );
};

export default Terms;
