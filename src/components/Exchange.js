import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { ColoredTab, TextTabLink, SocialMedias, TextTab } from ".";
import { useMediaPredicate } from "react-media-hook";
import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import style from "../css/main.css";
import { useCountUp } from "react-countup";
import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { AnimatedButtons, AnimatedIcons } from ".";
import button1 from "../assets/svgs/animatedIcons/one-key.json";
import button1hover from "../assets/svgs/animatedIcons/one-key-hover.json";
import exchange from "../assets/svgs/animatedIcons/exchange.json";
import animation from "../css/animation.css";

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
						style={{fontSize:'26px'}}
					></div>
					%
				</div>
			</foreignObject>
		</svg>
	);
};

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Exchange = ({ iframeLoaded }) => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	let data = {
		title: "ACY FLASH ARBITAGE",
		subtitle: "Protocol Level Arbitage",
		content:
			"A multi-route arbitrage program built in ACY protocol and executed within each transaction, which solves the problem of slippage caused by robot invasion and enables the users make profit automatically.",
	};

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

	const [isHoverButtonOne, setIsHoverButtonOne] = useState(false);
	const [isClickedButtonOne, setIsClickedButtonOne] = useState(false);

	const [isHoverExchange, setIsHoverExchange] = useState(false);

	return (
		<div className = "ExchangeBar">
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonOne(true);
						setIsClickedButtonOne(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonOne(false);
						setIsClickedButtonOne(false);
					}}
					onClick={() => {
						setIsHoverButtonOne(!isHoverButtonOne);
						setIsClickedButtonOne(!isClickedButtonOne);
					}}
				>
					{/* <AnimatedButtons
						url={button1}
						urlhover={button1hover}
						id="button1"
						hover={isHoverButtonOne}
						click={isClickedButtonOne}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>EXCHANGE</span>
					</span> */}
				</div>
			</div>

			<div className="flex border-container items-center justify-between mb-20">
				<div
					className="flex border-container mb-5 md:mb-0 items-center justify-between mr-5 rounded-lg px-5 py-5 h-auto flex-grow mr-20"
					style={{ backgroundColor: "rgba(235, 92, 32, 0.7)" }}
				>
					<div className="flowchart-container">
						<div
							style={{ background: '#000000', borderRadius: '10px', overflow: 'hidden' }}
						>

							<div style={{
								// background: '-webkit-radial-gradient( rgba(127, 127, 127, 0.5), rgba(127, 127, 127, 0.5) 1%, rgba(0, 0, 0, 0.7) )'
							}}>
								<svg viewBox="0 100 600 400" className="px-2">
									<g transform="translate(50,300)">
										<g transform="translate(0,-160)">
											<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
												<foreignObject x="0" y="0" width="260" height="160">
													<Typist cursor={{ show: false }}>
														<span style={{color:'#eb5c20'}} id="algo_title">Global Optimal Algorithm</span>
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

					</div>
					{/* <div className="flex flex-grow text-tab">
						<TextTab
							// title="ACY FLASH ARBITRAGE"
							// content="A multi-route arbitrage program built in ACY protocol and executed within each transaction, which solves the problem of slippage caused by robot invasion and enables the users make profit automatically."
							// color="rgba(235,92,32,0.6)"
							// subtitle="Protocol Level Arbitrage"
							// iframeLoaded={iframeLoaded}
						></TextTab>
					</div> */}
				</div>


			</div>
		</div>
	);
};

export default Exchange;
