import React, {useEffect, useState} from "react";
import {csv} from "d3-fetch";
import {scaleLinear} from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
} from "react-simple-maps";

const geoUrl = "./data/features.json";

const colorScale = scaleLinear()
    .domain([0.29, 0.68])
    .range(["#ffedea", "#ff5233"]);

function handleClick(thing){
    return async () => {

        const url = "";
        const data = await fetch("localhost:4000/tree?pageNumber=0&descending=false&country=India");
        console.log(data);
        const jsonData = await data.json();
        console.log(jsonData);
    }
}

export default function Mamap() {
    const [data, setData] = useState([]);

    useEffect(() => {
        csv(`./data/vulnerability.csv`).then((data) => {
            setData(data);
        });
    }, []);


    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 125
            }}
        >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5}/>
            <Graticule stroke="#E4E5E6" strokeWidth={0.5}/>
            {data.length > 0 && (
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map((geo) => {
                            const d = data.find((s) => s.ISO3 === geo.id);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                                    onClick={handleClick(geo.properties)}
                                />
                            );
                        })
                    }
                </Geographies>
            )}
        </ComposableMap>
    );
};

