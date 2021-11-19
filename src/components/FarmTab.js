import React from "react";
import { useState } from "react";
import lottie from "lottie-web";
import farmBorder from "../assets/svgs/animatedIcons/farmBorder.json";
import { ZAxis } from "recharts";

const FarmTab = ({ title, content, id }) => {
	const [isHover, setIsHover] = useState(false);

	React.useEffect(() => {
		lottie.destroy(`farm-border${id}`);

		lottie.loadAnimation({
			container: document.querySelector(`#farm-border${id}`),
			animationData: farmBorder,
			autoplay: isHover,
			loop: true,
			name: `farm-border${id}`,
		});
		lottie.setSpeed(2);
	}, [isHover]);
	// border-solid border-blue-900 border-2
	return (
		<>
			<div
				className="container mb-5 px-5 py-5 relative"
				style={{ height: "200px", width: "200px", position: "relative" }}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			>
				<div
					style={{
						position: "absolute",
						height: "250px",
						width: "250px",
						left: "-7px",
						bottom: "0px",
					}}
					id={`farm-border${id}`}
				></div>
				<div
					className="flex flex-col items-center px-3 text-center"
					style={{ zIndex: 3, position: "relative" }}
				>
					<h2 className="text-3xl">{title}</h2>
					<p>{content}</p>
				</div>
			</div>
		</>
	);
};

export default FarmTab;
