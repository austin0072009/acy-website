import {
	VideoPanel,
	Title,
	Documentation,
	Governance,
	Exchange,
	Liquidity,
	Farm,
	Launch,
	Market,
} from "../components";
import { Gradient } from "../atoms";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "https://api.acy.finance/";

const Main = () => {
	let [iframeLoaded, setIframeLoaded] = useState(false);
	return (
		
		<div className="relative pb-10">
			<Gradient></Gradient>
			<Title></Title>
			<div className="relative" style={{ zIndex: 1 }}>
				<div className="mt-20 mx-2 mb-20 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-32 lg:px-8">
					{/* <VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel> */}
					<Exchange iframeLoaded={iframeLoaded}></Exchange>
					<Liquidity setIframeLoaded={setIframeLoaded}></Liquidity>
					<Farm></Farm>
					<Launch></Launch>
					<Market></Market>
					<Documentation></Documentation>
					<Governance></Governance>
				</div>
			</div>
		</div>
	);
};

export default Main;
