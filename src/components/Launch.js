import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Countdown from "./CountDown";
import logo from "../assets/logo.svg";
import { AnimatedButtons, AnimatedIcons } from ".";
import { useState } from "react";
import button4 from "../assets/svgs/animatedIcons/four-key.json";
import button4hover from "../assets/svgs/animatedIcons/four-key-hover.json";
import launchBorder from "../assets/svgs/animatedIcons/launchBorder.json";
import lottie from "lottie-web";
import clock from "../assets/svgs/animatedIcons/clock.json";
import { JumpButton } from ".";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Launch = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");


	const [isHoverButtonFour, setIsHoverButtonFour] = useState(false);
	const [isClickedButtonFour, setIsClickedButtonFour] = useState(false);

	const [isHoverLaunchBorder, setIsHoverLaunchBorder] = useState(false);

	React.useEffect(() => {
		lottie.destroy("launch-border");

		lottie.loadAnimation({
			container: document.querySelector("#launch-border"),
			animationData: launchBorder,
			autoplay: isHoverLaunchBorder,
			loop: true,
			name: "launch-border",
		});
		lottie.setSpeed(1, "launch-border");
	}, [isHoverLaunchBorder]);

	const [isHoverClock, setIsHoverClock] = useState(false);

	React.useEffect(() => {
		lottie.destroy("clock");

		lottie.loadAnimation({
			container: document.querySelector("#clock"),
			animationData: clock,
			autoplay: isHoverClock,
			loop: true,
			name: "clock",
		});
		lottie.setSpeed(1, "clock");
	}, [isHoverClock]);
	return (
		<div>
			<div className="flex ">
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
			<div className="mb-10">
				<div className="flex launchpad-container-sm justify-between items-center content-center">
					<div className="flex launchpad-container justify-between flex-grow gap-x-10 mb-5 items-center">
						<div
							className="flex items-center relative"
							style={{
								height: "250px",
								width: "250px",
								left: "-10px",
								position: "relative",
								zIndex: 0,
							}}
							onMouseEnter={() => setIsHoverLaunchBorder(true)}
							onMouseLeave={() => setIsHoverLaunchBorder(false)}
						>
							<div
								style={{
									position: "absolute",
									width: "250px",
									left: 0,
									bottom: "",
								}}
								id="launch-border"
							></div>
							<div
								className="flex flex-col items-center"
								style={{
									width: "250px",
									height: "auto",
									top: "",
									position: "relative",
								}}
							>
								<div className="flex flex-row">
									<img
										src={logo}
										className="mr-3"
										style={{ width: "35px" }}
									></img>
									<p
										className="text-white font-bold"
										style={{ fontSize: "24px" }}
									>
										ACY Finance
									</p>
								</div>

								<p
									className="text-gray-500 font-bold"
									style={{ width: "150px" }}
								>
									Latest solid IDO for your profit
								</p>
							</div>
						</div>

						<div
							className="flex items-center mr-20"
							style={{
								height: "220px",
								borderRadius: "7px",
								maxWidth: "700px",
								backgroundColor: "#252525",
							}}
						>
							<div
								className="flex flex-row px-5 justify-center filter hover:brightness-200"
								onMouseEnter={() => setIsHoverClock(true)}
								onMouseLeave={() => setIsHoverClock(false)}
							>
								<div
									className="mx-5"
									style={{ width: "80px" }}
									id="clock"
								></div>
								<div className="" style={{ margin: "auto", width: "50%" }}>
									<Countdown></Countdown>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	);
};

export default Launch;
