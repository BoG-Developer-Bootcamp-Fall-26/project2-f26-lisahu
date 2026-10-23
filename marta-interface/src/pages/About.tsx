import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h1>About MARTA</h1>
                <button onClick={() => navigate("/")}>Home</button>
            </div>
            <div>Pretend there's a map here...</div>
        </div>
    )
}