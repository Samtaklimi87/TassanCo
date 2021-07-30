import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import About from './Pages/about';
import Home from './Pages/home';
import Teams from './Pages/teams';

import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      {/* <Route path='/events' component={Events} /> */}
      {/* <Route path='/annual' component={AnnualReport} /> */}
      <Route path='/team' component={Teams} />
      {/* <Route path='/blogs' component={Blogs} />
      <Route path='/sign-up' component={SignUp} /> */}
    </Switch>
  </Router>
  );
}

export default App;
