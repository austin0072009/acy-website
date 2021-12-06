import React from "react";
import Grapes from "./Grapes";

const Investor = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col items-center justify-between px-5 py-5">
				<div style={{ height: "100px" }}></div>
				<div className="mt-3 exchange-content">
					There are there kind of farming functions. First one is PREMIER, that
					is to stake your liquidity for BTC，ETH,USDX and the project tokens.
					The second one is STANDARD, that is to stake your liquidity for ACY.
					The third one is ACYDAO, that is to stake your ACY token for ACY
					token.
				</div>
			</div>
		</div>
	);
};

export default Investor;
