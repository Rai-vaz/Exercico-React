import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import { NavBar } from './components/NavBar'




function App() {

  return (
    <div className="App">
    
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='profile' element={<Profile/>}/>
      </Routes>
      
    </Router>
    
      
    </div>
  )
}

export default App
