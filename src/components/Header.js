import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import menuImg from "../assets/svgs/header/menu_orange.svg";
import style from "../css/animation.css";
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";
import appIcon from "../assets/svgs/animatedIcons/appIcon.json";
import { AnimatedIcons } from ".";
import { StartedButton } from ".";
import "./Header.css";

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

const Header = ({ active, setActive, getvisible }) => {
	let menu = useMemo(() => [
		{ title: "Ecosystem", link: "/ecosystem" },
		{ title: "Governance", link: "/governance" },
		{ title: "ACY Token", link: "/acy-token" },
		{ title: "About", link: "/about-us" },
	]);

	let [atTop, setAtTop] = useState(true);
	let [hover, setHover] = useState(true);
	let [visible, setVisible] = useState(getvisible);

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
		getvisible && (
			<nav
				style={{
					zIndex: 99,
				}}
				onClick={e => {
					if (e.target.id === "menu") return;
					setActive(false);
				}}
				className="top-0 max-h-12 px-4 sm:px-10 xl:px-24 lg:px-20 overflow-hidden py-10 flex justify-between relative items-center"
			>
				<div className="flex">
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							className="cursor-pointer rotateOnHover logo-size"
						/>
					</Link>
				</div>

				{/* <div className="flex flex-row items-center">
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
			</div> */}
				<StartedButton />

				{/* <div className="flex items-center justify-end relative">
        <div
          className={`rounded-xl bg-brown-500 p-5 transition-opacity ${active ? "opacity-100" : "hidden opacity-0"
            }`}
          style={menuStyles}
        >
          <div className="grid grid-cols-1 gap-x-2 gap-y-5">
            {menu.map((item) =>
              location.pathname === item.link ? (
                <div key={item.link}>
                  <div className="mr-3 inline-block transition-padding pb-1 hover:pb-4 border-solid border-t-0 border-l-0 border-r-0 border-b border-orange hover:border-orange">
                    <Link
                      to={item.link}
                      style={anchorStyles}
                      onClick={scrollToTop}
                    >
                      <span
                        style={{ color: "#ea5c1f" }}
                        className="text-orange filter grayscale-0 cursor-pointer"
                      >
                        {item.title}
                      </span>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.link}
                  to={item.link}
                  style={anchorStyles}
                  onClick={scrollToTop}
                >
                  <span className="text-orange filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 mr-3 cursor-pointer">
                    {item.title}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>

        <img
          className="filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 mr-3 cursor-pointer"
          id="menu"
          alt="menu"
          src={menuImg}
          style={{ width: "3%", minWidth: "40px", maxWidth: "30px" }}
          onClick={() => {
            setActive(!active);
          }}
        />
        <div
          className="py-1 px-5 border-2 border-solid border-orange rounded-2xl text-white text-center cursor-pointer"
          style={{ minWidth: 100 }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <span
            onClick={() => {
              openInNewTab("https://test.acy.finance");
            }}
          >
            {hover ? "Coming soon" : "Launch APP"}
          </span>
        </div>
      </div> */}
			</nav>
		)
	);
};

export default Header;
