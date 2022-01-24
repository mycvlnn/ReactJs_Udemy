import UserFinder from "./components/UserFinder"
import { UserContext } from "./store/UserContext"

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
]
function App() {
  const usersContext = {
    users: DUMMY_USERS,
  }
  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />
    </UserContext.Provider>
  )
}

export default App
