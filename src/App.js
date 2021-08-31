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
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components";
import { useState } from "react";

function App() {
  let [menuActive, setMenuActive] = useState(false);

  return (
    <Router>
      <Header active={menuActive} setActive={setMenuActive}></Header>
      <div
        className="relative"
        style={{ backgroundColor: "#1B1B1C", zIndex: 1 }}
        onClick={() => {
          setMenuActive(false);
        }}
      >
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about-us" component={About} />
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
    </Router>
  );
}

export default App;
