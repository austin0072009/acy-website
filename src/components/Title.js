import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import style from "../css/main.css";
import { useCountUp } from "react-countup";
import { useState, useEffect, useRef } from "react";

const PercentHook = ({ value, id, filter }) => {
	useCountUp({
		ref: `counter${id}`,
		duration: 2,
		start: 0,
		end: value,
	});
	return (
		<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
			<foreignObject x="0" y="0" width="160" height="160">
				<div className={`ratios inline-block id-${id}`}>
					<div
						xmlns="http://www.w3.org/1999/xhtml"
						className="inline-block"
						id={`counter${id}`}
					></div>
					%
				</div>
			</foreignObject>
		</svg>
	);
};

const Title = ({ iframeLoaded }) => {
	let [ratio1, setRatio1] = useState("30");
	let [ratio2, setRatio2] = useState("40");
	let [ratio3, setRatio3] = useState("20");

	useEffect(() => {
		setRatio3(parseInt(100 - ratio1 - ratio2));
	}, [ratio2]);

	useEffect(() => {
		let ratio2random = parseInt((Math.random() * 0.1 + 0.4) * 100);
		setRatio2(ratio2random);
	}, [ratio1]);

	useEffect(() => {
		if (!iframeLoaded) return;
		console.log("start");
		setRatio1(parseInt((Math.random() * 0.1 + 0.3) * 100));
		setInterval(() => {
			setRatio1(parseInt((Math.random() * 0.1 + 0.3) * 100));
		}, 8500);
	}, [iframeLoaded]);

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
						<g transform="translate(30,-160)">
							<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
								<foreignObject x="0" y="0" width="160" height="160">
									<Typist cursor={{ show: false }}>
										<span id="algo_title">ACY Algorithm</span>
									</Typist>
								</foreignObject>
							</svg>
						</g>
						<g>
							<path
								id="upcurve"
								d="M0,0
              a220,110 0 1,1 500,0"
								style={{ fill: "none", stroke: "gray", strokeWidth: 3 }}
							/>

							<circle id="sETH" r="20" fill="#70ba33" strokeWidth="0">
								<animate
									id="expandsETH"
									attributeName="r"
									values="0;40"
									dur="2.5s"
									begin="0s;movesETH.end"
								/>
								<animateMotion
									additive="sum"
									id="movesETH"
									attributeName="motion"
									attributeType="XML"
									begin="expandsETH.end"
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
									id="expandsBTC"
									attributeName="r"
									values="0;40"
									dur="2.5s"
									begin="0s;movesBTC.end"
								/>
								<animateMotion
									additive="sum"
									id="movesBTC"
									attributeName="motion"
									attributeType="XML"
									begin="expandsBTC.end"
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

							<circle id="sDOT" r="15" fill="#e29227">
								<animate
									id="expandsDOT"
									attributeName="r"
									values="0;40"
									dur="2.5s"
									begin="0s;movesDOT.end"
								/>
								<animateMotion
									additive="sum"
									id="movesDOT"
									attributeName="motion"
									attributeType="XML"
									begin="expandsDOT.end"
									dur="6s"
								>
									<mpath xlinkHref="#downcurve" />
								</animateMotion>
							</circle>
						</g>
						<g>
							<g
								transform="translate(60,-120)"
								textAnchor="middle"
								alignmentBaseline="middle"
							>
								{" "}
								<PercentHook id="1" value={ratio1} />
							</g>
							<g
								transform="translate(60,-40)"
								textAnchor="middle"
								alignmentBaseline="middle"
							>
								{" "}
								<PercentHook id="2" value={ratio2} />
							</g>
							<g
								transform="translate(60,40)"
								textAnchor="middle"
								alignmentBaseline="middle"
							>
								{" "}
								<PercentHook id="3" value={ratio3} />
							</g>
						</g>

						<g className="coin">
							<g>
								<circle id="USDC" r="40" cx="0" cy="0">
									<animate
										id="contract"
										attributeName="r"
										values="40;30"
										dur="0.5s"
										begin="movesDOT.begin"
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
									textAnchor="middle"
									stroke="white"
									strokeWidth="1px"
									alignmentBaseline="middle"
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
									strokeWidth="2"
								>
									<animate
										id="ETHexpand"
										attributeName="r"
										values="40;50"
										dur="0.25s"
										begin="movesDOT.begin+2.5s"
									/>
									<animate
										id="ETHchangeColor"
										attributeName="fill"
										values="#757579;#70ba33"
										dur="0.25s"
										begin="movesDOT.begin+2.5s"
									/>
									<animate
										id="ETHcontract"
										attributeName="r"
										values="50;40"
										dur="0.25s"
										begin="ETHexpand.end"
									/>
									<animate
										id="ETHchangeColorBack"
										attributeName="fill"
										values="#70ba33;#757579"
										dur="0.25s"
										begin="ETHexpand.end"
									/>
								</circle>
								<text
									x="250"
									y="-125"
									textAnchor="middle"
									stroke="red"
									strokeWidth="1px"
									alignmentBaseline="middle"
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
								>
									<animate
										id="DOTexpand"
										attributeName="r"
										values="40;50"
										dur="0.25s"
										begin="movesDOT.begin+2.5s"
									/>

									<animate
										id="DOTchangeColor"
										attributeName="fill"
										values="#757579;#e29227"
										dur="0.25s"
										begin="movesDOT.begin+2.5s"
									/>
									<animate
										id="DOTcontract"
										attributeName="r"
										values="50;40"
										dur="0.25s"
										begin="DOTexpand.end"
									/>

									<animate
										id="DOTchangeColorBack"
										attributeName="fill"
										values="#e29227;#757579"
										dur="0.25s"
										begin="DOTexpand.end"
									/>
								</circle>
								<text
									x="250"
									y="130"
									textAnchor="middle"
									stroke="red"
									strokeWidth="1px"
									alignmentBaseline="middle"
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
										values="40;55"
										dur="0.25s"
										begin="movesDOT.end-0.5s"
									/>
									<animate
										id="bloat_down"
										attributeName="r"
										values="55;40"
										dur="0.25s"
										begin="bloat_up.end"
									/>
								</circle>
								<text
									x="500"
									y="0"
									text-anchor="middle"
									stroke-width="1px"
									alignmentBaseline="middle"
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
