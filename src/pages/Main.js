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
	
} from "../components";
import { Gradient } from "../atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import { ConsoleSqlOutlined } from "@ant-design/icons";

axios.defaults.baseURL = "https://api.acy.finance/";

// if (document.readyState === 'complete') NeuroSynth();
// else window.addEventListener('load', NeuroSynth());

var Panels = (function () {
	var panelLeft = document.querySelector(".panels__side--left");
	var panelRight = document.querySelector(".panels__side--right");

	var openLeft = function () {
		panelLeft.classList.toggle("panels__side--left-active");
		panelRight.classList.toggle("panels__side--right-hidden");
	};

	var openRight = function () {
		panelRight.classList.toggle("panels__side--right-active");
		panelLeft.classList.toggle("panels__side--left-hidden");
	};

	var bindActions = function () {
		panelLeft.addEventListener("click", openLeft, false);
		panelRight.addEventListener("click", openRight, false);
	};

	var init = function () {
		panelLeft = document.querySelector(".panels__side--left");
		panelRight = document.querySelector(".panels__side--right");
		console.log(panelLeft);

		bindActions();
	};
	return {
		init: init
	  };
	

   
  }());

  var Panels2 = (function() {
  
	var panelLeft = document.querySelector('.panels2__side--left');
	var panelRight = document.querySelector('.panels2__side--right');
  
	var openLeft = function() {
		  panelLeft.classList.toggle('panels2__side--left-active');
	  panelRight.classList.toggle('panels2__side--right-hidden');
	};
  
	var openRight = function() {
	  panelRight.classList.toggle('panels2__side--right-active');
	  panelLeft.classList.toggle('panels2__side--left-hidden');
	};
	
	var bindActions = function() {
	  panelLeft.addEventListener('click', openLeft, false);
	  panelRight.addEventListener('click', openRight, false);
	};
	
	var init = function() {
	  panelLeft = document.querySelector('.panels2__side--left');
	  panelRight = document.querySelector('.panels2__side--right');
	  console.log(panelLeft);

	  bindActions();
	};
	return {
		init: init
	  };
	

   
  }());

console.log("go")


console.log("go");

window.onload = () => {
	console.log(document.getElementById("Neuro"));
	if (document.readyState === "complete") NeuroSynth();
	else window.addEventListener("load", NeuroSynth());
	Panels.init();
	Panels2.init();

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



const Main = () => {

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

				<div id="Neuro" className="NeuroBar" />
				<RollingText></RollingText>
			</div>

			{/* <NeuroSynth></NeuroSynth> */}

			<div className="relative" style={{ zIndex: 30 }}>
				<div className="mt-20 mx-2 mb-20 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-32 lg:px-8">
					{/* <VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel> */}
					{/* <Exchange iframeLoaded={iframeLoaded}></Exchange>
					<Liquidity setIframeLoaded={setIframeLoaded}></Liquidity> */}
					<DualSlidingPanel />
					{/* <Farm></Farm>
					<Launch></Launch>
					<Market></Market> */}
					{/* <div  className = "blackboard">
					<WordRotation></WordRotation>
					<Rotating></Rotating>
					</div> */}
					<DualSlidingPanel2 />

					<RoadMap></RoadMap>
					<ClipPathHover />
					{/* <Documentation></Documentation>
					<Governance></Governance> */}
				
				</div>
			</div>
		</div>
	);
};

export default Main;
