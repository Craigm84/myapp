import { useNavigate } from 'react-router-dom';
import FB from '../FB.png';
import X from '../X.jpg'
import Type from './Typewriter';
import '../Button.css';


function Heather() {

    const navigate = useNavigate();
    const facebook = 'https://www.facebook.com/Officialheatherstjohnsfc/';
    const twitter = 'https://twitter.com/HSJFC_Official';
 
    return (
        <div classname="heather">
            <h2 style={{color:"blue"}}>About the club</h2><br />
            <div>
                <Type />
            </div><br/>
            <img src={FB} alt="FBLogo" style={{ maxHeight:"4%", maxWidth:"4%"}}/><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a> <br/>
            <img src={X} alt="XLogo" style={{marginLeft:"17px", marginRight:"12px", maxHeight:"2%", maxWidth:"2%"}}/> <a href={twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <br /><br />
            <h5>My involvement.......</h5><br />

            <button className="button-85" style={{margin:"10px"}} onClick={() => {
                  navigate(`/manager`)
                }} >Meet the Manager</button>
            <button className="button-85" style={{margin:"10px"}} onClick={() => {
                  navigate(`/players`)
                }}>Meet the Players</button>
            <button className="button-85" style={{margin:"10px"}} onClick={() => {
                  navigate(`/fixtures`)
                }}>Fixtures</button>
            <button className="button-85" style={{margin:"10px"}} onClick={() => {
                  navigate(`/results`)
                }}>Results</button>
        </div>
    );
}

export default Heather;