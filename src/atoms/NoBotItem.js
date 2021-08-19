import { useState } from "react";
const NoBotItem = ({ title, content }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      className="flex mb-10"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      style={{ maxWidth: "90%" }}
    >
      <div className="flex flex-col text-white ">
        <p
          style={{ fontSize: "30px" }}
          className={`m-0 font-semibold pl-3 ${
            active ? "line-through text-orange" : ""
          }`}
        >
          {title}
        </p>
        <p
          style={{ fontSize: "16px" }}
          className={`p-3 leading-6 rounded-md ${
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
