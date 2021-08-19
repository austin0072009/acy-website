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
      <div className="flex flex-col text-white ">
        <p
          className={`text-4xl mb-3 font-semibold pl-3 ${
            active ? "line-through text-orange" : ""
          }`}
        >
          {title}
        </p>
        <p
          className={`text-sm p-3 leading-6 rounded-md ${
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
