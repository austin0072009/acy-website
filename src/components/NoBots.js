import { NoBotItem } from "../subcomponents";
import protest from "../assets/protest.png";
import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const NoBots = () => {
  let botInfoList = [
    [
      "Market making robots",
      "The robots places limit orders just outside the current buy and sell prices attempting to profit the spread of the two orders. They place buy & sell orders at the same time in a neutral market and place buy first & sell later orders for an uptrending market.",
    ],
    [
      "MEV robots",
      "This is most powerful robots deployed to acquire the Miner Extractable Value. MEV is a measure of the total value that can be extracted permissionlessly (i.e. without any special rights) from transaction ordering during block creation.",
    ],
    [
      "Arbitrage robots",
      "The robots simultaneously purchases and sells an asset to profit from a difference in the price by exploiting the price differences of identical and/or different market on all exchanges",
    ],
    [
      "Automated trading robots",
      "The robots executes the program the users configured on the exchange. Automated trading robot is an automated trading strategy scanning the market with technical analysis for buying opportunities and sells.",
    ],
  ];
  let infos = botInfoList.map((item, index) => (
    <NoBotItem
      title={item[0]}
      content={item[1]}
      useGray={index % 2 === 0 ? true : false}
    />
  ));

  let [totalExtractedMEV, setTotalExtractedMEV] = useState(0);
  let [loadedTotalExtractedMEV, setLoadedTotalExtractedMEV] = useState(null);

  useEffect(() => {
    axios
      .get(
        "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/32"
      )
      .then((data) => {
        setLoadedTotalExtractedMEV(true);
        setTotalExtractedMEV(data.data.data.rows[0][0]);
      })
      .catch((e) => {
        console.log(`An error occured: ${e}`);
      });
  }, []);

  return (
    <div className="my-10">
      <p className="text-white text-3xl">
        ACY Finance protects the investors against the invading of kinds of
        robots
      </p>
      <br />
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col justify-around order-1 md:w-1/3">
          {infos[0]}
          {infos[1]}
        </div>
        <div className="flex justify-center items-center order-3 md:order-2 md:w-1/3 p-10">
          <img className="w-full" src={protest} alt="NoBot" />
        </div>
        <div className="flex flex-col justify-around order-2 md:order-3 md:w-1/3">
          {infos[2]}
          {infos[3]}
        </div>
      </div>
      <p className="text-white text-xl">
        MEV Robots have been extracting profit from the traders and providers up
        to &nbsp;&nbsp;
        <span
          className="text-2xl lg:text-3xl xl:text-5xl align-middle"
          style={{ color: "#cf6335" }}
        >
          ${" "}
          {(loadedTotalExtractedMEV && (
            <CountUp
              end={totalExtractedMEV && totalExtractedMEV / 1000000}
              decimals={3}
              duration={2.75}
            />
          )) ||
            0}{" "}
          M
        </span>
      </p>
    </div>
  );
};

export default NoBots;
