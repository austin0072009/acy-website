import React from "react";
import { useState } from "react";
import lottie from "lottie-web";
const AnimatedIcons = ({ play, url, id }) => {
	React.useEffect(() => {
		lottie.destroy(id);

		lottie.loadAnimation({
			container: document.querySelector(`#${id}`),
			animationData: url,
			autoplay: play,
			loop: true,
			name: id,
		});
	}, [play]);

	return (
		<div className="w-3/12">
			<div id={id} />
		</div>
	);
};

export default AnimatedIcons;
