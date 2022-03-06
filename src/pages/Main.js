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
	NeuroSynth,
	RollingText,
	DualSlidingPanel,
	RoadMap,
	ClipPathHover,
	WordRotation,
	Rotating,
	DualSlidingPanel2,
	RollingText3D,
	ClaimDialog
} from "../components";
import { Gradient } from "../atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import CutCornerButton from "../components/CutCornerButton";

axios.defaults.baseURL = "https://api.acy.finance/";

// if (document.readyState === 'complete') NeuroSynth();
// else window.addEventListener('load', NeuroSynth());

// var Panels = (function () {

// 	var init = function () {
// 		panelLeft = document.querySelector(".panels__side--left");
// 		panelRight = document.querySelector(".panels__side--right");
// 		clickleft = document.getElementById("clickleft");
// 		clickright = document.getElementById("clickright");
// 		console.log(panelLeft);

// 	};
// 	return {
// 		init: init,
// 	};
// })();

// var Panels2 = (function () {

// 	var init = function () {
// 		panelLeft = document.querySelector(".panels2__side--left");
// 		panelRight = document.querySelector(".panels2__side--right");
// 		clickleft = document.getElementById("clickleft2");
// 		clickright = document.getElementById("clickright2");
// 		console.log(panelLeft);

// 		bindActions();
// 	};
// 	return {
// 		init: init,
// 	};
// })();

console.log("go");

window.onload = () => {
	console.log(document.getElementById("Neuro"));
	if (document.readyState === "complete") NeuroSynth();
	else window.addEventListener("load", NeuroSynth());
	// Panels.init();
	// Panels2.init();

	// setInterval(function () {
	// 	const show = document.querySelector('span[data-show]')
	// 	const next = show.nextElementSibling || document.querySelector('span:first-child')
	// 	const up = document.querySelector('span[data-up]')

	// 	if (up) {
	// 	  up.removeAttribute('data-up')
	// 	}

	// 	show.removeAttribute('data-show')
	// 	show.setAttribute('data-up', '')

	// 	next.setAttribute('data-show', '')
	//   }, 1000)

	// this two function is about RoadMap
	var start = (function () {
		var throttle = function (type, name, obj) {
			obj = obj || window;
			var running = false;
			var func = function () {
				if (running) {
					return;
				}
				running = true;
				requestAnimationFrame(function () {
					obj.dispatchEvent(new CustomEvent(name));
					running = false;
				});
			};
			obj.addEventListener(type, func);
		};
		throttle("resize", "optimizedResize");
	})();

	var roadmap = (() => {
		var wrapper = document.querySelector(".js-roadmap-timeline");
		var timeframes = document.querySelectorAll(".js-roadmap-timeframe");
		var mediaQuery = window.matchMedia("(min-width: 1201px)");
		var topMaxHeight;
		var bottomMaxHeight;

		handleStyling();
		window.addEventListener("optimizedResize", handleStyling);

		function handleStyling() {
			if (mediaQuery.matches) {
				applyHeights();
				styleWrapper();
			} else {
				clearWrapperStyling();
			}
		}

		function applyHeights() {
			topMaxHeight = getMaxHeight(timeframes, 0);
			bottomMaxHeight = getMaxHeight(timeframes, 1);
		}

		function getMaxHeight(els, start) {
			var maxHeight = 0;
			var i = start;

			for (; i < els.length - 1; i = i + 2) {
				var elHeight = els[i].offsetHeight;
				maxHeight = maxHeight > elHeight ? maxHeight : elHeight;
			}

			return maxHeight;
		}

		function styleWrapper() {
			wrapper.style.paddingBottom = bottomMaxHeight + "px";
			wrapper.style.paddingTop = topMaxHeight + "px";
		}

		function clearWrapperStyling() {
			wrapper.style.paddingBottom = "";
			wrapper.style.paddingTop = "";
		}
	})();
};
var intializer = 0;
var panelOneLeftActiveVar = false;
var panelOneRightActiveVar = false;
var panelTwoLeftActiveVar = false;
var panelTwoRightActiveVar = false;
var ignore = false;

