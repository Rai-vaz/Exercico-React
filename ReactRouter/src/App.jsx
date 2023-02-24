//o outlet contem as páginas que são rotas aninhadas a rota do componente App 
import { Outlet } from 'react-router-dom'
import NavBar from './componentes/NavBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <p>Páginas de navegação</p>
      <Outlet/>
      <p>Footer da página</p>
    </div>
  )
}

export default App
