// import "./HappyFarm.css";
import { TextTab } from ".";
import { FarmImage } from ".";

const HappyFarm = () => {
	return (
		<div className="happyFarmBar ">
			{/* <FarmImage /> */}
			<TextTab
				content="There are there kind of farming functions. First one is PREMIER,
							that is to stake your liquidity for BTC，ETH,USDX and the project
							tokens. The second one is STANDARD, that is to stake your
							liquidity for ACY. The third one is ACYDAO, that is to stake your
							ACY token for ACY token."
			></TextTab>
		</div>
	);
};

export default HappyFarm;
