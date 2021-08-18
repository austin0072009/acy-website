import { useState } from "react";
const NoBotItem = ({ title, content }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      className="flex items-center mb-10"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="flex flex-col text-white">
        <h2
          className={`text-3xl mb-3 pl-3 ${
            active ? "line-through text-orange" : ""
          }`}
        >
          <b>{title}</b>
        </h2>
        <p
          className={`text-sm p-3 ${
            active ? "text-white bg-orange" : "text-white"
          } `}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default NoBotItem;
