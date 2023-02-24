import { useParams, useNavigate } from "react-router-dom"

const ContactDetails = () => {
    const {id} = useParams()

    //redirecionando usuário
    const navigate = useNavigate()

    function handleClick() {
        console.log("Mensagem enviada")
        return navigate('/')
    }


  return (
    <div>
        <h1>{`Exibindo mais informações da página ${id}`}</h1>
        <button onClick={handleClick}>Enviar mensagem</button>
    </div>
  )
}

export default ContactDetails