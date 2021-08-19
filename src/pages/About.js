import { Header, Footer } from "../components";
import aboutUs from "../texts/aboutUs";
import { MdTextField } from "../components";

const About = () => {
  return (
    <div style={{ backgroundColor: "#2a292e" }}>
      <Header></Header>
      <MdTextField text={aboutUs}></MdTextField>
      <Footer></Footer>
    </div>
  );
};

export default About;
