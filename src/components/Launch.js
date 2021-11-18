import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Countdown from "./CountDown";
import logo from "../assets/logo.svg";
import { AnimatedIcons } from ".";
import { useState } from "react";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Launch = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHover, setIsHover] = useState(false);

	return (
		<div>
			<div className="flex items-center text-gray-100 mb-5 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100">
				<img
					src={arrowBullet}
					style={{ maxWidth: 40 }}
					alt="arrow"
					className="mr-3 moveLROnHover "
				/>
				<span
					className="font-medium text-orange"
					style={{ fontSize: smallerThan568 ? 20 : 26 }}
				>
					LAUNCH
				</span>
			</div>
			<div container>
				<div className="flex flex-row justify-between items-center">
					<div className="flex flex-row items-center">
						<img src={logo} className="px-5" style={{ width: "60px" }}></img>
						<p className="text-white font-bold text-3xl">ACY Finance</p>
					</div>
					<div>
						<Countdown></Countdown>
					</div>
					<div
						className="flex flex-col items-center"
						style={{ color: "rgb(198, 34, 78)" }}
					>
						<p>Latest solid IDO for your profit</p>
						<div
							className="filter hover:brightness-200 cursor-pointer mb-5 flex flex-col items-center justify-center"
							onMouseEnter={() => setIsHover(true)}
							onMouseLeave={() => setIsHover(false)}
						>
							<div className="grid place-items-center">
								<AnimatedIcons play={isHover}></AnimatedIcons>
							</div>
							<p
								className="px-5 py-1 text-lg border-solid border-1 border border-red-900 rounded-3xl text-white"
								style={{ textDecoration: "none" }}
								onClick={() => {
									openInNewTab("https://test.acy.finance/#/launchpad");
								}}
							>
								Participate Now
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Launch;
