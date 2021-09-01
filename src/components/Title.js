import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import style from "../css/main.css";
import { useCountUp } from "react-countup";
import { useState, useEffect } from "react";

const PercentHook = ({ value, id }) => {
  useCountUp({
    ref: `counter${id}`,
    duration: 1,
    decimals: 2,
    start: 0,
    end: value,
  });
  return (
    <tspan>
      <tspan id={`counter${id}`} />%
    </tspan>
  );
};

const Title = () => {
  let [ratio1, setRatio1] = useState(0);
  let [ratio2, setRatio2] = useState(0);
  let [ratio3, setRatio3] = useState(0);

  useEffect(() => {
    setRatio2((Math.random() * 0.1 + 0.4).toFixed(2));
    setRatio3((1 - ratio1 - ratio2).toFixed(2));
    console.log(ratio1, ratio2, ratio3);
  }, [ratio1]);

  useEffect(() => {
    setRatio1(Math.random());
    setInterval(() => {
      setRatio1((Math.random() * 0.1 + 0.3).toFixed(2));
    }, 8000);
  }, []);

  return (
    <div
      className="pt-5 md:pt-20 relative mb-20 flex flex-col md:flex-row"
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
      <div className="w-auto lg:w-2/5 flex justify-center item-center">
        <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 600 600">
          <g transform="translate(50,300)">
            <g>
              <path
                id="upcurve"
                d="M0,0
              a220,110 0 1,1 500,0"
                style={{ fill: "none", stroke: "gray", strokeWidth: 3 }}
              />

              <circle id="sETH" r="20" fill="#C6224E" stroke-width="0">
                <animate
                  id="expand"
                  attributeName="r"
                  values="0;40"
                  dur="2s"
                  begin="0s;move.end"
                />
                <animateMotion
                  additive="sum"
                  id="move"
                  attributeName="motion"
                  attributeType="XML"
                  begin="expand.end"
                  dur="6s"
                >
                  <mpath xlinkHref="#upcurve" />
                </animateMotion>
              </circle>
            </g>
            <g>
              <path
                id="line"
                d="M0,0 L500,0"
                style={{ fill: "none", stroke: "gray", strokeWidth: 3 }}
              />

              <circle id="sBTC" r="25" fill="#EB5C20">
                <animate
                  id="expand"
                  attributeName="r"
                  values="0;40"
                  dur="2s"
                  begin="0s;move.end"
                />
                <animateMotion
                  additive="sum"
                  id="move"
                  attributeName="motion"
                  attributeType="XML"
                  begin="expand.end"
                  dur="6s"
                >
                  <mpath xlinkHref="#line" />
                </animateMotion>
              </circle>
            </g>
            <g>
              <path
                id="downcurve"
                d="M0,0
              a220,110 0 1,0 500,0"
                style={{ fill: "none", stroke: "gray", strokeWidth: 3 }}
              />

              <circle id="sDOT" r="10" fill="#E29227">
                <animate
                  id="expand"
                  attributeName="r"
                  values="0;40"
                  dur="2s"
                  begin="0s;move.end"
                />
                <animateMotion
                  additive="sum"
                  id="move"
                  attributeName="motion"
                  attributeType="XML"
                  begin="expand.end"
                  dur="6s"
                >
                  <mpath xlinkHref="#downcurve" />
                </animateMotion>
              </circle>
            </g>
            <g className="ratios">
              <text
                x="20"
                y="-100"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                <PercentHook id="1" value={ratio1} />
              </text>
              <text
                x="80"
                y="-20"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                <PercentHook id="2" value={ratio2} />
              </text>
              <text
                x="20"
                y="100"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                <PercentHook id="3" value={ratio3} />
              </text>
            </g>
            <g className="players">
              <text
                x="0"
                y="200"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                Swap
              </text>
              <text
                x="500"
                y="200"
                text-anchor="middle"
                alignment-baseline="middle"
              >
                {" "}
                ACY Pool
              </text>
            </g>
            <g className="coin">
              <g>
                <circle id="USDC" r="40" cx="0" cy="0">
                  <animate
                    id="contract"
                    attributeName="r"
                    values="40;30"
                    dur="0.5s"
                    begin="move.begin"
                  />
                  <animate
                    id="contract_pause"
                    attributeName="r"
                    values="30;30"
                    dur="5.5s"
                    begin="contract.end"
                  />
                </circle>
                <text
                  x="0"
                  y="0"
                  text-anchor="middle"
                  stroke="white"
                  stroke-width="1px"
                  alignment-baseline="middle"
                >
                  {" "}
                  USDC
                </text>
              </g>
              <g>
                <circle
                  id="ETH"
                  r="40"
                  cx="250"
                  cy="-125"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                />
                <text
                  x="250"
                  y="-125"
                  text-anchor="middle"
                  stroke="red"
                  stroke-width="1px"
                  alignment-baseline="middle"
                >
                  {" "}
                  ETH
                </text>
              </g>
              <g>
                <circle
                  id="DOT"
                  r="40"
                  cx="250"
                  cy="130"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                />
                <text
                  x="250"
                  y="130"
                  text-anchor="middle"
                  stroke="red"
                  stroke-width="1px"
                  alignment-baseline="middle"
                >
                  {" "}
                  DOT
                </text>
              </g>
              <g>
                <circle
                  id="BTC"
                  r="40"
                  cx="500"
                  cy="0"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                >
                  <animate
                    id="bloat_up"
                    attributeName="r"
                    values="40;50"
                    dur="0.25s"
                    begin="move.end-0.5s"
                  />
                  <animate
                    id="bloat_down"
                    attributeName="r"
                    values="50;40"
                    dur="0.25s"
                    begin="bloat_up.end"
                  />
                </circle>
                <text
                  x="500"
                  y="0"
                  text-anchor="middle"
                  stroke-width="1px"
                  alignment-baseline="middle"
                >
                  {" "}
                  BTC
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Title;
