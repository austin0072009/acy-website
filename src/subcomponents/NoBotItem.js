import ListItemOrange from "../assets/bulletOrange.png";
import ListItemGray from "../assets/bulletGray.png";
import { useState } from "react";

const NoBotItem = ({ title, content }) => {
  let [activeBullet, setActiveBullet] = useState(ListItemGray);

  return (
    <div className="flex items-center mb-10">
      <img
        src={ListItemOrange}
        alt="bullet"
        className="w-2/12 filter grayscale-100 brightness-125 hover:grayscale-0"
      ></img>
      <div className="flex flex-col text-white">
        <h2 className="text-2xl mb-3 line-through">
          <b>{title}</b>
        </h2>
        <p className="text-xs">{content}</p>
      </div>
    </div>
  );
};

export default NoBotItem;
