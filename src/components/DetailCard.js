import React from "react";
const DetailCard = ({ title, timeline, description, deliverables }) => {
	return (
		<div className="DetailCard border-2 border-red-500 border-solid">
			<div className="DetailCardTitle">Start - Testnet Launch</div>
			<div className="DetailCardTimeline">Timeline: December, 2021</div>
			<div className="DetailCardDescription">
				Description: This is a period where we do our testnet testing with our
				users to get ready for our mainnet launch. The auditing will take some
				time so as soon as our auditing is finished, then we will launch our
				mainnet.
			</div>
			<div className="DetailCardDeliverables">
				Deliverables: Fully Operable DEX with Flash Arbitrage capability.
				Functionalities will include swap, liquidity mining, farming and
				launchpad.
			</div>
		</div>
	);
};

export default DetailCard;
