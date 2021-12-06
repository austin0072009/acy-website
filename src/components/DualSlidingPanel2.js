import "./style.css";
import "./DualSlidingPanel.css";
import { useState } from "react";
import { SpaceLoader, TextTab, Investor } from ".";
import HappyFarm from "./HappyFarm";
import { Space } from "antd";

const DualSlidingPanel2 = () => {
	return (
		<div class="panel-container-2">
			<section class="panels">
				<article class="panels__side panels2__side--left">
					<div class="panels__side panels2__side--inner-left">
						{/* <p>"Changes and progress very rarely are gifts from above. They come out of struggles from below."</p> */}
						<SpaceLoader></SpaceLoader>
					</div>
					<div class="panels__side panels__side--inner flex-col">
						<h1 class="panels__headline">CRYPTO FARMER</h1>
						<p>Enable farmers to earn the stable return</p>
						<svg
							id = "clickleft2"

							class="arrow arrow--left arrow-2"
							width="40"
							height="40"
							viewBox="0 0 24 24"
						>
							<path d="M0 0h24v24h-24z" fill="none" />
							<path d="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z" />
						</svg>
					</div>
				</article>
				<article class="panels__side panels2__side--right">
					<div class="panels__side panels__side--inner flex-col">
						<h1 class="panels__headline">CRYPTO INVESTOR</h1>
						<p>Enable investors to seek the amazing profit</p>
						<svg
							id = "clickright2"
							class="arrow arrow--right arrow-2"
							width="40"
							height="40"
							viewBox="0 0 24 24"
						>
							<path d="M0 0h24v24h-24z" fill="none" />
							<path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z" />
						</svg>
					</div>
					<div class="panels__side panels2__side--inner-right">
						{/* <p>"The biggest benefit of Apollo was the inspiration it gave to a growing generation to get into science and aerospace."</p> */}
						{/* <HappyFarm></HappyFarm> */}
						<Investor></Investor>
					</div>
				</article>
			</section>
		</div>
	);
};

export default DualSlidingPanel2;
