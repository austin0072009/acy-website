import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { FarmTab } from ".";
import { Link } from "react-router-dom";
import { AnimatedIcons } from ".";
import { useState } from "react";
import farm from "../assets/svgs/animatedIcons/farm.json";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Farm = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverFarm, setIsHoverFarm] = useState(false);

	return (
		<div>
			<div className="flex items-center text-gray-100 mb-10 filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100">
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
					FARM
				</span>
			</div>
			<div className="mb-5">
				<div className="flex flex-row justify-between text-white items-center">
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
					<div className="flex flex-col items-center">
						<div
							className="filter hover:brightness-200 cursor-pointer mb-5 flex flex-col items-center justify-center"
							onMouseEnter={() => setIsHoverFarm(true)}
							onMouseLeave={() => setIsHoverFarm(false)}
						>
							<div
								className="grid place-items-center"
								style={{ width: "100px", height: "100px" }}
							>
								<AnimatedIcons
									play={isHoverFarm}
									url={farm}
									id="farm"
								></AnimatedIcons>
							</div>
							<span
								className="px-5 py-1 text-xl border-solid border-1 border border-gray-500 rounded-3xl font-medium text-white"
								style={{ textDecoration: "none" }}
								onClick={() => {
									openInNewTab("https://test.acy.finance/#/farms");
								}}
							>
								Farm now
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farm;
