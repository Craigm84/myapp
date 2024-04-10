import './App.css';
import PlayerDisplay from './Components/PlayerDisplay';
import CreatePlayer from './Components/CreatePlayer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './Components/Players';
    


      function App() {
  return (
    <div>     
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<PlayerList />} />
        <Route path='/profile/existing/:id'/>
        <Route path='/create' element={<CreatePlayer />} />
        </Routes>
    </Router>  
    </div>
  );
}

export default App;
