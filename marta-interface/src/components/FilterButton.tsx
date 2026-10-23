export default function FilterButton({ value, handler, state }) {
    return (
        <button
            className={`text-black rounded ${value === state ? "bg-gray-400" : "bg-gray-200"}`}
            onClick={() => handler(value)}
        >
            {value}
        </button>
    )
}