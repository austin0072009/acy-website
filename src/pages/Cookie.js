import { Header, Footer } from "../components";
import cookiePolicy from "../texts/cookiePolicy";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";
import { useState } from "react";

const Cookie = () => {
  let [menuActive, setMenuActive] = useState(false);
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 1 }} className="relative">
      <Gradient></Gradient>
      <Header active={menuActive} setActive={setMenuActive}></Header>
      <div
        className="relative"
        style={{ zIndex: 1 }}
        onClick={() => {
          setMenuActive(false);
        }}
      >
        <MdTextField text={cookiePolicy}></MdTextField>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Cookie;
