import "./add.css";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Add() {
    const navigate = useLocation();
    const navigate1 = useNavigate();
    const [numberOfTrees, setNumberOfTrees] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const countryName = navigate?.state?.countryName;
        const url = "http://localhost:4000/tree";

        let value = {
            plantedBy: name,
            day: date,
            numberOfTrees: numberOfTrees,
            country: countryName
        };

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-Type": "application/json",
            }
        })

        navigate1("/");
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="numberOfTrees">No of Trees</label>
                <input id="numberOfTrees" type="number"
                       onChange={event => setNumberOfTrees(Number.parseInt(event.target.value))}/>
            </div>
            <div>
                <label htmlFor="day">Date</label>
                <input id="day" type="datetime-local" onChange={event => setDate(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="plantedBy">Planted By</label>
                <input id="plantedBy" type="text" onChange={event => setName(event.target.value)}/>
            </div>

            <button type="submit" value="Submit"></button>
        </form>

    </>
}