import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { base_url } from '../../config/config';

import Swal from 'sweetalert2'

const DataContext = createContext();


function DataContextProvider({ children }) {
  //States
  const [user, setUser] = useState({
    username: '',
    password: '',
    userId: null,
    token: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  //Navigation and Auth of Users 
  const navigate = useNavigate();

  const login = async (username, password) => {
    setIsLoading(true);
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
      if (!res.ok) {
        throw 'Usuario o contraseña incorrecta'
      }
      const data = await res.json();
      setUser(data);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      failureRequest(error, 'Operation failure')
    }
  };
  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  //Success && Failure Request
  function successRequest(message) {
    Swal.fire({
      title: 'Sent successfully!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };
  function failureRequest(message, login) {
    Swal.fire({
      title: login || 'Failed to send!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  };

  //Other
  const auth = { user, login, logout }
  return (
    <DataContext.Provider value={{
      auth, 
      successRequest, 
      failureRequest,
      isLoading
    }}>
      {children}
    </DataContext.Provider>
  );
}

function useAuth() {
  const { auth } = useContext(DataContext);
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