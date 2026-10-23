import { useEffect, useState } from "react";
import Train from "./Train";
import FilterButton from "./FilterButton";

//only return info for trains that are on the specific line
export default function TrainList({ color, data }) {
    const [direction, setDirection] = useState("");
    const [arrivalType, setArrivalType] = useState("");

    const isNorth = (color === "gold" || color === "red");

    const filterDirection = (value) => {
        if (value === direction) {
            setDirection("");
        } else {
            setDirection(value);
        }
    }

    const filterArrival = (value) => {
        if (value === arrivalType) {
            setArrivalType("");
        } else {
            setArrivalType(value);
        }
    }

    useEffect(() => {
        setDirection("");
        setArrivalType("");
    }, [color])

    return (
        <div className="flex flex-col">
            <div className="flex flex-row space-x-2">
                <FilterButton value={"Arriving"} handler={filterArrival} state={arrivalType}/>
                <FilterButton value={"Scheduled"} handler={filterArrival} state={arrivalType}/>
                <FilterButton value={isNorth ? "Northbound" : "Eastbound"} handler={filterDirection} state={direction}/>
                <FilterButton value={isNorth ? "Southbound" : "Westbound"} handler={filterDirection} state={direction}/>
            </div>
            {data.filter(t =>
                (direction === "" || t.DIRECTION === direction[0]) &&
                (arrivalType === "" ||
                    (arrivalType === "Arriving") === (t.WAITING_TIME === "Arriving"))
            ).map((t) => (
                <Train key={t} color={color} train={t} />
            ))}
        </div>
    )
}