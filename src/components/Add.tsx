import Mamap from "./Mamap.tsx";
import "./add.css";

export default function Add() {
    return <>
        <form action="localhost:4000/tree" method="POST">
            <div>
                <label id="numberOfTrees">No of Trees</label>
                <input name="numberOfTrees" type="number"/>
            </div>
            <div>
                <label id="day">Date</label>
                <input name="day" type="date"/>
            </div>
            <div>
                <label id="plantedBy">Planted By</label>
                <input name="plantedBy" type="text"/>
            </div>
        </form>

    </>
}