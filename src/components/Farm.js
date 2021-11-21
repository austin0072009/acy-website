import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { FarmTab } from ".";
import { Link } from "react-router-dom";
import { AnimatedButtons, AnimatedIcons } from ".";
import { useState } from "react";
import farm from "../assets/svgs/animatedIcons/farm.json";
import button3 from "../assets/svgs/animatedIcons/three-key.json";
import button3hover from "../assets/svgs/animatedIcons/three-key-hover.json";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Farm = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverFarm, setIsHoverFarm] = useState(false);

	const [isHoverButtonThree, setIsHoverButtonThree] = useState(false);
	const [isClickedButtonThree, setIsClickedButtonThree] = useState(false);

	return (
		<div>
			<div className="flex ">
				<div
					className="flex items-center text-gray-100 filter grayscale hover:grayscale-0 brightness-200  hover:brightness-100 "
					onMouseEnter={() => {
						setIsHoverButtonThree(true);
						setIsClickedButtonThree(false);
					}}
					onMouseLeave={() => {
						setIsHoverButtonThree(false);
						setIsClickedButtonThree(false);
					}}
					onClick={() => {
						setIsHoverButtonThree(!isHoverButtonThree);
						setIsClickedButtonThree(!isClickedButtonThree);
					}}
				>
					<AnimatedButtons
						url={button3}
						urlhover={button3hover}
						id="button3"
						hover={isHoverButtonThree}
						click={isClickedButtonThree}
					></AnimatedButtons>
					<span
						className="font-medium text-orange moveLROnHover"
						style={{ fontSize: smallerThan568 ? 20 : 26 }}
					>
						<span>FARM</span>
					</span>
				</div>
			</div>
			<div className="mb-5">
				<div className="flex farm-container text-white items-center">
					<div className="flex farm-container-sm flex-row flex-auto justify-between flex-grow mr-20">
						<FarmTab
							title="ACYDAO"
							content="Stake your ACY tokens and earn ACY rewards"
							id="acydao"
						></FarmTab>

						<FarmTab
							title="STANDARD"
							content="Stake your LP tokens and earn ACY token rewards"
							id="standard"
						></FarmTab>

						<FarmTab
							title="PREMIER"
							content="Stake your LP tokens and earn project/solid token rewards"
							id="premier"
						></FarmTab>
					</div>

					<div className="flex flex-col items-center flex-none">
						<div
							className="filter hover:brightness-200 mb-5 flex flex-col items-center justify-center ml-5"
							style={{ width: "120px" }}
							onMouseEnter={() => setIsHoverFarm(true)}
							onMouseLeave={() => setIsHoverFarm(false)}
						>
							<div className="grid place-items-center animated-button mb-3 ">
								<AnimatedIcons
									play={isHoverFarm}
									url={farm}
									id="farm"
								></AnimatedIcons>
							</div>
							<span
								className="px-5 py-1 text-ms border-solid border-1 border cursor-pointer border-gray-500 rounded-3xl font-medium text-white"
								style={{ textDecoration: "none" }}
								onClick={() => {
									openInNewTab("https://test.acy.finance/#/farms");
								}}
							>
								Farm Now
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farm;
