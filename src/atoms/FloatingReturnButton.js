import close from "../assets/svgs/close/close.svg";
import hclose from "../assets/svgs/close/close_hover.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const FloatingReturnButton = () => {
  let [active, setActive] = useState(false);
  return (
    <div className="p-2 sticky top-3 flex justify-end cursor-pointer">
      <Link to="/">
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
        />
      </Link>
    </div>
  );
};

export default FloatingReturnButton;
