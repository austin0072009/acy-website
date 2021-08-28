import main_panel_bg from "../assets/main_panel_bg2.png";
import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import arrowBullet from "../assets/arrow_bullet_orange.png";
import style from "../css/animation.css";
import arrow_down from "../assets/arrow_down_orange.png";

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
      className="mx-2 sm:mx-5 lg:mx-10 xl:mx-12 px-2 sm:px-5 xl:px-12 lg:px-8 pt-5 md:pt-20 relative mb-20 flex flex-col md:flex-row"
      style={{ zIndex: 0 }}
    >
      <div
        className="w-full md:w-3/5 relative"
        style={{ minHeight: isMobile ? "auto" : "20vw", zIndex: 1 }}
      >
        <p className="text-3xl md:text-4xl lg:text-5xl lg:leading-normal text-orange my-10 ">
          <Typist cursor={{ hideWhenDone: true }}>
            <span>ACY Protocol</span>
          </Typist>
        </p>
        <p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
          A decentralized crypto trading protocol enables the most profitable,
          fastest and protected operation.
        </p>
        <div className="flex items-center text-gray-100 mb-5 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100">
          <img
            src={arrowBullet}
            style={{ maxWidth: 40 }}
            alt="arrow"
            className="mr-3 moveLROnHover "
          />
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
      <div className="w-auto px-20 md:w-2/5 flex-col items-center">
        <div className="flex justify-center items-center">
          <div>
            <p className="text-orange moveUpDownInfinite"> Failed bots </p>
            <img
              src={arrow_down}
              style={{ width: 80, height: 80 }}
              alt="arrow"
              className="moveUpDownInfinite"
            />
          </div>
        </div>
        <div className="flex pt-32 my-5 items-center justify-between rounded-full border-t-2 border-solid border-orange border-l-0 border-r-0 border-b-0">
          <div className="flex flex-col gap-y-10 blink1">
            <div class=" border-solid border-orange border-1 rounded-full h-16 w-16 flex items-center justify-center text-white">
              USDC
            </div>
          </div>
          <div className="flex flex-col gap-y-10 blink2">
            <div class="border-solid border-orange border-1 rounded-full h-16 w-16 flex items-center justify-center text-white">
              ETH
            </div>
            <div class="border-solid border-orange border-1 rounded-full h-16 w-16 flex items-center justify-center text-white">
              DOT
            </div>
            <div class="border-solid border-orange border-1 rounded-full h-16 w-16 flex items-center justify-center text-white">
              ADA
            </div>
          </div>
          <div className="flex flex-col gap-y-10 blink3">
            <div class="border-solid border-orange border-1 rounded-full h-16 w-16 flex items-center justify-center text-white">
              BTC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
