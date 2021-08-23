import { Header, Footer, MEVGraphs, NoBots } from "../components";
import aboutUs from "../texts/aboutUs";
import { MdTextField } from "../components";

const About = () => {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <div className="mx-2 sm:mx-5 lg:mx-10 xl:mx-10 px-2 sm:px-5 xl:px-10 lg:px-8">
        <div class="flex flex-row">
          <div className="p-4">
            <h1 className="text-gray-100">ABOUT</h1>
            <div className="pl-5 text-gray-100">What is ACY</div>
            <div className="pl-5 text-gray-100">MEV Robots</div>
            <div className="pl-5 text-gray-100">Advantage</div>
          </div>
          <div>
            <NoBots></NoBots>
            <MEVGraphs></MEVGraphs>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
