import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { FarmTab } from ".";
import { Link } from "react-router-dom";

const Farm = () => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

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
					FARM
				</span>
			</div>
			<div className="container border-solid border-blue-900 border-2 mb-5 px-2">
				<p
					className="mb-0 text-right px-5"
					style={{ color: "rgb(30, 93, 145)" }}
				>
					Reward the BTC,ETH,USDX
				</p>
				<div className="flex flex-row  justify-between px-10 text-white">
					<FarmTab
						title="ACYDAO"
						content="Stake your ACY tokens and earn ACY rewards"
					></FarmTab>

					<FarmTab
						title="STANDARD"
						content="Stake your LP tokens and earn ACY token rewards
						"
					></FarmTab>

					<FarmTab
						title="PREMIER"
						content="Stake your LP tokens and earn project/other token rewards"
					></FarmTab>
				</div>
				<div className="grid place-items-center">
					<div className="filter hover:brightness-200 cursor-pointer mb-5">
						<Link to="/governance">
							<span
								className="px-5 py-1 text-xl border-solid border-1 border border-blue-900 rounded-3xl font-medium text-white"
								style={{ textDecoration: "none" }}
							>
								Read More
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Farm;
