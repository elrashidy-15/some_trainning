export default function UserCard({name = "Unknown", role , massage, online}) {
  return (
    <div className="center" style={{color:"white" ,}}>
      <div>{online ? <>
        <h2 style={{color:"green"}}>Online &bull;</h2></> : <h2 style={{color:"red"}} >Offline</h2>}</div>
      <h2>Name : {name}</h2>
      <h3>{role&&"Admin"}</h3>
      <h3 style={{color:"violet"}}>{massage&&`You Have ${massage} Unread Messages`}</h3>
    </div>
  )
}
