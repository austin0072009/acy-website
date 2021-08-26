import { Header, Footer } from "../components";
import cookiePolicy from "../texts/cookiePolicy";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";

const Cookie = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <Header></Header>
        <MdTextField text={cookiePolicy}></MdTextField>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Cookie;
