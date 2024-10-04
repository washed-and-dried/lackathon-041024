import {useState} from "react";

async function fetchMap(setMapData){
    const data = await fetch("https://data-api.globalforestwatch.org/datasets");
    setMapData(await data.json());
}

export default function TreeData() {
    const [mapData, setMapData] = useState([]);
    fetchMap(setMapData)

    return <>
        {mapData.data?.map((thing) => {
            JSON.stringify(thing.dataset)
        })}
    </>
}