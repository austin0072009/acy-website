import { useState } from "react";
const LogoText = ({ LogoUrl, text, url = null }) => {
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
      <img src={LogoUrl} alt={text} className="py-3 w-10" />
      <p className={` my-0 ${active ? "text-brown-50" : "text-transparent"}`}>
        {text}
      </p>
    </div>
  );
};

export default LogoText;
