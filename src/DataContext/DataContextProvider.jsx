import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { base_url } from '../../config/config';

const DataContext = createContext();


function DataContextProvider({ children }) {
  //States
  const [user, setUser] = useState({
    username: '',
    password: '',
    token: ''
  });
  //Navigation and Auth of Users 
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const res = await fetch(`${base_url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await res.json();
      navigate('/');
      setUser(data);
    } catch (error) {
      alert('Ocurrió un error')
    }

  };
  const logout = () => {
    setUser(null);
    navigate('/login');
  }
  //Other
  const auth = { user, login, logout }
  return (
    <DataContext.Provider value={auth}>
      {children}
    </DataContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(DataContext);
  return auth;
};

function AuthRoute({ children }) {
  const { user } = useAuth();
  if (!user.username) {
    return <Navigate to='/login' />
  }
  return children
};

export { DataContextProvider, DataContext, AuthRoute };