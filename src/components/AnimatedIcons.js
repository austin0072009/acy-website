import React from "react";
// import rocket from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline.svg";
// import mySvg from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline.svg";
// import { ReactComponent as MySvg } from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline.svg";
// import { ReactComponent as Another } from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline-1.svg";
// import Gif from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline.gif";
import { useState } from "react";
import rocket from "../assets/svgs/animatedIcons/879-space-shuttle-spaceship-outline-edited";
import lottie from "lottie-web";
const AnimatedIcons = ({ play }) => {
	React.useEffect(() => {
		lottie.destroy();

		lottie.loadAnimation({
			container: document.querySelector("#rocket-icon"),
			animationData: rocket,
			autoplay: play,
			loop: true,
		});
	}, [play]);

	return (
		<div className="w-3/12">
			<div id="rocket-icon" />
		</div>
	);
};

export default AnimatedIcons;
