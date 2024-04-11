// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import CreatePlayer from './CreatePlayer';

// function Players(props) {
//   function getPlayer(props) {
    
//       axios.get("http://localhost:8083/profile/get")
//       .then(response => {setPlayer(response.data)})
//       .catch(console.log)
//     }
//     useEffect(()=>{getPlayer()},[])
//     const [player, setPlayer] = useState([])

      
//     return ( 
//       <div >   
//       <div><CreatePlayer getPlayer={getPlayer}/></div>
//       <br></br>
//       <div><Players listPlayers={player} getPlayer={getPlayer} /></div>
//   </div>);
         
//   }

// export default Players;