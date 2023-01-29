{/*useReducer armazena vários estados em seu objeto state */}
import { useReducer, useState } from "react"

const initialState = {count: 0}
const actions = {
    increase: 'increase',
    decrease: 'decrease',
    doublue: 'double',
    half: 'half',
    reset: 'reset',
    custom: 'custom'
}


{/*action é um objeto que tem como uma das suas o type */}
function reducer(state, action) {
    switch (action.type) {
        case actions.increase:
            return {count: state.count + 1}
            break;
        case actions.decrease:
            if (state.count > 0) {
                return(
                    {count: state.count - 1}
                )
            }else{
                return state
            }
            break;
        case actions.doublue:
            return{count: state.count * 2}
            break;
        case actions.half:
            return{count: state.count / 2}
            break;
        case actions.reset:
            return{count: initialState.count}
            break;
        case actions.custom:
            return {count: action.payload}
        default:
            return state;
            break;
    }
}

export default function CounterUseReducer(){
                                        {/*função muda estado, estado inicial */}
    const [state, dispacth] = useReducer(reducer, initialState)
    const [CustomCounter, setCustomCounter] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        {/*payload é um atributo do objeto action para inserir valor no state */}
        dispacth({type: actions.custom, payload: CustomCounter})
    }
    return(

        <div>
            <h2>Counter com useReducer</h2>
            <button onClick={() => dispacth({type: actions.increase})}>+</button>
            <span>{state.count}</span>
            <button onClick={() => dispacth({type: actions.decrease})}>-</button>
            <button onClick={() => dispacth({type: actions.doublue})}>x2</button>
            <button onClick={() => dispacth({type: actions.half})}>/2</button>
            <button onClick={() => dispacth({type: actions.reset})}>Reset</button>

            <form onSubmit={handleSubmit}>
                <label htmlFor='custom-value'>Valor personalizado:</label>
                <input 
                    type='number' 
                    id='custom-value'
                    value={CustomCounter}
                    onChange={(e) => setCustomCounter(e.target.value)}
                />

                <button type='submit'>Inserir</button>
            </form>

        </div>
 
    )
}