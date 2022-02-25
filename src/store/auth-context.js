import React, { useState } from "react";

//template context
const AuthContext = React.createContext({
  isLoggedIn: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const isLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
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
