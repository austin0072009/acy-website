import ListItemOrange from "../assets/bulletOrange.png";
import ListItemGray from "../assets/bulletGray.png";
import { useState } from "react";

const NoBotItem = ({ title, content }) => {
  let [activeBullet, setActiveBullet] = useState(ListItemGray);

  return (
    <div
      className="flex items-center mb-10"
      onMouseEnter={() => {
        setActiveBullet(ListItemOrange);
      }}
      onMouseLeave={() => {
        setActiveBullet(ListItemGray);
      }}
    >
      <img src={activeBullet} alt="bullet" className="w-1/3"></img>
      <div className="flex flex-col text-white">
        <h2 className="text-2xl mb-3">
          <b>{title}</b>
        </h2>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default NoBotItem;
