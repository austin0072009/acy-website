import {
  Header,
  VideoPanel,
  Footer,
  Title,
  Documentation,
  Governance,
} from "../components";
import axios from "axios";
axios.defaults.baseURL = "https://api.acy.finance/";

const Main = () => {
  return (
    <div style={{ backgroundColor: "#1B1B1C", zIndex: 0 }} className="relative">
      <Header></Header>

      <div className="relative" style={{ zIndex: 1 }}>
        <div
          className="fixed w-full h-full top-0 left-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgb(47, 128, 237) 0%, rgb(15, 16, 19) 100%)",
            zIndex: -1,
            opacity: 0.12,
          }}
        ></div>
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
