import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hire from "./components/Hire";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Project from "./components/Project";
import { CssBaseline } from "@material-ui/core";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/hire">
          <Hire />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
