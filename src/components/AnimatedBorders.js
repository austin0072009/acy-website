import React from "react";
import { useState } from "react";
import lottie from "lottie-web";

const AnimatedBorders = ({ title, content, id, url }) => {
	const [isHoverMarketBorder, setIsHoverMarketBorder] = useState(false);

	React.useEffect(() => {
		lottie.destroy(`market-border${id}`);

		lottie.loadAnimation({
			container: document.querySelector(`#market-border${id}`),
			animationData: url,
			autoplay: isHoverMarketBorder,
			loop: true,
			name: `market-border${id}`,
		});
		lottie.setSpeed(1, `market-border${id}`);
	}, [isHoverMarketBorder]);
	// border-solid border-blue-900 border-2
	return (
		<>
			<div
				className="container mb-5 px-5 py-5 relative"
				style={{
					height: "200px",
					width: "200px",
					left: "-20px",
					position: "relative",
				}}
				onMouseEnter={() => setIsHoverMarketBorder(true)}
				onMouseLeave={() => setIsHoverMarketBorder(false)}
			>
				<div
					style={{
						position: "absolute",
						height: "300px",
						width: "300px",
						left: "0px",
						bottom: "-50px",
						zIndex: 3,
					}}
					id={`market-border${id}`}
				></div>
				<div
					className=""
					style={{
						position: "absolute",
						height: "200px",
						width: "250px",
						left: "25px",
						bottom: "0px",
						backgroundColor: "#252525",
						zIndex: 2,
						borderRadius: "7px",
					}}
				></div>
				<div
					className="flex flex-col items-center text-center text-white justify-center"
					style={{
						zIndex: 4,
						position: "absolute",
						height: "200px",
						width: "250px",
						left: "20px",
						bottom: "0px",
					}}
				>
					<p className="text-4xl font-bold">{title}</p>
					<p className="px-5">{content}</p>
				</div>
			</div>
		</>
	);
};

export default AnimatedBorders;