const Main = () => {
	const [panelOneLeftActive, setPanelOneLeftActive] = useState(false);
	const [panelOneRightActive, setPanelOneRightActive] = useState(false);
	const [panelTwoLeftActive, setPanelTwoLeftActive] = useState(false);
	const [panelTwoRightActive, setPanelTwoRightActive] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	var panelLeft,
		panelRight,
		clickleft,
		clickright,
		panelLeft2,
		panelRight2,
		clickleft2,
		clickright2,
		openLeft,
		openRight,
		openLeft2,
		openRight2;


	useEffect(() => {
		panelLeft = document.querySelector(".panels__side--left");
		panelRight = document.querySelector(".panels__side--right");
		clickleft = document.getElementById("clickleft");
		clickright = document.getElementById("clickright");
		panelLeft2 = document.querySelector(".panels2__side--left");
		panelRight2 = document.querySelector(".panels2__side--right");
		clickleft2 = document.getElementById("clickleft2");
		clickright2 = document.getElementById("clickright2");

		openLeft = function () {

			panelLeft.classList.toggle("panels__side--left-active");
			panelRight.classList.toggle("panels__side--right-hidden");

		};

		openRight = function () {
			panelRight.classList.toggle("panels__side--right-active");
			panelLeft.classList.toggle("panels__side--left-hidden");
		};

		// clickleft.addEventListener("click", openLeft, false);
		// clickright.addEventListener("click", openRight, false);

		//panel 2

		openLeft2 = function () {
			panelLeft2.classList.toggle("panels2__side--left-active");
			panelRight2.classList.toggle("panels2__side--right-hidden");
		};

		openRight2 = function () {
			panelRight2.classList.toggle("panels2__side--right-active");
			panelLeft2.classList.toggle("panels2__side--left-hidden");
		};

		// clickleft2.addEventListener("click", openLeft, false);
		// clickright2.addEventListener("click", openRight, false);

		//reset

		console.log(
			"Panel One Left Active: " + panelOneLeftActive + panelOneLeftActiveVar
		);
		console.log(
			"Panel One Right Active: " + panelOneRightActive + panelOneRightActiveVar
		);
		console.log(
			"Panel Two Left Active: " + panelTwoLeftActive + panelTwoLeftActiveVar
		);
		console.log(
			"Panel Two Right Active: " + panelTwoRightActive + panelTwoRightActiveVar
		);
	}, [
		panelOneLeftActive,
		panelOneRightActive,
		panelTwoLeftActive,
		panelTwoRightActive,
	]);

	useEffect(() => {
		if (ignore) {
			ignore = false;
			return;
		}
		console.log(intializer);
		if (intializer < 4) {
			intializer++;
		} else {
			// panelOneLeftActiveVar = panelOneLeftActive;
			if (panelTwoLeftActive || panelTwoRightActive) {
				if (panelTwoLeftActive) {
					setPanelTwoLeftActive(false);
					openLeft2();
				} else {
					setPanelTwoRightActive(false);
					openRight2();
				}
				ignore = true;
			}
			openLeft();
		}
	}, [panelOneLeftActive]);

	useEffect(() => {
		if (ignore) {
			ignore = false;
			return;
		}
		// console.log(intializer);
		if (intializer < 4) {
			intializer++;
		} else {
			if (panelTwoLeftActive || panelTwoRightActive) {
				if (panelTwoLeftActive) {
					setPanelTwoLeftActive(false);
					openLeft2();
				} else {
					setPanelTwoRightActive(false);
					openRight2();
				}
				ignore = true;
			}
			openRight();
		}
	}, [panelOneRightActive]);

	useEffect(() => {
		// console.log(intializer);
		if (ignore) {
			ignore = false;
			return;
		}
		if (intializer < 4) {
			intializer++;
		} else {
			if (panelOneLeftActive || panelOneRightActive) {
				if (panelOneLeftActive) {
					setPanelOneLeftActive(false);
					openLeft();
				} else {
					setPanelOneRightActive(false);
					openRight();
				}
				ignore = true;
			}
			openLeft2();
		}
	}, [panelTwoLeftActive]);

	useEffect(() => {
		if (ignore) {
			ignore = false;
			return;
		}
		// console.log(intializer);
		if (intializer < 4) {
			intializer++;
		} else {
			if (panelOneLeftActive || panelOneRightActive) {
				if (panelOneLeftActive) {
					setPanelOneLeftActive(false);
					openLeft();
				} else {
					setPanelOneRightActive(false);
					openRight();
				}
				ignore = true;
			}
			openRight2();
		}
	}, [panelTwoRightActive]);
	// useEffect(()=> {
	// 	const interval = setInterval(function () {
	// 		const show = document.querySelector('span[data-show]')
	// 		const next = show.nextElementSibling || document.getElementById("first")
	// 		const up = document.querySelector('span[data-up]')

	// 		if (up) {
	// 		  up.removeAttribute('data-up')
	// 		}

	// 		show.removeAttribute('data-show')
	// 		show.setAttribute('data-up', '')

	// 		next.setAttribute('data-show', '')
	// 	  }, 2000)

	// 	  return () => clearInterval(interval);
	// },[]);
	let [iframeLoaded, setIframeLoaded] = useState(false);
	return (
		<div className="relative pb-10">
			{/* <Gradient></Gradient> */}
			<div className="flex flex-col min-w-full">
				{/* <Title></Title> */}

				{/* <div id="Neuro" className="NeuroBar" /> */}
				{/* <RollingText></RollingText> */}
				<RollingText3D></RollingText3D>
			</div>

			<div
				className="flex flex-row justify-center"
			>
				<div
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<CutCornerButton text={"Claim ACY!"}/>
				</div>
				
			</div>
			
			<ClaimDialog isOpen={isOpen} setIsOpen={setIsOpen} />


			{/* <NeuroSynth></NeuroSynth> */}
			<div className="relative">
				<div className="mt-10 mx-2 mb-20 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-32 lg:px-8">
					{/* <VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel> */}
					{/* <Exchange iframeLoaded={iframeLoaded}></Exchange>
					<Liquidity setIframeLoaded={setIframeLoaded}></Liquidity> */}
					<DualSlidingPanel
						panelOneLeftActive={panelOneLeftActive}
						setPanelOneLeftActive={setPanelOneLeftActive}
						panelOneRightActive={panelOneRightActive}
						setPanelOneRightActive={setPanelOneRightActive}
					/>
					{/* <Farm></Farm>
					<Launch></Launch>
					<Market></Market> */}
					{/* <div  className = "blackboard">
					<WordRotation></WordRotation>
					<Rotating></Rotating>
					</div> */}
					<DualSlidingPanel2
						panelTwoLeftActive={panelTwoLeftActive}
						setPanelTwoLeftActive={setPanelTwoLeftActive}
						panelTwoRightActive={panelTwoRightActive}
						setPanelTwoRightActive={setPanelTwoRightActive}
					/>

					<RoadMap></RoadMap>
					<ClipPathHover />
					<div id="Neuro" className="NeuroBar z-0" />

					<Documentation style={{ zIndex: 30 }}></Documentation>
					<Governance></Governance>
				</div>
			</div>
		</div>
	);
};

export default Main;
