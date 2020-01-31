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
                    {about && about.name}
                    <img src={about && about.photos} alt="" />
                    {about && about.details}
                    {about && about.price}
                </div>)}




            </div>
        </div>
    );
}










