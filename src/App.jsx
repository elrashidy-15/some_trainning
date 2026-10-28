import './App.css'
import Todo from './Todo'
import Contact from './Contact'
import UserCard from './UserCard'

function App() {
  return (
    <div className="App">
      <Contact />
      <Todo />
      <UserCard name="John Doe" role={true} massage={5} online={true} />
      <UserCard name='Mohamed' role={false} online={false} massage={2}/>
    </div>
  )
}

export default App
