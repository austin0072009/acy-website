import { Header, Footer, SideMenu } from "../components";
import { MEVRobots, WhatIsACY, Advantage } from ".";
import { useMemo } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";

const About = () => {
  let entries = useMemo(() => [
    { text: "What is ACY", link: "/about-us/" },
    { text: "MEV Robots", link: "/about-us/mev-robots" },
    { text: "Advantage", link: "/about-us/advantage" },
  ]);

  let match = useRouteMatch();

  return (
    <div style={{ backgroundColor: "#1B1B1C" }}>
      <Header></Header>
      <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div
            className="relative flex-none w-1/4"
            style={{ borderRight: "1px solid #615e63" }}
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
            <Route path={`${match.path}/advantage`}>
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
