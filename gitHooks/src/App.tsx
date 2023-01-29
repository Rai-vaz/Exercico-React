import { useState, useEffect } from 'react'


function App() {
  const [repositores, setRepositores] = useState([
    {id:1, name:'Repo1'},
    {id:2, name:'Repo2'},
    {id:3, name:'Repo3'}

  ])

  const [repoGitHub, setRepoGitHub] = useState([])

  useEffect( () => {
   async function fetcData(){
      const respose = await fetch('https://api.github.com/users/rai-vaz/repos')
      const myDataJson = await respose.json()
      return setRepoGitHub(myDataJson)
     
    }
    fetcData()
    }, [])

  function handleAddRepositorio(){
    setRepositores([
      ...repositores,
      {id: Math.random(), name: 'Novo repositório'}
    ])
  }

  function handleFavorite(id) {
    const newRepoGitHub = repoGitHub.map((repo) => {
    return repo.id == id ? {...repo, favorite: !repo.favorite} : repo
    } )

    setRepoGitHub(newRepoGitHub)
  }

  useEffect(() => {
    const filtered = repoGitHub.filter(repo => repo.favorite)
    document.title = `Você tem ${filtered.length} favoritos`
    
  },[repoGitHub])


  return (
    <div className="App">
      <ul>
          {repositores.map(repo => 
          <li key={repo.id}>{repo.name}</li>
          )}
      </ul>
      <button onClick={handleAddRepositorio}>
        Adicionar novo repositório
      </button>
      <h1>My repositories on git hub</h1>
      <div>
        <ul>
        {
          repoGitHub.map(data => 
            <li key={data.id}>{data.name}
              {data.favorite && <span>(Favorito)</span>}
              <button onClick={() => {handleFavorite(data.id)}}>Favoritar</button>

            </li>
          )
          
        }
        

       </ul>
    
      </div>
      
      
    </div>
  )
}

export default App
