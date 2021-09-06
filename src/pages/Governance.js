import { SideMenu } from "../components";
import { Gradient } from "../atoms";
import { useMemo } from "react";
import { useMediaPredicate } from "react-media-hook";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import ACYDAO from "./ACYDAO";
import DelegationOptions from "./DelegationOptions";
import VotingRewards from "./VotingRewards";

const Governance = () => {
  let entries = useMemo(() => [
    { text: "ACYDAO Overview", link: "/governance/" },
    {
      text: "Staking, Voting, And Reward",
      link: "/governance/voting-rewards",
    },
    {
      text: "Staking And Delegation Options",
      link: "/governance/delegation-options",
    },
  ]);
  let smallerThan568 = useMediaPredicate("(max-width: 768px)");
  let match = useRouteMatch();
  return (
    <div className="relative">
      <Gradient></Gradient>
      <div
        className="pt-12 mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8 relative"
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
              title="GOVERNANCE"
              entries={entries}
              default_path="/governance"
            ></SideMenu>
          </div>
          <Switch>
            <Route exact path={`${match.path}/`}>
              <ACYDAO />
            </Route>
            <Route path={`${match.path}/voting-rewards`}>
              <VotingRewards />
            </Route>
            <Route path={`${match.path}/delegation-options`}>
              <DelegationOptions />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Governance;
