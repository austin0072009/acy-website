import { isMobile } from "react-device-detect";
import Typist from "react-typist";
import { useCountUp } from "react-countup";
import React, { useState, useEffect, useRef } from "react";
import fireworks1 from "../assets/svgs/animatedIcons/fireworks1.json";
import fireworks2 from "../assets/svgs/animatedIcons/fireworks2.json";
import fireworks3 from "../assets/svgs/animatedIcons/fireworks3.json";
import lottie from "lottie-web";
import exchange from "../assets/svgs/animatedIcons/exchange.json";
import animation from "../css/animation.css";
import { AnimatedButtons, AnimatedIcons , AnimatedBorders} from ".";
import liquidity from "../assets/svgs/animatedIcons/liquidity.json";
import farm from "../assets/svgs/animatedIcons/farm.json";
import rocket from "../assets/svgs/animatedIcons/launch.json";
import market from "../assets/svgs/animatedIcons/market.json";
import bannerBorder from "../assets/svgs/animatedIcons/bannerBorder.json";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import appIcon from "../assets/svgs/animatedIcons/appIcon.json";








const Title = () => {

	const [isHoverExchange, setIsHoverExchange] = useState(false);
	const [isHoverLiquidity, setIsHoverLiquidity] = useState(false);
	const [isHoverFarm, setIsHoverFarm] = useState(false);
	const [isHoverLaunch, setIsHoverLaunch] = useState(false);
	const [isHoverMarket, setIsHoverMarket] = useState(false);
	const [isHoverFire1, setIsFire1] = useState(false);
	const [isHoverAppIcon, setIsHoverAppIcon] = useState(false);





	
	const explode1 = () => {
		lottie.destroy("fireworks1");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks1"),
			animationData: fireworks1,
			autoplay: true,
			loop: false,
			name: "fireworks1",
		});
	};
	const explode2 = () => {
		lottie.destroy("fireworks2");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks2"),
			animationData: fireworks2,
			autoplay: true,
			loop: false,
			name: "fireworks2",
		});
	};

	const explode3 = () => {
		lottie.destroy("fireworks3");
		lottie.loadAnimation({
			container: document.querySelector("#fireworks3"),
			animationData: fireworks3,
			autoplay: true,
			loop: false,
			name: "fireworks3",
		});
	};

	const gridFollow = () => {
		lottie.loadAnimation({
			container: document.querySelector("#grid1"),
			animationData: bannerBorder,
			autoplay: true,
			loop: true,
			name: "grid1",
		});
	}


	// React.useEffect(() => {
	// 	setTimeout(() => explode1(), 2000);
	// 	setTimeout(() => explode2(), 2500);
	// 	setTimeout(() => explode3(), 3000);
	// }, []);

	// useEffect(() => {
	// 	gridFollow();
	// },[])

	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};



	return (
		
		<div
			className=" banner min-w-full"
			style={{ zIndex: 0 }}
		>

				{/* <div
					className=""
					style={{
						position: "relative",
						left: "0px",
						right: "0px",
						top: "0px",
						width: "1000px",
						height: "1000px"
					}}
					id="grid1"
				></div> */}

			<div
				className="w-full md:w-3/5 relative h-96"
				// style={{ minHeight: isMobile ? "auto" : "20vw", zIndex: 1 }}
			>
				
				<p className="text-5xl md:text-4xl lg:text-5xl lg:leading-normal text-white my-10 ">
					<Typist cursor={{ hideWhenDone: true }}>
						<strong className = 'bannerTitle' >ACY PROTOCOL</strong>
					</Typist>
				</p>
				<strong className="text-justify  w-100 xl:w-5/6 text-red my-10 leading-10 text-4xl">
					A decentralized crypto trading protocol enables the most profitable 
					and protected operation.
				</strong>
				{/* <button className = 'dotbutton'>

				</button>
				<div className="animatebutton">
						<div
							// className="filter hover:brightness-200 mb-5 animatebutton justify-center animated-button-container"
							onMouseEnter={() => setIsFire1(true)}
							onMouseLeave={() => setIsFire1(false)}
						>
							<div className="animated-button">
								<AnimatedIcons
									play={isHoverFire1}
									url={fireworks1}
									id="firework1"
								></AnimatedIcons>
							</div>
							<div
								className="animatelabel"
					
								onClick={() => {
									openInNewTab("https://test.acy.finance/#/liquidity");
								}}
							>
								Liquidity 
							</div>
						</div>
					</div> */}

				{/* <div
					className=""
					style={{
						position: "absolute",
						left: "300px",
						right: "0px",
						top: "0px",
						width: "250px",
					}}
					id="fireworks1"
				></div>
				<div
					className=""
					style={{
						position: "absolute",
						left: "425px",
						right: 0,
						top: "0px",
						width: "250px",
					}}
					id="fireworks2"
				></div>
				<div
					className=""
					style={{
						position: "absolute",
						left: "550px",
						right: 0,
						top: "0px",
						width: "250px",
					}}
					id="fireworks3"
				></div> */}
			</div>

			<div className = "animatebar ">
				<div className="animatebutton"
												onClick={() => {
													openInNewTab("https://test.acy.finance/#/exchange");
												}}>
						<div
							// className="filter hover:brightness-200  mb-5 animatebutton justify-center animated-button-container"
							onMouseEnter={() => setIsHoverExchange(true)}
							onMouseLeave={() => setIsHoverExchange(false)}
						>
							<div className="animated-button">
								<AnimatedIcons
									play={isHoverExchange}
									url={exchange}
									id="exchange"
								></AnimatedIcons>
							</div>
							<div
								className="animatelabel"
							>
								Exchange 
							</div>
						</div>
					</div>
				<div className="animatebutton"
				onClick={() => {
									openInNewTab("https://test.acy.finance/#/liquidity");
								}}>
						<div
							// className="filter hover:brightness-200 mb-5 animatebutton justify-center animated-button-container"
							onMouseEnter={() => setIsHoverLiquidity(true)}
							onMouseLeave={() => setIsHoverLiquidity(false)}
						>
							<div className="animated-button">
								<AnimatedIcons
									play={isHoverLiquidity}
									url={liquidity}
									id="liquidity"
								></AnimatedIcons>
							</div>
							<div
								className="animatelabel"
					
								
							>
								Liquidity 
							</div>
						</div>
					</div>
				<div className="animatebutton"
				onClick={() => {
										openInNewTab("https://test.acy.finance/#/farms");
									}}>
							<div
								// className="filter hover:brightness-200 animatebutton justify-center mr-5"
								onMouseEnter={() => setIsHoverFarm(true)}
								onMouseLeave={() => setIsHoverFarm(false)}
							>
								<div className="animated-button">
									<AnimatedIcons
										play={isHoverFarm}
										url={farm}
										id="farm"
									></AnimatedIcons>
								</div>
								<div
									className="animatelabel"
							
									
								>
									Farm 
								</div>
							</div>
						</div>
				<div className="animatebutton"	
				onClick={() => {
										openInNewTab("https://test.acy.finance/#/launchpad");
									}}>
							<div
								// className="filter hover:brightness-200 mb-5 animatebutton justify-center animated-button-container"
								onMouseEnter={() => setIsHoverLaunch(true)}
								onMouseLeave={() => setIsHoverLaunch(false)}
							>
								<div className="animated-button ">
									<AnimatedIcons
										play={isHoverLaunch}
										url={rocket}
										id="rocket"
									></AnimatedIcons>
								</div>
								<div
									className="animatelabel"
								
								
								>
									Launch 
								</div>
							</div>
						</div>
				<div className="animatebutton"	onClick={() => {
									openInNewTab("https://test.acy.finance/#/market");
								}}>
						<div
							// className="filter hover:brightness-200 mb-5 animatebutton justify-center animated-button-container"
							onMouseEnter={() => setIsHoverMarket(true)}
							onMouseLeave={() => setIsHoverMarket(false)}
						>
							<div className="animated-button">
								<AnimatedIcons
									play={isHoverMarket}
									url={market}
									id="market"
								></AnimatedIcons>
							</div>
							<div
								className="animatelabel"
						
							
							>
								Market 
							</div>
						</div>
					</div>
			</div>
		</div>
	);
};

export default Title;
