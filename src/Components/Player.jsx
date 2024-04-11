import axios from 'axios';
import { useEffect, useState } from "react";
import Avatar from '../Avatar.png'

function usePlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8083/profile/get")
      .then((response) => {
        setPlayers(response.data)
      })
      .catch(error => console.error(error))
  }, []);
  return players;
}
function Players() {
  const players = usePlayers();
  return (
    <div><h2 style={{ color:"blue"}}>Meet The Team</h2>

      <div className='row'>
        {players.map(player => (
          <div className='col-3' key={player.id}>
            <div className='card' style={{ marginBottom: "20px" }}>
              <div className='row'>
                <div className='col-4'>
                  <img
                    src={Avatar}
                    className='card-img'
                    alt="boy"
                    style={{ maxWidth: "100%", marginTop: "10px", marginBottom: "10px" }}
                  />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>Name: {player.name}</h5>
                    <div className='card-text'>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>Number: {player.number}</li>
                        <li className='list-group-item'>Position: {player.position}</li>
                        <li className='list-group-item'>Skill: {player.skill}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
export default Players;