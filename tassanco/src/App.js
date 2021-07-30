import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SideBar from './components/SideBar';

function App() {
  return (
   <Router>
     <Home/>
     {/* to make it 1 home page   */}
     {/* <SideBar />
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/about2'  component={About} />
     </Switch> */}
   </Router>
  );
}

export default App;
