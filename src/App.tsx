// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Routing from "./Routing";
import Navbar from "./components/Navbar.tsx";

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div id="app-container">
                <Navbar/>
                <Routing/>
            </div>

        </>
    );
}

export default App;
