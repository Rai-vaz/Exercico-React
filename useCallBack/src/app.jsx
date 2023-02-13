import {useState, useCallback} from 'react'

import './app.css'
import Productlist from './Productlist'

export function App() {

  const [product, setProduct] = useState('')
  const [productList, setProductList] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    setProductList([...productList, product])
    setProduct('')
  }

  const listModifier = useCallback( (list) => {
    const spaceList = list.map((item) => item.split('').join(' '))
    return spaceList}, [])

   

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Adicionar produto</label><br/>
        <input value={product} onChange={(evento) => setProduct(evento.target.value) } type='text' id="text" placeholder='Digite o nome do seu produto'/>
        <div>
          <button>Adicionar</button>
        </div>
      </form>

      <h1>Item adicionados</h1>
      
      <Productlist list={productList} listModifier={listModifier}/>
     
    </div>
  )
}
