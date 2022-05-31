import React from "react";
import button5 from "../assets/svgs/animatedIcons/five-key.json";
import button5hover from "../assets/svgs/animatedIcons/five-key-hover.json";
import { useMediaPredicate } from "react-media-hook";
import { useState } from "react";
import { AnimatedButtons, AnimatedIcons } from ".";
import borderRight from "../assets/svgs/animatedIcons/borderRight.json";
import borderLeft from "../assets/svgs/animatedIcons/borderLeft.json";
import borderHorizontal from "../assets/svgs/animatedIcons/borderHorizontal.json";
import { AnimatedBorders } from ".";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Market = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");
	const [isHoverButtonFive, setIsHoverButtonFive] = useState(false);
	const [isClickedButtonFive, setIsClickedButtonFive] = useState(false);


	return (
		<div>
			<div className="flex">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonFive(true);
						setIsClickedButtonFive(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonFive(false);
						setIsClickedButtonFive(false);
					}}
					onClick={() => {
						setIsHoverButtonFive(!isHoverButtonFive);
						setIsClickedButtonFive(!isClickedButtonFive);
					}}
				>
					<AnimatedButtons
						url={button5}
						urlhover={button5hover}
						id="button5"
						hover={isHoverButtonFive}
						click={isClickedButtonFive}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>MARKET</span>
					</span>
				</div>
			</div>
			<div className="flex farm-container items-center justify-between mb-20">
				<div className="flex farm-container-sm flex-row flex-grow justify-between mr-10">
					<AnimatedBorders
						title={"TOKENS"}
						content={"Tokens' price, volume, and TVL in the market."}
						url={borderRight}
						id={"right"}
					></AnimatedBorders>
					<AnimatedBorders
						title={"POOLS"}
						content={"Pools' volume 24H, volume 7D, and TVL in the market."}
						url={borderHorizontal}
						id={"top"}
					></AnimatedBorders>
					<AnimatedBorders
						title={"ACCOUNTS"}
						content={"Accounts' positions, volume and value in the market."}
						url={borderLeft}
						id={"horizontal"}
					></AnimatedBorders>
				</div>

			</div>
		</div>
	);
};

export default Market;
