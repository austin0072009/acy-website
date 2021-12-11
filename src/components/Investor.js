import React from "react";
import Grapes from "./Grapes";
import { TextTab, JumpButton } from ".";
import "./DualSlidingPanel.css";

const Investor = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col mb-0 md:mb-0 items-center justify-between rounded-lg py-5 h-auto flex-grow">
				<div className="grapes-container" style={{ backgroundColor: "black" }}>
					<Grapes></Grapes>
				</div>
				{/* <div className="mt-3 exchange-content">
			There are there kind of farming functions. First one is PREMIER, that is to stake your liquidity for BTC，ETH,USDX and the project tokens. The second one is STANDARD, that is to stake your liquidity for ACY. The third one is ACYDAO, that is to stake your ACY token for ACY token.
				</div> */}
				<div className="mt-3 exchange-content">
					<TextTab
						title="THE BEST IDO FARM"
						content="There are there kinds of farming functions. The first one is PREMIER, that is to stake your liquidity for BTC, ETH, USDX and the project tokens. The second one is STANDARD, that is to stake your liquidity for ACY. The third one is ACYDAO, that is to stake your ACY token for ACY token."
					/>
				</div>
				<div className="farmLearn">
					<JumpButton
						text={"Farm"}
						links={"http://test.acy.finance/#/farms"}
					></JumpButton>
				</div>
			</div>
		</div>
	);
};

export default Investor;
