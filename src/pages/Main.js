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
    <div style={{ backgroundColor: "#1B1B1C" }}>
      <Header></Header>
      <Title></Title>
      <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8">
        <VideoPanel></VideoPanel>
        <Documentation></Documentation>
        <Governance></Governance>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
