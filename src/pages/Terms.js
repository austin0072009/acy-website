import tou from "../texts/termsOfUse";
import { Header, Footer } from "../components";
import { MdTextField } from "../components";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C" }}>
      <Header></Header>
      <MdTextField text={tou}></MdTextField>
      <Footer></Footer>
    </div>
  );
};

export default Terms;
