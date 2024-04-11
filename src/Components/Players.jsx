// import GetPlayer from "./PlayerDisplay";
// import PropTypes from "prop-types";

// function PlayerList(props) {
//     const playerList = []
//     for (const player of props.listPlayer) {
//         console.log("Player:", player);
//         playerList.push(
//             <PlayerList
//                 key={player.name + "" + player.number}
//                 name={player.name}
//                 number={player.number}
//                 id={player.id}
//                 position={player.position}
//                 skill={player.skill}
//                 getPlayer={props.getPlayer}
//             />
//         )
//     }

// return (
//     <div class="">
//         <div className="row">{playerList}</div>
//     </div>
// )
// }

// GetPlayer.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     position: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     skill: PropTypes.string.isRequired,
// }

// export default PlayerList;