import { NoBotItem } from "../subcomponents";
import nobots from "../assets/nobots.png";
import axios from "axios";
import { useEffect, useState } from "react";

const NoBots = () => {
  let botInfoList = [
    ["Market making robots", "Lorem ipsum dolor sit amet, co"],
    ["MEV robots", "Lorem ipsum dolor sit amet, cossgdgghdfg"],
    ["Arbitrage robots", "Lorem ipsum dolor sit amet, cossgdgghdfg"],
    ["Automated trading robots", "Lorem ipsum dolor sit amet, cossgdgghdfg"],
  ];
  let infos = botInfoList.map((item) => (
    <NoBotItem title={item[0]} content={item[1]} />
  ));

  let [totalExtractedMEV, setTotalExtractedMEV] = useState(0);

  useEffect(() => {
    axios
      .get(
        "/api/mev/api/public/dashboard/72e207c3-4d8e-450e-a820-fb02e29fec5a/card/32"
      )
      .then((data) => {
        console.log(data);
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
      <div className="flex justify-around">
        <div className="flex flex-col justify-around">
          {infos[0]}
          {infos[1]}
        </div>
        <div className="flex justify-center items-center">
          <img className="max-w-full" src={nobots} alt="NoBot" />
        </div>
        <div className="flex flex-col justify-around">
          {infos[2]}
          {infos[3]}
        </div>
      </div>
      <p className="text-white text-xl">
        MEV Robots have been extracting profit from the traders and providers up
        to &nbsp;&nbsp;
        <span className="text-5xl align-middle" style={{ color: "#cf6335" }}>
          $ {totalExtractedMEV && (totalExtractedMEV / 1000000).toFixed(1)} M
        </span>
      </p>
    </div>
  );
};

export default NoBots;
