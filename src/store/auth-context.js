import React, { useState, useEffect, useCallback } from "react";

//template context
const AuthContext = React.createContext({
  isLoggedIn: null,
  token: null,
  login: () => {},
  logout: () => {},
});

let logoutTimer;

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  const login = (token, experationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("experationTime", experationTime);
    const remainingTime = experationTime - Date.now();
    logoutTimer = setTimeout(logout, remainingTime);
    setToken(token);
  };

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("experationTime");
    if (logoutTimer) clearTimeout(logoutTimer);
  }, []);

  useEffect(() => {
    if (token) {
      let timeLeft = localStorage.getItem("experationTime") - Date.now();
      if (timeLeft < 6000) timeLeft = 0;
      logoutTimer = setTimeout(logout, timeLeft);
    }
  }, [token, logout]);

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
