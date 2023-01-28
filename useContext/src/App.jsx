import { useState } from 'react'
import DoubleCounter from './DoubleCounter'
import CounterWContext from './components/CounterWContext'
import DoubleCounterWContext from './components/DoubleCounterWContext'
import Button from './components/Button'
import CounterContextProvider from './context/CounterContext'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)
  function incrementCounter() {
      setCounter(counter + 1)
  }
  return (
    <div>
      <div id='withoutcontext'> Sem use context
        <DoubleCounter counter={counter}/>
        <p>{counter}</p>
        
        <button onClick={incrementCounter}>Click</button>
      </div>
      <div id='withContext'>
        <CounterContextProvider>
          <DoubleCounterWContext/>
          <CounterWContext/>
          <Button/>
        </CounterContextProvider>
      </div>
    </div>
  )
}

export default App
