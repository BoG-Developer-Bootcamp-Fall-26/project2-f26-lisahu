import Train from "./Train";

//only return info for trains that are on the specific line
export default function TrainList({ color, data }) {
    return (
        <div>
            {data.map((t) => (
                <Train key={`${t.TRAIN_ID}-${t.EVENT_TIME}`} color={color} train={t}/>
            ))}
        </div>
    )
}