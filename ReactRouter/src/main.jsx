import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//importantando página de navegação
import Home from './paginas/Home'
import About from './paginas/About'
import Contact from './paginas/Contact'
import ErroPage from './paginas/ErroPage'
import ContactDetails from './paginas/ContactDetails'


//configurando router
import { createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

//a const routers é um array de objetos que tem duas propiedades path:caminho e element:componente a ser renderizado

const routers = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErroPage/>,
    children: [
      {
        path: '/',
        element: <Home/>

      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      //rota alinhada com indentificador único
      {
        //o id é um variável que estou passando como parametro na url
        path: '/contact/:id',
        element: <ContactDetails/>
      },
      //navegando para página não existente
      {
        path: "/oldcontact",
        element: <Navigate to="/contact"/>
      }
    ]
  } 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
