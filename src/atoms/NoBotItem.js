import { useState } from "react";
const NoBotItem = ({ title, content }) => {
  let [active, setActive] = useState(false);
  return (
    <div
      className="flex mb-10 border-solid border-1 border border-gray-100 rounded-lg p-4"
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="flex flex-col text-gray-100 ">
        <p style={{ fontSize: "30px" }} className={`m-0 font-semibold pl-3`}>
          {title}
        </p>
        <div>
          <p
            style={{ fontSize: "16px" }}
            className={`p-3 leading-6 mb-0 rounded-md text-gray-100`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoBotItem;
