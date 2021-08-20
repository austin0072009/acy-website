import { Header, Footer } from "../components";
import cookiePolicy from "../texts/cookiePolicy";
import { MdTextField } from "../components";

const Cookie = () => {
  return (
    <div className="relative" style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <MdTextField text={cookiePolicy}></MdTextField>
      <Footer></Footer>
    </div>
  );
};

export default Cookie;
