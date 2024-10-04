// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Mamap from "./components/Mamap.tsx";
import TreeData from "./components/TreeData.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
      <>


          <TreeData />
          <Mamap/>
          <iframe
              src="https://ourworldindata.org/grapher/annual-change-forest-area?tab=map"
              loading="lazy"
              style={{ width: "100vw", height: "600px" }}
              allow="web-share; clipboard-write"
          ></iframe>
      </>
  );
}

export default App;
