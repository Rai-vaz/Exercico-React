import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>Página de Contato</h1>
        <p>
          <Link to='/contact/1'>Froma de contato 1</Link>
        </p>
        <p>
          <Link to='/contact/2'>Froma de contato 2</Link>
        </p>
        <p>
          <Link to='/contact/3'>Froma de contato 3</Link>
        </p>
    </div>
  )
}

export default Contact