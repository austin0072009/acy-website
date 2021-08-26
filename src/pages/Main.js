import {
  Header,
  VideoPanel,
  Footer,
  Title,
  Documentation,
  Governance,
} from "../components";
import { Gradient } from "../atoms";
import axios from "axios";
axios.defaults.baseURL = "https://api.acy.finance/";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 0 }} className="relative">
      <div className="relative" style={{ zIndex: 2 }}>
        <Header></Header>
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Gradient></Gradient>
        <div className="relative" style={{ zIndex: 1 }}>
          <Title></Title>
          <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8">
            <VideoPanel></VideoPanel>
            <Documentation></Documentation>
            <Governance></Governance>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
