import acytoken from "../texts/acytoken";
import { MdTextField } from "../components";
import { Gradient } from "../atoms";
import { SideMenu } from "../components";
import { useMemo } from "react";
import {
	Switch,
	BrowserRouter as Router,
	Route,
	useRouteMatch,
} from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

const AcyToken = () => {
  let entries = useMemo(() => [
		{ text: "What is ACY", link: "/about-us/" },
		{ text: "MEV Robots", link: "/about-us/mev-robots" },
		{ text: "Arbitrage supremacy", link: "/about-us/arbitrage-supremacy" },
	]);
	let smallerThan568 = useMediaPredicate("(max-width: 768px)");
	let match = useRouteMatch();

  return (
    <div className="relative">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
    
	  <div className="flex flex-col md:flex-row">

		
        <MdTextField
          text={acytoken}
          title={"The ACY Protocol token"}
        ></MdTextField>
        </div>
		</div>
      </div>
  );
};

export default AcyToken;
