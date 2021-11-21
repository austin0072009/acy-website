import React from "react";
import lottie from "lottie-web";

const AnimatedButtons = ({ hover, url, urlhover, id, click }) => {
	const load = () => {
		if (!hover && !click) {
			lottie.destroy(id);

			lottie.loadAnimation({
				container: document.querySelector(`#${id}`),
				animationData: url,
				autoplay: hover || click,
				loop: false,
				name: id,
			});
		} else {
			lottie.destroy(id);

			lottie.loadAnimation({
				container: document.querySelector(`#${id}`),
				animationData: urlhover,
				autoplay: hover || click,
				loop: false,
				name: id,
			});
		}
	};
	React.useEffect(() => {
		load();
	}, [hover, click]);

	return (
		<div>
			<div className="mr-3 cursor-pointer" style={{ maxWidth: 40 }}>
				<div id={id} />
			</div>
		</div>
	);
};

export default AnimatedButtons;
