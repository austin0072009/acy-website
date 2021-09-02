import { VideoPanel, Title, Documentation, Governance } from "../components";
import { Gradient } from "../atoms";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "https://api.acy.finance/";

const Main = () => {
  let [iframeLoaded, setIframeLoaded] = useState(false);
  return (
    <div style={{ zIndex: 0 }} className="relative pb-10">
      <Gradient></Gradient>
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="mx-2 mb-20 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-32 lg:px-8">
          <Title iframeLoaded={iframeLoaded}></Title>
          <VideoPanel setIframeLoaded={setIframeLoaded}></VideoPanel>
          <Documentation></Documentation>
          <Governance></Governance>
        </div>
      </div>
    </div>
  );
};

export default Main;
