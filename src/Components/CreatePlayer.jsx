import axios from "axios";
import { useState } from "react";
import './CreatePlayer.css';

function CreatePlayer(props) {


    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [number, setNumber] = useState("")
    const [skill, setSkill] = useState("")

    function CheckPlayer() {
        axios.get("http://localhost:8083/profile/get").then(response => {
            console.log(response)
            for (const player of response.data) {
                if (player.name.toLowerCase() === name.toLowerCase()) {
                    alert("Player already exists")
                    return;
                }
            }


            axios.post("http://localhost:8083/profile/create",
                { name, position, number, skill })
                .then(response => {
                    console.log(response);
                    setName("");
                    setPosition("");
                    setNumber("");
                    setSkill("");
                    props.getPlayer();


                }).catch(err => console.error(err))
        })
    }

    return (
        <div className="heather">
            <form onSubmit={e => {
                e.preventDefault();
                CheckPlayer();

            }}>

                <br></br>
                <h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ color: "#3434ED", fontFamily: "italic", width: "400px", backgroundColor: "#ffffff6b" }}>New Player Registration</h2>

                <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop: "30px", marginLeft: "200px", backgroundColor: "#ffffff6b", width: "350px" }}>
                    <label htmlFor="name" style={{ color: "#3434ED" }}>Name</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <br /><label htmlFor="name" style={{ color: "#3434ED" }}>Position</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="position"
                        position="position"
                        type="text"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                        required
                    />
                    <br /><label htmlFor="name" style={{ color: "#3434ED" }}>Number</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="number"
                        number="number"
                        type="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        required
                    />
                    <br /><label htmlFor="name" style={{ color: "#3434ED" }}>Skill</label>
                    <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                        id="skill"
                        skill="skill"
                        type="text"
                        value={skill}
                        onChange={e => setSkill(e.target.value)}
                        required
                    />
                    <div className="mt-2">
                        <button className="btn btn-primary" id="submit" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreatePlayer;