//arriving, scheduled, northbound, southbound (or east/west)

import StationButton from "./StationButton";

export default function NavBar({ color, data, handler }) {
    return (
        <div className="flex flex-col">
            {data.map((s) => (
                <StationButton key={`${s}-${color}`} station={s} handler={handler} />
            ))}
        </div>
    )
}