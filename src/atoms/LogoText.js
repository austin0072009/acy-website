import { useState } from "react";
import Typist from "react-typist";

const LogoText = ({ LogoUrl, text, url = null, children }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      className="mx-3 flex flex-col items-center p-3 cursor-pointer filter brightness-200 hover:brightness-100 grayscale-100  hover:grayscale-0"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      onClick={() => {
        if (url) window.location.href = url;
      }}
    >
      <p className={`my-0 text-brown-50 font-medium text-lg`}>{text}</p>
      <img
        src={LogoUrl}
        alt={text}
        className="py-3 w-10"
        style={{ maxWidth: "40px" }}
      />
      {active ? (
        <Typist
          cursor={{ show: false }}
          className="text-orange text-xs text-center"
        >
          {children}
        </Typist>
      ) : null}
    </div>
  );
};

export default LogoText;
