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
        <p className="text-3xl md:text-4xl lg:text-6xl lg:leading-normal text-white my-10 ">
          <span>ACY Finance is</span> <br />
          <span>a deep integrated DEX</span>
          <br />
          <span>to yield ALPHA</span>
        </p>
        <p className="text-justify text-xl w-100 xl:w-5/6 text-brown-100 my-10 leading-10">
          ACY invents flash arbitrage which is a multi-route arbitrage program
          executed within each transaction inside the protocol. The smart
          contracts of ACY Finance solve the robot-exploiting problems to a
          great extent so that all the users can automatically profit from the
          arbitage and reduce the slippage.
        </p>
      </div>
    </div>
  );
};

export default Title;
