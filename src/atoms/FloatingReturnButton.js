import close from "../assets/close.png";
import hclose from "../assets/close_hover.png";
import { useState } from "react";
const FloatingReturnButton = () => {
  let [active, setActive] = useState(false);
  return (
    <div className="p-2 sticky top-3 float-right cursor-pointer">
      <img
        src={active ? hclose : close}
        onMouseEnter={() => {
          setActive(true);
        }}
        onMouseLeave={() => {
          setActive(false);
        }}
        alt="close"
        style={{
          width: "4vw",
          height: "4vw",
          minWidth: "30px",
          minHeight: "30px",
          maxWidth: "40px",
          maxHeight: "40px",
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      ></img>
    </div>
  );
};

export default FloatingReturnButton;
