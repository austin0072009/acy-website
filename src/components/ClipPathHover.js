import React from "react";
import "./ClipPathHover.css";
import { useRef, useEffect, useState } from "react";
import OxBull from "../assets/svgs/clipPathHover/Oxbull.svg";
import LightningProtocol from "../assets/svgs/clipPathHover/LightningProtocol.svg";
import Hoppy from "../assets/svgs/clipPathHover/Hoppy.png";
import Krystal from "../assets/svgs/clipPathHover/krystal.svg";
import DAOStarter from "../assets/svgs/clipPathHover/DAOStarter.svg";
import DFIStarter from "../assets/svgs/clipPathHover/DFIStarter.svg";
import BSCMemePad from "../assets/svgs/clipPathHover/BSCMemePad.svg";
import ZBSCapital from "../assets/svgs/clipPathHover/ZBSCapital.svg";
import Chainlink from "../assets/svgs/clipPathHover/Chainlink.svg";
import Erax from "../assets/svgs/clipPathHover/Erax.svg";
import R8Capital from "../assets/svgs/clipPathHover/R8Capital.svg";
import PlutoCapital from "../assets/svgs/clipPathHover/PlutoCapital.svg";
import Conflux from "../assets/svgs/clipPathHover/Conflux.svg";
import Mobius from "../assets/svgs/clipPathHover/Mobius.svg";
import TokenInsight from "../assets/svgs/clipPathHover/TokenInsight.svg";
import Coindesk from "../assets/svgs/clipPathHover/Coindesk.svg";

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const ClipPathHover = () => {
	var items = [];
	const svg_logo = useRef(null);

	useEffect(() => {
		// Update the document title using the browser API
		console.log(svg_logo.current);
		var point = svg_logo.current.createSVGPoint();

		function getCoordinates(e, svg) {
			point.x = e.clientX;
			point.y = e.clientY;
			return point.matrixTransform(svg.getScreenCTM().inverse());
		}
		function changeColor(e) {
			document.body.className = e.currentTarget.className;
		}

		function Item(config) {
			Object.keys(config).forEach(function (item) {
				this[item] = config[item];
			}, this);
			this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
			this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
		}

		Item.prototype = {
			update: function update(c) {
				this.clip.setAttribute("cx", c.x);
				this.clip.setAttribute("cy", c.y);
			},
			mouseMoveHandler: function mouseMoveHandler(e) {
				this.update(getCoordinates(e, this.svg));
			},
			touchMoveHandler: function touchMoveHandler(e) {
				e.preventDefault();
				var touch = e.targetTouches[0];
				if (touch) return this.update(getCoordinates(touch, this.svg));
			},
		};

		[].slice
			.call(document.querySelectorAll(".item"), 0)
			.forEach(function (item, index) {
				items.push(
					new Item({
						el: item,
						svg: item.querySelector("svg"),
						clip: document.querySelector("#clip-" + index + " circle"),
					})
				);
			});

		[].slice
			.call(document.querySelectorAll("button"), 0)
			.forEach(function (button) {
				button.addEventListener("click", changeColor);
			});

		//See more button
		// function triggerSeeMore() {
		// 	let more = document.querySelector(".more");

		// 	more.addEventListener("click", function () {
		// 		more.parentNode.classList.toggle("active");
		// 	});
		// }
		// triggerSeeMore();
	});
	// const triggerActive = e => {
	// 	const parentDiv = e.target.parentNode;
	// 	parentDiv.classList.toggle("active");
	// };
	const [isActive, setIsActive] = useState("false");
	// const triggerActive = () => {
	// 	setIsActive(!isActive);
	// };
	// useEffect(() => {}, [isActive]);

	return (
		<div className="clip-path-hover mb-40">
			<div className="backers-title">Backer</div>

			<main
				className={
					isActive ? "clippath-container" : "clippath-container active"
				}
			>
				<div className="content">
					<div class="items">
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://www.oxbull.tech");
							}}
						>
							<svg
								id="oxbull"
								ref={svg_logo}
								preserveAspectRatio="xMidYMid slice"
								viewBox="0 0 300 200"
							>
								<defs>
									<clipPath id="clip-0">
										<circle
											cx="-0.27272728085517883"
											cy="57.8863639831543"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									OXbull
								</text>
								<g clip-path="url(#clip-0)">
									<rect width="300" height="200" fill="black" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={OxBull}
									></image>

									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* OXbull */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://lightningprotocol.finance/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-1">
										<circle
											cx="23.727272033691406"
											cy="69.88636016845703"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Lightning Protocol
								</text>
								<g clip-path="url(#clip-1)">
									<rect width="300" height="200" fill="#182035" />
									<image
										height="80%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={LightningProtocol}
										y="20"
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* Lightning Protocol */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://www.hoppy-meme.co/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-2">
										<circle
											cx="27.727272033691406"
											cy="90.88636016845703"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									HOPPY
								</text>
								<g clip-path="url(#clip-2)">
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Hoppy}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* HOPPY */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://krystal.app/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-3">
										<circle
											cx="2.7272727489471436"
											cy="76.70454406738281"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Krystal
								</text>
								<g clip-path="url(#clip-3)">
									<rect width="300" height="200" fill="black" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="80%"
										href={Krystal}
										x="30"
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* Krystal */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://daostarter.pro/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-4">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									DAOStarter
								</text>
								<g clip-path="url(#clip-4)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={DAOStarter}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* DAOStarter */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://dfistarter.io/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-5">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									DFIStarter
								</text>
								<g clip-path="url(#clip-5)">
									<rect width="300" height="200" fill="black" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={DFIStarter}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* DFIStarter */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://www.bscmemepad.com/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-6">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									BSC Meme Pad
								</text>
								<g clip-path="url(#clip-6)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={BSCMemePad}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* BSC Meme Pad */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://zbs.capital/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-7">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									ZBS Capital
								</text>
								<g clip-path="url(#clip-7)">
									<rect width="300" height="200" fill="black" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={ZBSCapital}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* ZBS Capital */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://chain.link/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-8">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Chainlink
								</text>
								<g clip-path="url(#clip-8)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Chainlink}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* Chainlink*/}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://erax.io/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-9">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Erax
								</text>
								<g clip-path="url(#clip-9)">
									<rect width="300" height="200" fill="black" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Erax}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* Erax */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("http://www.r8.capital/");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-10">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									R8 Capital
								</text>
								<g clip-path="url(#clip-10)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={R8Capital}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* R8 Capital */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("");
							}}
						>
							<svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">
								<defs>
									<clipPath id="clip-11">
										<circle cx="0" cy="0" fill="#000" r="125px"></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Pluto Capital
								</text>
								<g clip-path="url(#clip-11)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={PlutoCapital}
									></image>
									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* Pluto Capital */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://confluxnetwork.org/");
							}}
						>
							<svg
								ref={svg_logo}
								preserveAspectRatio="xMidYMid slice"
								viewBox="0 0 300 200"
							>
								<defs>
									<clipPath id="clip-12">
										<circle
											cx="-0.27272728085517883"
											cy="57.8863639831543"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Conflux
								</text>
								<g clip-path="url(#clip-12)">
									<rect width="300" height="200" fill="#100628" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Conflux}
									></image>

									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* OXbull */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://mobius.finance/");
							}}
						>
							<svg
								ref={svg_logo}
								preserveAspectRatio="xMidYMid slice"
								viewBox="0 0 300 200"
							>
								<defs>
									<clipPath id="clip-13">
										<circle
											cx="-0.27272728085517883"
											cy="57.8863639831543"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Mobius
								</text>
								<g clip-path="url(#clip-13)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Mobius}
									></image>

									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* OXbull */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://tokeninsight.com/");
							}}
						>
							<svg
								ref={svg_logo}
								preserveAspectRatio="xMidYMid slice"
								viewBox="0 0 300 200"
							>
								<defs>
									<clipPath id="clip-14">
										<circle
											cx="-0.27272728085517883"
											cy="57.8863639831543"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									TokenInsight
								</text>
								<g clip-path="url(#clip-14)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={TokenInsight}
									></image>

									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* OXbull */}
									</text>
								</g>
							</svg>
						</div>
						<div
							class="item"
							onClick={() => {
								openInNewTab("https://www.coindesk.com/");
							}}
						>
							<svg
								ref={svg_logo}
								preserveAspectRatio="xMidYMid slice"
								viewBox="0 0 300 200"
							>
								<defs>
									<clipPath id="clip-15">
										<circle
											cx="-0.27272728085517883"
											cy="57.8863639831543"
											fill="#000"
											r="125px"
										></circle>
									</clipPath>
								</defs>
								<text class="svg-text" dy=".3em" x="50%" y="50%">
									Coindesk
								</text>
								<g clip-path="url(#clip-15)">
									<rect width="300" height="200" fill="white" />
									<image
										height="100%"
										preserveAspectRatio="xMinYMin slice"
										width="100%"
										href={Coindesk}
									></image>

									<text class="svg-masked-text" dy=".3em" x="50%" y="50%">
										{/* OXbull */}
									</text>
								</g>
							</svg>
						</div>
					</div>
				</div>
				<a className="more" onClick={() => setIsActive(!isActive)}></a>
			</main>
		</div>
	);
};

export default ClipPathHover;
