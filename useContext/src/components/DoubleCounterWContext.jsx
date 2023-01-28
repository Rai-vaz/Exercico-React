import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


export default function DoubleCounterWContext(){
    const {dbCounter} = useContext(CounterContext)
    return(
        <div>
            <p>Valor Duplicado</p>
            <p>{dbCounter}</p>
        </div>
    )
}