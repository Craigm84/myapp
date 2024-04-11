import './App.css';
import CreatePlayer from './Components/CreatePlayer';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heather from './Components/Heather';
import AboutMe from './Components/AboutMe';
import Journey from './Components/Journey';
import Player from './Components/Player';


      function App() {
  return (
    <div>     
      <Router>
      <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#e3f2fd",}} >
          <div><div></div>
           <Link to='/'><button className="button-85" style={{margin:"10px"}}>Home</button></Link>
            <Link  to='/aboutme'><button className="button-85" style={{margin:"10px"}}>About Me</button></Link>
            <Link to='/journey'><button className="button-85" style={{margin:"10px"}}>Journey</button></Link>
            <Link to='/heather'><button className="button-85" style={{margin:"10px"}}> Heather St Johns FC</button></Link>         
          </div>
        </nav>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<Player />} />
        <Route path='/player/existing/:id'/>
        <Route path='/create' element={<CreatePlayer />} />
        <Route path='/heather' element={<Heather />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/journey' element={<Journey />} />
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
