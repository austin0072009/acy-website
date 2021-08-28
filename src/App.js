import "./App.css";
import { Main, Privacy, Cookie, Terms, About } from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about-us" component={About} />
        <Route path="/privacy-policy" component={Privacy} />
        <Route path="/terms-of-use" component={Terms} />
        <Route path="/cookie-policy" component={Cookie} />
      </Switch>
    </Router>
  );
}

export default App;
