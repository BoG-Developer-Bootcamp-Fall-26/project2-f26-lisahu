//takes data for one train and returns display info
//if DELAY === "T0S" the train is on time

export default function Train({ color, train }) {
    return (
       <div >
        <div>{`${train.STATION} -> ${train.DESTINATION}`}</div>
        <div className="flex flex-row space-x-2">
            <div>{color}</div>
            <div>{train.DELAY === "T0S" ? "On Time" : "Delayed"}</div>
            <div>{train.WAITING_TIME}</div>
        </div>
       </div>
    )
}