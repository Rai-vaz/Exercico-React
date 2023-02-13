import usePath from "../hooks/UsePath"

const Profile = () => {
  const {isHome} = usePath();
  return (
    <div>
      <h1>Profile</h1>
      {isHome ? <p>Você está na home</p> : <p>Você não está na home</p>}
    </div>
  )
}

export default Profile
