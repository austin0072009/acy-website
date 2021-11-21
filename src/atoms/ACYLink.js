import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
	Scroll.scroller.scrollTo("topOfContainer", {
		containerId: "containerElement",
		smooth: true,
	});
}

const ACYLink = ({ url, children, main }) => {
	let [active, setActive] = useState(false);
	const location = useLocation();

	const color = main ? "#B5B6B6" : "rgba(107, 114, 128,1)";

	let anchorStyle = {
		textDecoration: "none",
		fontWeight: 500,
		color: active || location.pathname === url ? "#de5b24" : color,
	};

	// Somewhere else, even another file

	return (
		<span className="text-right sm:ml-10 md:ml-5 ml-2 my-3">
			<Link
				to={url}
				tabIndex="1"
				onClick={() => {
					scrollToTop();
				}}
				onMouseEnter={() => {
					setActive(true);
				}}
				onMouseLeave={() => {
					setActive(false);
				}}
				style={anchorStyle}
			>
				{children}
			</Link>
		</span>
	);
};

export default ACYLink;
