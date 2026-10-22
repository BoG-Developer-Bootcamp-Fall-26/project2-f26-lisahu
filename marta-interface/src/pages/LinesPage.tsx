import { useState } from "react";
import NavBar from "../components/Navbar";
import TrainList from "../components/TrainList";

export default function LinesPage() {
    // initialize some currColor state
    const [currColor, setColor] = useState("green");
    const stationData = "doraville";
    const trainData = "2";
    
    function handleClick(value: string) {
        setColor(value);
    }

    return (
      <div>
        <NavBar color={currColor} data={stationData} handler={handleClick}/>
        <TrainList color={currColor} data={trainData} />
        <p>{currColor}</p>
      </div>
    );
  }