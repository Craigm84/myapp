import './App.css';
import CreatePlayer from './Components/CreatePlayer';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './Components/Players';
import Heather from './Components/Heather';
import AboutMe from './Components/AboutMe';
import Journey from './Components/Journey';
    


      function App() {
  return (
    <div>     
      <Router>
      <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#e3f2fd",}} >
          <div><div></div>
           <Link to='/'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>Home</button></Link>
            <Link  to='/aboutme'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>About Me</button></Link>
            <Link to='/journey'><button type="button" className="btn btn-primary" style={{margin:"10px"}}>Journey</button></Link>
            <Link to='/heather'><button type="button" className="btn btn-primary" style={{margin:"10px"}}> Heather St Johns FC</button></Link>         
          </div>
        </nav>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<PlayerList />} />
        <Route path='/profile/existing/:id'/>
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
