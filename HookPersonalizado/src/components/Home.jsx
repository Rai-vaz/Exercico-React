import usePath from "../hooks/UsePath"

const Home = () => {
  const { isHome } = usePath()
  return (
    <div>
      <h1>Home</h1>
      {isHome ? <p>Você está na home</p> : <p>Voc~e não está na home</p>}
    </div>
  )
}

export default Home
