import { useRef, useEffect, useState } from "react"

function App() {
  const labelRef = useRef('')
  const inputRef = useRef('')

  useEffect(() => {
    labelRef.current.innerHTML = 'NOME COMPLETO'
    labelRef.current.style.fontStyle = 'italic'
  },[])

  const [number, setNumber] = useState(0)

 //ref não re redenriza o componente
  const countRef = useRef(0)
  const buttonRef = useRef()
  const oldCountValue = useRef()

  //simulando click no botão
  useEffect(() => {
    buttonRef.current.click()
  },[])

  //guardando valor antigo de number
  useEffect(() => {
    oldCountValue.current = number
  }, [number])

  useEffect(() => {
    //causa um loop
    //setCount((count) => count + 10)
    countRef.current = Math.random()
  })

  const enviarFormulario = (evento) => {
    evento.preventDefault()
    inputRef.current.focus()
  }

  return (
    <div className="App">
    <form onSubmit={enviarFormulario}>
      <div>
        <label ref={labelRef}>Nome</label>
      </div>
      <input placeholder='Digite seu nome' ref={inputRef}/> 
      <div>
        <label>E-mail</label>
      </div>
      <input placeholder='Digite seu e-mail'/>
      <div>
        <button>Salvar</button>
      </div>
      
    </form>

    <h1>O valor do use Ref: {countRef.current}</h1>
    <h1>Valor antigo de number: {oldCountValue.current}</h1>
    <h1>O valor de number é: {number}</h1>
    <button ref={buttonRef} onClick={() => setNumber((number) => number + 1)}>Click</button>
     
    </div>
  )
}

export default App
