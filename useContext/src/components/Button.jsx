import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"



export default function Button() {
    const {addCounter} = useContext(CounterContext)
    return(
        <div>
            <button onClick={addCounter}>Click</button>
        </div>
    )
}