import "./App.css";
import { Header, VideoPanel, NoBots, MEVGraphs, Footer } from "./components";

function App() {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <div className="mx-36 px-36">
        <VideoPanel></VideoPanel>
        <NoBots></NoBots>
        <MEVGraphs></MEVGraphs>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
