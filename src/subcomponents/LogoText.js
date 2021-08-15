import { useState } from "react";

const LogoText = ({ LogoUrl, hLogoUrl, text, url = null }) => {
  let [activeImgUrl, setActiveImgUrl] = useState(LogoUrl);
  return (
    <div
      className="flex flex-col items-center text-brown-100 p-3 cursor-pointer"
      onClick={() => url && window.location.replace(url)}
      onMouseEnter={() => {
        setActiveImgUrl(hLogoUrl);
      }}
      onMouseLeave={() => {
        setActiveImgUrl(LogoUrl);
      }}
    >
      <img src={activeImgUrl} alt={text} className="py-3 w-10" />
      <p>{text}</p>
    </div>
  );
};

export default LogoText;
