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
      setUser(data);
      navigate('/');
    } catch (error) {
      alert('Ocurrió un error')
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
  function failureRequest(message) {
    Swal.fire({
      title: 'Failed to send!',
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