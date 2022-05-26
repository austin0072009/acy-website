import "./App.css";
import {
	Main,
	Privacy,
	Cookie,
	Terms,
	About,
	Ecosystem,
	Governance,
	AcyToken,
	MEVRobots,
	WhatIsACY,
	Advantage,
	NewPage,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer, HeaderNoBar } from "./components";
import { useState, createRef, useRef } from "react";
import * as Scroll from "react-scroll";
import ReactGA from "react-ga";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";

var Element = Scroll.Element;

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

function App() {
	const ScrollEvent = event => {
		// console.log(event.nativeEvent.srcElement.scrollTop);
		// console.log("width: ", window.innerWidth);
		if (window.innerWidth <= 640) {
			if (event.nativeEvent.srcElement.scrollTop >= 0) {
				setVisible(true);
			} else setVisible(false);
		} else {
			if (event.nativeEvent.srcElement.scrollTop >= 640) {
				setVisible(true);
			} else setVisible(false);
		}
	};
	let [menuActive, setMenuActive] = useState(false);
	let [visible, setVisible] = useState(false);

	// console.log(`TRACK ${window.location.pathname + window.location.search}`);
	ReactGA.pageview(window.location.pathname + window.location.search);
	const urlParams = new URL(window.location.href);
const pathname = urlParams?.pathname;
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<Router>
				<div
					className="relative"
					style={{ backgroundColor: "#1B1B1C", zIndex: 100 }}
				>
					<Header
						active={menuActive}
						setActive={setMenuActive}
						getvisible={visible}
					></Header>
					<HeaderNoBar
						active={menuActive}
						setActive={setMenuActive}
						getvisible={!visible}
					></HeaderNoBar>

					<div
						id="containerElement"
						style={{ overflowY:pathname=="/"&&'hidden'|| "auto", height: "100vh" }}
						onClick={() => {
							setMenuActive(false);
						}}
						onScroll={ScrollEvent}
					>
						<Element name="topOfContainer"></Element>
						<Switch>
							<Route path="/" exact component={NewPage} />
							<Route path="/about" component={Main} />
							<Route path="/about-us" component={About} />
							<Route path="/newpage" component={NewPage} />
							<Route path="/privacy-policy" component={Privacy} />
							<Route path="/terms-of-use" component={Terms} />
							<Route path="/cookie-policy" component={Cookie} />
							<Route path="/ecosystem" component={Ecosystem} />
							<Route path="/governance" component={Governance} />
							<Route path="/acy-token" component={AcyToken} />

							<Route path={`/about-us/`}>
								<WhatIsACY />
							</Route>
							<Route path={`/about-us/mev-robots`}>
								<MEVRobots />
							</Route>
							<Route path={`/about-us/arbitrage-supremacy`}>
								<Advantage />
							</Route>
							{/* <Route path="/acy-token" component={AcyToken} /> */}
						</Switch>
						<Footer></Footer>
					</div>
				</div>
			</Router>
		</Web3ReactProvider>
	);
}

export default App;
