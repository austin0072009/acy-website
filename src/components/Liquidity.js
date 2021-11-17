import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { TextTab, VideoPanel } from ".";

const Liquidity = ({ setIframeLoaded }) => {
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
					LIQUIDITY
				</span>
			</div>
			<div className="flex flex-col items-center h-3/5 md:flex-row gap-x-5 gap-y-0 mb-10">
				<div className="">
					<TextTab
						title="LIQUIDITY AS A SERVICE"
						content="In DeFi 2.0, ACY Finance is trying to build long-term pools of ‘Protocol Owned Liquidity’. The key of this solution is the Flash Arbitrage Revenue. 20% of this revenue will turn into POL for long."
						color="rgba(28,153,101,0.6)"
						subtitle="Protocol Owned Liquidity"
						link="https://test.acy.finance/#/liquidity"
						linkName="Add Now"
					></TextTab>
				</div>
				<div className="md:w-full">
					<div>
						<VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Liquidity;
