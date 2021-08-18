import main_panel_bg from "../assets/main_panel_bg.png";
import { isMobile } from "react-device-detect";
const Title = () => {
  let style = {
    backgroundImage: `url(${main_panel_bg})`,
    backgroundSize: "contain",
    backgroundPosition: isMobile ? "5vw 0" : "15vw 2vw",
    backgroundRepeat: "no-repeat",
    minHeight: "40vw",
  };

  console.log(style);
  return (
    <div
      className="mx-2 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10 pt-20"
      style={style}
    >
      <div className="w-full md:w-1/2">
        <p className="text-3xl md:text-4xl lg:text-5xl lg:leading-normal text-white my-10 ">
          <span>ACY Finance is</span> <br />
          <span>a deep integrated DEX</span>
          <br />
          <span>to yield ALPHA</span>
        </p>
        <p className="text-justify text-xl w-100 xl:w-4/6 text-brown-100 my-10 leading-10">
          ACY invents flash arbitrage, a program executed in each transaction
          inside the protocol. In this new world created by ACY, investors will
          always win the games.
        </p>
      </div>
    </div>
  );
};

export default Title;
