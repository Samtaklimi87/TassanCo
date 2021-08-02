import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/index";
import Page2 from "./components/pages/Page2";
// import About from './pages';
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      {/* <Switch>
        <Home />
        <Page2 />
      </Switch> */}

      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/page1" component={Page1} /> */}
        <Route path="/page2" component={Page2} />
        {/* <Route path="/page3" component={Page3} /> */}
      </Switch>
    </Router>
  );
}

export default App;
