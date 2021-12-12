import React from "react";
import arrowBullet from "../assets/svgs/bullets/arrow_bullet.svg";
import { useMediaPredicate } from "react-media-hook";
import { TextTab, VideoPanel } from ".";
import { useState } from "react";
import { AnimatedButtons, AnimatedIcons } from ".";
import button2 from "../assets/svgs/animatedIcons/two-key.json";
import button2hover from "../assets/svgs/animatedIcons/two-key-hover.json";
import liquidity from "../assets/svgs/animatedIcons/liquidity.json";
import { JumpButton } from ".";
import "./DualSlidingPanel.css";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const Liquidity = ({ setIframeLoaded }) => {
	let smallerThan568 = useMediaPredicate("(max-width: 567px)");

	const [isHoverLiquidity, setIsHoverLiquidity] = useState(false);
	const [isHoverButtonTwo, setIsHoverButtonTwo] = useState(false);
	const [isClickedButtonTwo, setIsClickedButtonTwo] = useState(false);

	return (
		<div className="LiquidityBar">
			<div className="flex items-center justify-between">
				<div className="flex flex-col mb-0 md:mb-0 items-center justify-between rounded-lg flex-grow py-5">
					<div className="px-5 py-4">
						<div className="video-animation-container">
							<VideoPanel
								setIframeLoaded={setIframeLoaded}
								style={
									{
										// maxHeight: isMobile ? "700px" : "1000px",
										// width: "595px",
										// position: "relative",
										// height: "386px",
										// top: "-55px",
									}
								}
							></VideoPanel>
						</div>
					</div>

					<div className="flex flex-grow text-tab" style={{ width: "auto" }}>
						<TextTab
							title="LIQUIDITY AS A SERVICE"
							content="In DeFi 2.0, ACY Finance is trying to build long-term pools of ‘Protocol Owned Liquidity’. The key of this solution is the Flash Arbitrage Revenue. 20% of this revenue will turn into POL for long."
							color="rgba(28,153,101,0.6)"
							subtitle="Protocol Owned Liquidity"
							link="https://test.acy.finance/#/liquidity"
							linkName="Add Now"
						></TextTab>
					</div>
					<div className="liquidityLearn">
						<JumpButton
							text={"Liquidity"}
							links={"http://test.acy.finance/#/liquidity"}
						></JumpButton>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Liquidity;
