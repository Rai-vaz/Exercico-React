import { useState, useEffect } from 'react'


function App() {
  const [showContent, setShowContent] = useState(false)

  function handleClick() {
    setShowContent(!showContent)
  }

  return (
    <div>
      <button onClick={handleClick}>{showContent ? 'Click para esconder o conteúdo': 'Click para exibir o conteúdo'}</button>
      {showContent && <PrivetContent/>}
    </div>
  )
}

function PrivetContent(){
  useEffect(() => {
    document.title = "Exibido item ocúlto"

    //desfazendo ação do useEffect
    return () => {
      document.title = "Vite + React"
    }
  },[])


  return (
    <h1>CONTEÚDO PRIVADO</h1>
  )
}

export default App
