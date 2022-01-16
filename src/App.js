import React, { useEffect, useState } from "react"

import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import MainHeader from "./components/MainHeader/MainHeader"
import AuthContext from "./store/authContext"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true)
    localStorage.setItem("isLoggedIn", "1")
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const storeUserLoginInfo = localStorage.getItem("isLoggedIn")
    if (storeUserLoginInfo === "1") setIsLoggedIn(true)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  )
}

export default App
