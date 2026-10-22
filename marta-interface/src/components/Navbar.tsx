//arriving, scheduled, northbound, southbound (or east/west)
const lines = [
    { color: "gold", cn: "bg-amber-300", disp: "Gold" },
    { color: "red", cn: "bg-red-600", disp: "Red" },
    { color: "blue", cn: "bg-blue-700", disp: "Blue" },
    { color: "green", cn: "bg-green-900", disp: "Green" },
]

export default function NavBar({ color, data, handler }) {
    return (
        <div className="flex flex-row justify-between">
            {lines.map((line) => (
                <button
                    className={line.cn}
                    onClick={() => {
                        handler(line.color);
                    }}
                >
                    {line.disp}
                </button>
            ))}
        </div>
    )
}