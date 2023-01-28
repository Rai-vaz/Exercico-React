import { useEffect, useState } from "react"

function DoubleCounter({counter}) {
    const [doubleCounter, setDoubleCounter ] = useState(counter)

    useEffect(() => {
        setDoubleCounter(counter * 2)
    },[counter])

    return (
        <div>
            <p>{doubleCounter}</p>
        </div>
    )
}

export default DoubleCounter