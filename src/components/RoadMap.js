import "./RoadMap.css";

import DetailCard from "./DetailCard";
import { Popover, Button } from "antd";

const RoadMap = () => {
	const data = [
		{
			title: "Testnet Launch",
			description:
				"This is a period where we do our testnet testing with our users to get ready for our mainnet launch. The auditing will take some time so as soon as our auditing is finished, then we will launch our mainnet.",
			deliverables:
				"Fully Operable DEX with Flash Arbitrage capability. Functionalities will include swap, liquidity mining, farming and launchpad.",
		},
		{
			title: "Mainnet Launch",
			description:
				"ACY Fiannce will be deployed on Ethereum, BSC, Polygon, Conflux, Avalanche and so on, available for multi chains. It is designated to enable the users trade and operate with lower cost and higher outcome.",
			deliverables:
				"Complete functions of product run on the mainstream blockchains.",
		},
		{
			title: "ACYDAO Launch",
			description:
				"ACYDAO will be launched for users to participate in our stakable DAO! By staking in our DAO and participate in the governance, users will be able to receive a portion of the Flash Arbitrage revenue as a reward. Pro version access means if users have staked enough token, then they will be eligible to use our pro version DEX where the algorithm of Flash Arbitrage is even more optimized than the previous one.",
			deliverables:
				"Deliver ACYDAO with for users to stake, claim rewards, govern, and submit proposal.",
		},
		{
			title: "API/SDK Launch",
			description:
				"ACY services will be available for wider DeFi ecosystem to utilize on their applications or platforms.",
			deliverables:
				"Deliver API/SDK first for other projects to implement ACY data or services onto their platform.",
		},
		{
			title: "Mobile APP Launch",
			description:
				"ACY services will be available in mobile phones with high quality operating experience.",
			deliverables:
				"Deliver the mobile version of the whole product with complete functions.",
		},
	];
	return (
		<div className="flex justify-center">
			<div class="roadmap">
				<div>
					<div class="roadmap-title">Roadmap</div>
				</div>

				<ol class="roadmap-timeline js-roadmap-timeline">
					<li class="roadmap-timeframe js-roadmap-timeframe">
						<DetailCard
							title={data[0].title}
							description={data[0].description}
							deliverables={data[0].deliverables}
						></DetailCard>

						<div class="roadmap-date">December,2021</div>
						<svg
							class="roadmap-swirly"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							preserveAspectRatio="none"
							viewBox="-2 0 54 80"
						>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
						</svg>
						<ul class="roadmap-events">
							<li class="roadmap-event even">
								<div class="roadmap-vline"></div>Testnet Launch
							</li>
						</ul>
					</li>
					<li class="roadmap-timeframe js-roadmap-timeframe">
						<DetailCard
							title={data[1].title}
							description={data[1].description}
							deliverables={data[1].deliverables}
						></DetailCard>
						<div class="roadmap-date">January to March, 2022</div>
						<svg
							class="roadmap-swirly"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							preserveAspectRatio="none"
							viewBox="-2 0 54 80"
						>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
						</svg>
						<ul class="roadmap-events">
							<li class="roadmap-event">
								<div class="roadmap-vline"></div>Mainnet Launch
							</li>
							{/* <li class="roadmap-event"><div class="roadmap-vline"></div>GUI wallet with integrated miner for Windows</li> */}
						</ul>
					</li>

					<li class="roadmap-timeframe js-roadmap-timeframe">
						<DetailCard
							title={data[2].title}
							description={data[2].description}
							deliverables={data[2].deliverables}
						></DetailCard>
						<div class="roadmap-date">April to June, 2022</div>
						<svg
							class="roadmap-swirly"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							preserveAspectRatio="none"
							viewBox="-2 0 54 80"
						>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
						</svg>
						<ul class="roadmap-events">
							<li class="roadmap-event even">
								<div class="roadmap-vline"></div>ACYDAO Launch
							</li>
							{/* <li class="roadmap-event"><div class="roadmap-vline"></div>Community built a block explorer based on original developers code</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Original developer gives the ownership of the project to the community</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Xdag.org is fully operational</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>The original code is being cleaned</li> */}
						</ul>
					</li>

					<li class="roadmap-timeframe js-roadmap-timeframe">
						<div class="roadmap-date">July to September, 2022</div>
						<DetailCard
							title={data[3].title}
							description={data[3].description}
							deliverables={data[3].deliverables}
						></DetailCard>
						<svg
							class="roadmap-swirly"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							preserveAspectRatio="none"
							viewBox="-2 0 54 80"
						>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
							<path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
						</svg>
						<ul class="roadmap-events">
							<li class="roadmap-event">
								<div class="roadmap-vline"></div>API/SDK for ecosystems
							</li>
						</ul>
					</li>

					<li class="roadmap-timeframe js-roadmap-timeframe">
						<div class="roadmap-date">October to December, 2022</div>
						<DetailCard
							title={data[4].title}
							description={data[4].description}
							deliverables={data[4].deliverables}
						></DetailCard>
						{/* <svg class="roadmap-swirly" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" viewBox="-2 0 54 80"><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path><path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path></svg> */}
						<ul class="roadmap-events">
							{/* <li class="roadmap-event"><div class="roadmap-vline"></div>Social media and marketing</li>
            <li class="roadmap-event"><div class="roadmap-vline"></div>Escrow services</li> */}
						</ul>
					</li>
				</ol>
			</div>
		</div>
	);
};

export default RoadMap;
