import { useState, useMemo } from 'preact/hooks'
import { products as ProductsData } from './buy.json'
import  Product  from './Product'
import ExampleTitle from './ExampleTitle'
import './app.css'

export function App() {
  const [product, setProduct] = useState(ProductsData)
  const [newProduct, setNewProduct] = useState('')
  const [title] = useState('Título de exemplo')

  //memorizando componente ExampleTitle
  const memoizedExampleTitle = useMemo(() => <ExampleTitle title={title}/>, [title])


  function handleSubmit(event) {
    event.preventDefault()
    //adicionando mais um objeto ao array
    setProduct([...product, {name: newProduct }])
    setNewProduct('')

  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={newProduct}
            onChange={(event) => setNewProduct(event.target.value) }
          />
        </form>
        <ul>
          {
            product.map((product) => (
              <Product key={product.name} name={product.name}/>
            ))
          }
        </ul>
        {memoizedExampleTitle}
      </div>
    </>
  )
}
