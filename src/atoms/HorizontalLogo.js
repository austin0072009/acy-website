import { useState } from "react";
import Typist from "react-typist";
const HorizontalLogo = ({ src, src_hover, logoText, active }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          className="mr-2"
          src={src}
          style={{ maxWidth: "40px", height: 40 }}
          alt="logo"
        ></img>
        {active ? (
          <Typist cursor={{ show: false }}>{logoText}</Typist>
        ) : (
          <span>{logoText}</span>
        )}
      </div>
    </div>
  );
};

export default HorizontalLogo;
