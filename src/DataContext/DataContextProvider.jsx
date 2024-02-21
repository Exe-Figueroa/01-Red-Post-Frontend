import React, { createContext, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { base_url } from '../../config/config';

import Swal from 'sweetalert2';

// Create a React context for data sharing
const DataContext = createContext();

// DataContextProvider component to provide context and manage user state
function DataContextProvider({ children }) {
  // States for user information, loading and login endpoint status
  const [user, setUser] = useState({
    username: '',
    password: '',
    userId: null,
    token: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Navigation and User Authentication using React Router
  const navigate = useNavigate();

  // Function to handle user login
  const login = async (username, password) => {
    try {
      setIsLoading(true);
      const loginEndpoint = verifyUserOrMail(username) || null;
      let userObject;
      if (loginEndpoint === 'username') {
        userObject = {
          username,
          password
        }
      }
      if (loginEndpoint === 'email') {
        userObject = {
          email: username.toLowerCase(),
          password
        }
      }
      // Make a POST request to the login endpoint
      const res = await fetch(`${base_url}/login/${loginEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      });

      // Check if the response is successful
      if (!res.ok) {
        throw 'Incorrect username or password, please try again';
      }

      // Parse the response data and update the user state
      const data = await res.json();
      setUser(data);

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      // Handle errors and display a failure message
      setIsLoading(false);
      failureRequest(error, 'Operation failure');
    }
  };
  
  function verifyUserOrMail(userOrMail) {
    // Regular expression for validating a username
    const userRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    // Regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the provided value matches the username pattern
    const isUser = userRegex.test(userOrMail);

    // Check if the provided value matches the email pattern
    const isEmail = emailRegex.test(userOrMail);
    // Determine the type of input and return a corresponding result
    if (isUser) {
      return 'username'
    }
    if (isEmail) {
      return 'email'
    }
  }

  // Function to handle user logout
  const logout = () => {
    // Clear user information and redirect to the login page
    setUser(null);
    navigate('/login');
  };

  // Function to display success message using SweetAlert2
  function successRequest(message) {
    Swal.fire({
      title: 'Sent successfully!',
      text: message,
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  // Function to display failure message using SweetAlert2
  function failureRequest(message, login) {
    Swal.fire({
      title: login || 'Failed to send!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }

  // Object containing authentication functions and user information
  const auth = { user, login, logout };

  // Provide the context and essential functions to the children components
  return (
    <DataContext.Provider value={{
      auth,
      successRequest,
      failureRequest,
      isLoading,
    }}>
      {children}
    </DataContext.Provider>
  );
}

// Hook to access the authentication context
function useAuth() {
  const { auth } = useContext(DataContext);
  return auth;
}

// Component to conditionally render children based on user authentication
function AuthRoute({ children }) {
  const { user } = useAuth();
  if (!user.username) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to='/login' />;
  }
  // Render the children if the user is authenticated
  return children;
}

// Export the DataContextProvider, DataContext, and AuthRoute components
export { DataContextProvider, DataContext, AuthRoute };
