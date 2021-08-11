
import './App.css';
import Nav from './nav'
import Auth from "./Auth"
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import SideBar from './sidebar';
function App() {
  return (
    <Router>
    <div className="App" >
     <Routes/>
     {/* <Auth /> */}
    </div>
    </Router>
  );
}

export default App;
