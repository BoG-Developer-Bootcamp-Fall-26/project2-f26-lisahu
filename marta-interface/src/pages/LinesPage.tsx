import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import TrainList from "../components/TrainList";

const url = "https://marta-bootcamp-api.vercel.app";

export default function LinesPage() {
    const [currColor, setColor] = useState("green");
    const [trains, setTrains] = useState([]);
    const [stations, setStations] = useState([]);
    const stationData = "doraville";
    const trainData = "2";

    useEffect(() => {
        const fetchTrains = async (color) => {
            try {
                const response = await fetch(`${url}/arrivals/${color}`);
                const trainsJSON = await response.json();
                setTrains(trainsJSON);
            } catch(e) {
                throw e;
            }
        }

        const fetchStations = async (color) => {
            try {
                const response = await fetch(`${url}/stations/${color}`);
                const stationsJSON = await response.json();
                setStations(stationsJSON);
            } catch(e) {
                throw e;
            }
        }

        fetchTrains(currColor);
        fetchStations(currColor);

    }, [currColor])

    return (
      <div>
        <NavBar color={currColor} data={stationData} handler={setColor}/>
        <TrainList color={currColor} data={trainData} />
        <h1>{currColor}</h1>
        <h1>trains</h1>
        {trains.map((t) => (
            <li key={t}>{t.DESTINATION}</li>
        ))}
        <h1>stations</h1>
        {stations.map((s) => (
            <li key={s}>{s}</li>
        ))}
      </div>
    );
  }