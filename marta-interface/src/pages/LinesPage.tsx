import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import TrainList from "../components/TrainList";
import LineSelector from "../components/LineSelector";

const url = "https://marta-bootcamp-api.vercel.app";

export default function LinesPage() {
    const [currColor, setColor] = useState("green");
    const [trains, setTrains] = useState([]);
    const [stations, setStations] = useState([]);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch(`${url}/arrivals/${currColor}`)
            .then(response => response.json())
            .then(data => setTrains(data));

        fetch(`${url}/stations/${currColor}`)
            .then(response => response.json())
            .then(data => setStations(data));

        setSelected([]);
        setLoading(false);

    }, [currColor])

    const handleSelect = (station) => {
        if (selected.includes(station)) {
            setSelected(selected.filter(s => s !== station));
            return false;
        } else {
            setSelected([...selected, station]);
            return true;
        }
    }

    return (
        <div>
            <LineSelector color={currColor} handler={setColor} />
            <h1>{currColor}</h1>
            {loading
                ? <div>Loading...</div>
                : <div className="flex flex-row">
                    <NavBar color={currColor} data={stations} handler={handleSelect} />
                    <TrainList color={currColor} data={selected.length === 0 ? trains : trains.filter(t => selected.some(s => s.toUpperCase() === t.STATION))} />
                </div>
            }
        </div>
    );
}