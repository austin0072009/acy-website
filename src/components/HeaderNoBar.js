import logo from "../assets/logo.svg";
import menuImg from "../assets/svgs/header/menu_orange.svg";
import { Link } from "react-router-dom";
import style from "../css/animation.css";
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";
import appIcon from "../assets/svgs/animatedIcons/appIcon.json";
import { AnimatedIcons } from ".";

const menuStyles = {
	position: "fixed",
	top: "3.5rem",
	right: "10%",
	backgroundColor: "#2A282E",
	color: "#D5D5D5",
	zIndex: 100,
};

const anchorStyles = {
	textDecoration: "none",
};

function scrollToTop() {
	Scroll.scroller.scrollTo("topOfContainer", {
		containerId: "containerElement",
		smooth: true,
	});
}

const openInNewTab = url => {
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};

const HeaderNoBar = ({ active, setActive, getvisible }) => {
	let menu = useMemo(() => [
		{ title: "Ecosystem", link: "/ecosystem" },
		{ title: "Governance", link: "/governance" },
		{ title: "ACY Token", link: "/acy-token" },
		{ title: "About", link: "/about-us" },
	]);

	let [atTop, setAtTop] = useState(true);
	let [hover, setHover] = useState(true);
	let [visible,setVisible] = useState(getvisible);

	let location = useLocation();

	const [isHoverAppIcon, setIsHoverAppIcon] = useState(false);

	const openInNewTab = url => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	
	// useEffect(() => {
	// 	console.log("window.scrollTop")

	// 	// window.onscroll = () =>{
	// 	// 	window.pageYOffset === 0 ? setAtTop(true) : setAtTop(false);
	// 	// 	console.log(window.scrollTop)
	// 	// }

	// 	// return () => (window.onscroll = null);
	// }, []);


	return (
		getvisible &&
		(<div 
			style={{
				zIndex: 99,
			}}
			onClick={e => {
				if (e.target.id === "menu") return;
				setActive(false);
			}}
			className="HeadNoBar top-0 max-h-12 px-4 sm:px-10 xl:px-24 lg:px-20 overflow-hidden py-3 flex justify-between relative items-center"
		>
			<div className="flex ">
				<Link to="/">
					<img
						src={logo}
						style={{ width: "45px" }}
						alt="logo"
						className="cursor-pointer rotateOnHover"
					/>
				</Link>
			</div>

			<div className="flex flex-row items-center">
				<div
					className="flex cursor-pointer mt-2"
					style={{ width: "90px" }}
					onMouseEnter={() => setIsHoverAppIcon(true)}
					onMouseLeave={() => setIsHoverAppIcon(false)}
					onClick={() => {
						openInNewTab("https://test.acy.finance/");
					}}
				>
					<AnimatedIcons
						play={isHoverAppIcon}
						url={appIcon}
						id={"appIcon"}
					></AnimatedIcons>
				</div>
			</div>

		</div>)
	);
};

export default HeaderNoBar;
