import {useState} from 'react'



export default function CounterUseState(){
    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter + 1)
    }

    function decrease() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return(
        <div>
            <h2>Counter com useState</h2>
            <button onClick={increase}>+</button>
            <span>{counter}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}