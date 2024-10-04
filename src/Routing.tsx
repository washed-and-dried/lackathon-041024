import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

export default function Routing() {
    return (
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Add/>} path="/add"/>
        </Routes>
    )
}