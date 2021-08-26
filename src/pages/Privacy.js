import { Header, Footer } from "../components";
import privacyPolicy from "../texts/privacyPolicy";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const Privacy = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <Header></Header>
        <MdTextField text={privacyPolicy}></MdTextField>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Privacy;
