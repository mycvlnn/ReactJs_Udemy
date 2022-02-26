import React, { useState } from "react";

//template context
const AuthContext = React.createContext({
  isLoggedIn: null,
  token: null,
  login: () => {},
  logout: () => {},
});

const initToken = localStorage.getItem("token");

const calculatorRemainingTime = (experationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(experationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initToken);
  const isLoggedIn = !!token;

  const login = (token, experationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    const remainingTime = calculatorRemainingTime(experationTime);
    setTimeout(logout, remainingTime);
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
