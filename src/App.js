import "./App.css";
import { Header, VideoPanel, NoBots, MEVGraphs, Footer } from "./components";
import axios from "axios";
axios.defaults.baseURL =
  "http://ec2-3-143-250-42.us-east-2.compute.amazonaws.com:6001/";

function App() {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <div className="mx-2 px-2 sm:mx-5 lg:mx-10 lg:px-10 xl:mx-24 sm:px-5 xl:px-24">
        <VideoPanel></VideoPanel>
        <NoBots></NoBots>
        <MEVGraphs></MEVGraphs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
