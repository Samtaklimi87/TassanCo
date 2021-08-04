import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/index";
import Page2 from "./components/pages/Page2";
// import About from './pages';
import SideBar from "./components/SideBar";
import SignIn from "./components/pages/Signin";
import Contact from "./components/Contact";

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
        <Route path="/contact" component={Contact} />
        {/* <Route path="/page3" component={Page3} /> */}
      </Switch>
    </Router>
  );
}

export default App;
