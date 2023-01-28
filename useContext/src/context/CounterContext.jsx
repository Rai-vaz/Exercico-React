import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext()

export default function CounterContextProvider({children}){
    const [counterW, setCounterW] = useState(0)
    const [dbCounter, setDbCounter] = useState(counterW)

    function addCounter(){
        setCounterW(counterW + 1)
    }

    useEffect(() => {
        setDbCounter(counterW * 2)
    },[counterW])

    return(
        <CounterContext.Provider value={{counterW, dbCounter, addCounter}}>
            {children}
        </CounterContext.Provider>
    )
}
