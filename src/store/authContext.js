import React, { useState, useEffect } from "react"

//AuthContext contain component
//Ngoài ra việc định nghĩa như thế này còn giúp chúng gợi ý code trong IDE
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContextProvider = ({ children }) => {
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
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
