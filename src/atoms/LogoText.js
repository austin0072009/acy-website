import { useState } from "react";
import Typist from "react-typist";
import style from "../css/animation.css";

const LogoText = ({ LogoUrl, text, url = null, children }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      className="flex flex-col relative items-center cursor-pointer filter brightness-200 hover:brightness-100 grayscale-100  hover:grayscale-0"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      onClick={() => {
        if (url) window.location.href = url;
      }}
      style={{ zIndex: 0 }}
    >
      <div
        className="bg-orange opacity-10 absolute w-full h-full rounded-md"
        style={{ zIndex: -1 }}
      ></div>
      <div className="flex flex-col items-center justify-center p-3">
        <span className="text-orange text-xs text-center">{children}</span>
        <img
          src={LogoUrl}
          alt={text}
          className="py-3 w-10"
          style={{ maxWidth: "40px" }}
        />
        <p className={`my-0 text-brown-50 font-medium text-lg`}>{text}</p>
      </div>
    </div>
  );
};

export default LogoText;
