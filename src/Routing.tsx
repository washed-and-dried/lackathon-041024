import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Mamap from "./components/Mamap.tsx";

export default function Routing() {
    return (
        <Routes>
            <Route element={<Mamap/>} path="/"/>
            <Route element={<Add/>} path="/add"/>
        </Routes>
    )
}