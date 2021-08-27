import { Header, Footer, SideMenu } from "../components";
import { MEVRobots, WhatIsACY, Advantage } from ".";
import { Gradient } from "../atoms";
import { useMemo, useState } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useMediaPredicate } from "react-media-hook";

const About = () => {
  let entries = useMemo(() => [
    { text: "What is ACY", link: "/about-us/" },
    { text: "MEV Robots", link: "/about-us/mev-robots" },
    { text: "Arbitrage supremacy", link: "/about-us/arbitrage-supremacy" },
  ]);
  let [menuActive, setMenuActive] = useState(false);
  let smallerThan568 = useMediaPredicate("(max-width: 768px)");
  let match = useRouteMatch();
  return (
    <div className="bg-base relative" style={{ zIndex: 0 }}>
      <Header active={menuActive} setActive={setMenuActive}></Header>
      <Gradient></Gradient>
      <div
        onClick={() => {
          setMenuActive(false);
        }}
        className="mt-12 mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8 relative"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col md:flex-row">
          <div
            className="relative flex-none w-full md:w-1/4"
            style={{
              borderRight: smallerThan568
                ? "0px solid #ff0000"
                : "1px solid #615e63",
            }}
          >
            <SideMenu
              title="ABOUT"
              entries={entries}
              default_path="/about-us"
            ></SideMenu>
          </div>
          <Switch>
            <Route exact path={`${match.path}/`}>
              <WhatIsACY />
            </Route>
            <Route path={`${match.path}/mev-robots`}>
              <MEVRobots />
            </Route>
            <Route path={`${match.path}/arbitrage-supremacy`}>
              <Advantage />
            </Route>
          </Switch>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default About;
