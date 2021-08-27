import { Header, Footer } from "../components";
import privacyPolicy from "../texts/privacyPolicy";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";
import { useState } from "react";

const Privacy = () => {
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
        <MdTextField text={privacyPolicy}></MdTextField>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Privacy;
