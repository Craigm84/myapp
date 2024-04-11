import React from 'react';
import Player from './PlayerProps';
import usePlayers from './usePlayers';

function Players() {
  const players = usePlayers();

  return (
    <div>
      {players.map((player) => (
        <Player
          key={player.id}
          name={player.name}
          number={player.number}
          position={player.position}
          skill={player.skill}
        />
      ))}
    </div>
  );
}

export default Players;