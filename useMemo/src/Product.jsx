import {memo} from 'react'

/* o memo reconhece todos os parametros e não redenriza os que 
já foram redenrizados*/


function Product({name}) {
    console.log('renderizou')
  return (
    <li >
        <strong>{name}</strong>
    </li>
  )
}

export default memo(Product)