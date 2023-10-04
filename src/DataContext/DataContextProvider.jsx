import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const DataContext = createContext();


function DataContextProvider({ children }) {
  //Navigation and Auth of Users 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ username, isAdmin });
    navigate('/');
  };
  const logout = () => {
    setUser(null);
    navigate('/login');
  }
  const auth = { user, login, logout }
//Other

  return (
    <DataContext.Provider value={auth }>
      {children}
    </DataContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(DataContext);
  console.log(auth);
  return auth;
};

function AuthRoute({ children }) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to='/login' />
  }
  return children
}

export { DataContextProvider, DataContext, AuthRoute };