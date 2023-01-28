import {useContext} from 'react'
import { CounterContext } from '../context/CounterContext'

export default function CounterWContext() {
    const {counterW} = useContext(CounterContext)
    return(
        <div>
            <p>Valor Original</p>
            <p>{counterW}</p>
        </div>
    )
}

