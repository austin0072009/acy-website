import React from "react";
import Grapes from "./Grapes";
import { TextTab } from ".";

const Investor = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col mb-0 md:mb-0 items-center justify-between rounded-lg px-5 py-5 h-auto flex-grow">
				{/* <Grapes /> */}
				<div className="flex flex-grow text-tab" style={{ width: "auto" }}>
					<TextTab
						title="STABLE AND DURATIVE FARMING RETURN"
						content="There are there kinds of farming functions. First one is PREMIER, that is to stake your liquidity for BTC, ETH, USDX and the project tokens. The second one is STANDARD, that is to stake your liquidity for ACY. The third one is ACYDAO, that is to stake your ACY token for ACY token."
					/>
				</div>
			</div>
		</div>
	);
};

export default Investor;
