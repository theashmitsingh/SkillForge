import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token') || '',
    loggedInUser: localStorage.getItem('loggedInUser') || '',
  });

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('loggedInUser', user);
    setAuth({ token, loggedInUser: user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setAuth({ token: '', loggedInUser: '' });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
