import { useState } from "react";
const HorizontalLogo = ({ src, src_hover, logoText }) => {
  let [active, setActive] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          className="mr-2"
          src={active ? src_hover : src}
          style={{ maxWidth: "40px", height: 40 }}
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
          alt="logo"
        ></img>
        <p>{logoText}</p>
      </div>
    </div>
  );
};

export default HorizontalLogo;
