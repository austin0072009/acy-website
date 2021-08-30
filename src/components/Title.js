import { isMobile } from "react-device-detect";
import Typist from "react-typist";

const Title = () => {
  return (
    <div
      className="mx-2 sm:mx-5 lg:mx-10 xl:mx-12 px-2 sm:px-5 xl:px-12 lg:px-8 pt-5 md:pt-20 relative mb-20 flex flex-col md:flex-row"
      style={{ zIndex: 0 }}
    >
      <div
        className="w-full md:w-3/5 relative"
        style={{ minHeight: isMobile ? "auto" : "20vw", zIndex: 1 }}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl lg:leading-normal text-orange my-10 ">
          <Typist cursor={{ hideWhenDone: true }}>
            <span>ACY PROTOCOL</span>
          </Typist>
        </p>
        <p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
          A decentralized crypto trading protocol enables the most profitable,
          fastest and protected operation.
        </p>
        <div className="flex items-center mb-5">
          <span className="font-medium text-orange text-2xl">
            ACY FLASH ARBITRAGE
          </span>
        </div>
        <p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
          A multi-route arbitrage program built in ACY protocol and executed
          within each transaction, which solves the problem of slippage caused
          by robot invasion and enables the users make profit automatically.
        </p>
      </div>
    </div>
  );
};

export default Title;
