import tou from "../texts/termsOfUse";
import { Header, Footer } from "../components";
import { MdTextField } from "../components";

const Terms = () => {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>

      <MdTextField text={tou}></MdTextField>

      <Footer></Footer>
    </div>
  );
};

export default Terms;
