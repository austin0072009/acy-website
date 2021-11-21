import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Countdown from "./CountDown";
import logo from "../assets/logo.svg";
import { AnimatedButtons, AnimatedIcons } from ".";
import { useState } from "react";
import rocket from "../assets/svgs/animatedIcons/launch.json";
import button4 from "../assets/svgs/animatedIcons/four-key.json";
import button4hover from "../assets/svgs/animatedIcons/four-key-hover.json";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Launch = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverLaunch, setIsHoverLaunch] = useState(false);

	const [isHoverButtonFour, setIsHoverButtonFour] = useState(false);
	const [isClickedButtonFour, setIsClickedButtonFour] = useState(false);

	return (
		<div>
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 mb-5 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonFour(true);
						setIsClickedButtonFour(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonFour(false);
						setIsClickedButtonFour(false);
					}}
					onClick={() => {
						setIsHoverButtonFour(!isHoverButtonFour);
						setIsClickedButtonFour(!isClickedButtonFour);
					}}
				>
					<AnimatedButtons
						url={button4}
						urlhover={button4hover}
						id="button4"
						hover={isHoverButtonFour}
						click={isClickedButtonFour}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>LAUNCH</span>
					</span>
				</div>
			</div>
			<div className="">
				<div className="flex farm-container-sm justify-between items-center">
					<div className="flex launchpad-container flex-row justify-between flex-grow gap-x-10 mb-5">
						<div className="flex flex-col items-center">
							<div className="flex flex-row items-center">
								<img
									src={logo}
									className="px-2"
									style={{ width: "50px" }}
								></img>
								<p className="text-white font-bold text-2xl px-2">
									ACY Finance
								</p>
							</div>
							<p className="text-gray-500 font-bold">
								Latest solid IDO for your profit
							</p>
						</div>

						<div className="flex-grow">
							<Countdown></Countdown>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<div
							className="filter hover:brightness-200 cursor-pointer mb-5 flex flex-col items-center justify-center animated-button-container"
							onMouseEnter={() => setIsHoverLaunch(true)}
							onMouseLeave={() => setIsHoverLaunch(false)}
						>
							<div className="grid place-items-center animated-button mb-3">
								<AnimatedIcons
									play={isHoverLaunch}
									url={rocket}
									id="rocket"
								></AnimatedIcons>
							</div>
							<span
								className="px-5 py-1 text-ms border-solid border-1 border border-gray-500 rounded-3xl text-white"
								style={{ textDecoration: "none" }}
								onClick={() => {
									openInNewTab("https://test.acy.finance/#/launchpad");
								}}
							>
								Launch Now
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
