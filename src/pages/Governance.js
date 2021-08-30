import governance from "../texts/governance";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const Governance = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <MdTextField text={governance} title={"Governance"}></MdTextField>
      </div>
    </div>
  );
};

export default Governance;
