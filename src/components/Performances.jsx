import React, { useEffect } from "react";
import axios from "axios";
import "../styles/Performances.css";


export default function Performances() {
    let [sta, setState] = React.useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/performance")
            .then(response => setState(response.data));
    }, []);
    return (
        <div className="bloc_perf">
            <div className="container_perf">

                {sta && sta.map(about => <div className="about_perf">
                    <p className="name">{about && about.name}</p>
                    <img src={about && about.photos} alt="" className="image" />
                    <p className="about">{about && about.details}</p>
                    <p className="price">{about && about.price}</p>
                </div>)}




            </div>
        </div>
    );
}










