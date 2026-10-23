const lines = [
    { color: "gold", cn: "bg-amber-300", disp: "Gold", activecn: "bg-amber-500" },
    { color: "red", cn: "bg-red-600", disp: "Red", activecn: "bg-red-800" },
    { color: "blue", cn: "bg-blue-700", disp: "Blue", activecn: "bg-blue-900" },
    { color: "green", cn: "bg-green-700", disp: "Green", activecn: "bg-green-900" },
]

export default function LineSelector({ color, handler }) {
    return (
        <div className="flex flex-row justify-between">
            {lines.map((line) => (
                <button
                    key={line.color}
                    className={color === line.color ? line.activecn : line.cn}
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