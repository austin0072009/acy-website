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
    <NoBotItem title={item[0]} content={item[1]} />
  ));

  let [totalExtractedMEV, setTotalExtractedMEV] = useState(0);
  let [loadedTotalExtractedMEV, setLoadedTotalExtractedMEV] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="my-10">
      <br />
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col justify-around order-1 md:w-2/5">
          {infos[0]}
          {infos[1]}
        </div>
        <div className="flex flex-col justify-around order-2 md:order-3 md:w-2/5">
          {infos[2]}
          {infos[3]}
        </div>
      </div>
    </div>
  );
};

export default NoBots;
