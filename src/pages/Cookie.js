import { Header, Footer } from "../components";
import cookiePolicy from "../texts/cookiePolicy";
import { MdTextField } from "../components";

const Cookie = () => {
  return (
    <div className="relative" style={{ backgroundColor: "#1B1B1C" }}>
      <Header></Header>
      <MdTextField text={cookiePolicy}></MdTextField>
      <Footer></Footer>
    </div>
  );
};

export default Cookie;
