import { useNavigate } from 'react-router-dom';
import FB from '../FB.png';
import X from '../X.jpg'

function Heather() {

    const navigate = useNavigate();
    const facebook = 'https://www.facebook.com/Officialheatherstjohnsfc/';
    const twitter = 'https://twitter.com/HSJFC_Official';


    return (
        <div classname="heather">
            <h5>About the club</h5><br /><br />
            <h6>
                Heather St. John’s Football Club is a football club based in the village of Heather, Leicestershire, England.<br />
                They are currently members of the Midland League Division One and play their home matches at St John’s Park.<br />
                The club is known for its community involvement and includes an academy for 4-8 year olds, senior, junior, youth, and ladies teams.<br />
                They are an FA Community Charter Standard Football Club, emphasizing opportunities for children of all ages, genders, and abilities, and providing a pathway from junior to senior football.
            </h6>
            <img src={FB} alt="FBLogo" style={{ maxHeight:"4%", maxWidth:"4%"}}/><a href={facebook} target="_blank" rel="noopener noreferrer">Facebook</a> <br/>
            <img src={X} alt="XLogo" style={{marginLeft:"17px", marginRight:"12px", maxHeight:"2%", maxWidth:"2%"}}/> <a href={twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <br />
            <h5>My involvement.......</h5>

            <button>Meet the Manager</button>
            <button>Meet the Players</button>
            <button>Fixtures</button>
            <button>Results</button>
        </div>
    );
}

export default Heather;