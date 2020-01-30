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
                <div className="about_perf">
                    {JSON.stringify(sta[0] && sta[0].name)}
                    <img src={sta[0] && sta[0].photos} alt="" />
                    {JSON.stringify(sta[0] && sta[0].details)}
                    {JSON.stringify(sta[0] && sta[0].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[1] && sta[1].name)}
                    <img src={sta[1] && sta[1].photos} alt="" />
                    {JSON.stringify(sta[1] && sta[1].details)}
                    {JSON.stringify(sta[1] && sta[1].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[2] && sta[2].name)}
                    <img src={sta[2] && sta[2].photos} alt="" />
                    {JSON.stringify(sta[2] && sta[2].details)}
                    {JSON.stringify(sta[2] && sta[2].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[3] && sta[3].name)}
                    <img src={sta[3] && sta[3].photos} alt="" />
                    {JSON.stringify(sta[3] && sta[3].details)}
                    {JSON.stringify(sta[3] && sta[3].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[4] && sta[4].name)}
                    <img src={sta[4] && sta[4].photos} alt="" />
                    {JSON.stringify(sta[4] && sta[4].details)}
                    {JSON.stringify(sta[4] && sta[4].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[5] && sta[5].name)}
                    <img src={sta[5] && sta[5].photos} alt="" />
                    {JSON.stringify(sta[5] && sta[5].details)}
                    {JSON.stringify(sta[5] && sta[5].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[6] && sta[6].name)}
                    <img src={sta[6] && sta[6].photos} alt="" />
                    {JSON.stringify(sta[6] && sta[6].details)}
                    {JSON.stringify(sta[6] && sta[6].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[7] && sta[7].name)}
                    <img src={sta[7] && sta[7].photos} alt="" />
                    {JSON.stringify(sta[7] && sta[7].details)}
                    {JSON.stringify(sta[7] && sta[7].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[8] && sta[8].name)}
                    <img src={sta[8] && sta[8].photos} alt="" />
                    {JSON.stringify(sta[8] && sta[8].details)}
                    {JSON.stringify(sta[8] && sta[8].price)}
                </div>
                <div className="about_perf">
                    {JSON.stringify(sta[9] && sta[9].name)}
                    <img src={sta[9] && sta[9].photos} alt="" />
                    {JSON.stringify(sta[9] && sta[9].details)}
                    {JSON.stringify(sta[9] && sta[9].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[10] && sta[10].name)}
                    <img src={sta[10] && sta[10].photos} alt="" />
                    {JSON.stringify(sta[10] && sta[10].details)}
                    {JSON.stringify(sta[10] && sta[10].price)}
                </div>

                <div className="about_perf">
                    {JSON.stringify(sta[11] && sta[11].name)}
                    <img src={sta[11] && sta[11].photos} alt="" />
                    {JSON.stringify(sta[11] && sta[11].details)}
                    {JSON.stringify(sta[11] && sta[11].price)}
                </div>

            </div>
        </div>
    );
}










