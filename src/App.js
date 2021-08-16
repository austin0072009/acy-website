import "./App.css";
import { Header, VideoPanel, NoBots, MEVGraphs, Footer } from "./components";
import axios from "axios";
axios.defaults.baseURL = "https://api.acy.finance/";

function App() {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-20 px-2 sm:px-5 xl:px-20 lg:px-10">
        <VideoPanel></VideoPanel>
        <NoBots></NoBots>
        <MEVGraphs></MEVGraphs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
