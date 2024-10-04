import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
    return <div className="navpane-container">
        <h1>lackatree</h1>
        <div className="links">
            <NavLink to={"/"}><span>Home</span></NavLink>
            <NavLink to={"/add"}><span>Add Data</span></NavLink>
        </div>
    </div>
}