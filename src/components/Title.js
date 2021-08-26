import main_panel_bg from "../assets/main_panel_bg2.png";
import { isMobile } from "react-device-detect";
import Typist from "react-typist";

const Title = () => {
  let style = {
    backgroundImage: `url(${main_panel_bg})`,
    backgroundSize: "contain",
    backgroundPosition: isMobile ? "bottom" : "bottom right",
    backgroundRepeat: "no-repeat",
    opacity: 0.3,
    zIndex: -1,
  };

  return (
    <div
      className="mx-2 sm:mx-5 lg:mx-10 xl:mx-12 px-2 sm:px-5 xl:px-12 lg:px-8 pt-5 md:pt-20 relative"
      style={{ zIndex: 0 }}
    >
      <div className="absolute top-0 left-0 w-full h-full" style={style}></div>
      <div
        className="w-full md:w-3/5 relative"
        style={{ minHeight: isMobile ? "auto" : "40vw", zIndex: 1 }}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl lg:leading-normal text-orange my-10 ">
          <Typist cursor={{ hideWhenDone: true }}>
            <span>ACY Finance is</span> <br />
            <span>a deep integrated DEX</span>
            <br />
            <span>to yield ALPHA</span>
          </Typist>
        </p>
        <p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
          Arbitrage is a multi-route arbitrage program built in the protocol and
          executed within each transaction, which solves the problem of slippage
          caused by robot invasion and enables the users can make profit
          automatically.
        </p>
      </div>
    </div>
  );
};

export default Title;
