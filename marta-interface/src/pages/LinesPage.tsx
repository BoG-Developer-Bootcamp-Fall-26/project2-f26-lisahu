import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import TrainList from "../components/TrainList";
import LineSelector from "../components/LineSelector";

const url = "https://marta-bootcamp-api.vercel.app";

export default function LinesPage() {
    const [currColor, setColor] = useState("green");
    const [trains, setTrains] = useState([]);
    const [stations, setStations] = useState([]);

    useEffect(() => {
        
        fetch(`${url}/arrivals/${currColor}`)
        .then(response => response.json())
        .then(data => setTrains(data));

        fetch(`${url}/stations/${currColor}`)
        .then(response => response.json())
        .then(data => setStations(data));

    }, [currColor])

    return (
        <div>
            <LineSelector color={currColor} handler={setColor} />
            <h1>{currColor}</h1>
            <div className="flex flex-row">
                <NavBar color={currColor} data={stations} />
                <TrainList color={currColor} data={trains} />
            </div>
        </div>
    );
}