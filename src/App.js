import React, { useState } from "react"
import AddUser from "./components/Users/AddUser"
import "./App.css"
import UsersList from "./components/Users/UsersList"

const App = () => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [user, ...prevUsersList]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
