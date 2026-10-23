import { useNavigate } from "react-router-dom";

const lines = ["gold", "red", "green", "blue"];

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h1>MARTA</h1>
                <button onClick={() => navigate("/about")}>About</button>
            </div>
            <div className="flex flex-col">
                {lines.map((l) => (
                    <button key={l} onClick={() => {
                        navigate('/lines', { state: { line: l } });
                    }}>{l}</button>
                ))}
            </div>
        </div>
    )
}