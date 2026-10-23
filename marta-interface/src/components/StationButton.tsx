import { useState } from "react"

export default function StationButton({ station, handler }) {
    const [active, setActive] = useState(false);

    return (
        <button 
            onClick={() => {
                setActive(handler(station));
            }}
            className={active ? "bg-gray-800" : "bg-gray-900"}
        >
            {station}
        </button>
    )
}