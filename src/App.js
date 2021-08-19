import "./App.css";
import { Main, Privacy, Cookie, Terms, About } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/about-us" component={About} />
      <Route path="/privacy-policy" component={Privacy} />
      <Route path="/terms-of-use" component={Terms} />
      <Route path="/cookie-policy" component={Cookie} />
    </Router>
  );
}

export default App;
