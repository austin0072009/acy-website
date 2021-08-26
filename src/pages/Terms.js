import tou from "../texts/termsOfUse";
import { Header, Footer } from "../components";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";
const Terms = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>

      <div className="relative" style={{ zIndex: 1 }}>
        <Header></Header>
        <MdTextField text={tou}></MdTextField>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Terms;
