import ListItemOrange from "../assets/bulletOrange.png";
import ListItemGray from "../assets/bulletGray.png";
import { useState } from "react";

const NoBotItem = ({ title, content }) => {
  let [activeBullet, setActiveBullet] = useState(ListItemGray);

  return (
    <div className="flex items-center mb-10">
      <div className="flex flex-col text-white">
        <h2 className="text-3xl mb-3 hover:line-through hover:text-orange pl-3">
          <b>{title}</b>
        </h2>
        <p className="text-xs hover:bg-orange hover:text-white p-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default NoBotItem;
