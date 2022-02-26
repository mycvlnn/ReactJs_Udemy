import React, { useState } from "react";

//template context
const AuthContext = React.createContext({
  isLoggedIn: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const initToken = localStorage.getItem("token");

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initToken);
  const isLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const contextValues = {
    isLoggedIn,
    login,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
