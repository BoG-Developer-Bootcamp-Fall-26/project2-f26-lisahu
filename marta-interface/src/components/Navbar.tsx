//arriving, scheduled, northbound, southbound (or east/west)
const lines = [
    { color: "gold", cn: "bg-amber-300" },
    { color: "red", cn: "bg-red-600" },
    { color: "blue", cn: "bg-blue-700" },
    { color: "green", cn: "bg-green-900" },
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
                    {line.color}
                </button>
            ))}
        </div>
    )
}