import { React, useContext, useState } from 'react';
import './Login.css';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { DataContext } from '../../DataContext/DataContextProvider';

export function Login() {
  //States
  const [eye, setEye] = useState(true);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  //UseContext 
  const { login } = useContext(DataContext);

  //Functions
  function toggleEye() {
    setEye(!eye)
  };
  function onSubmit(e) {
    e.preventDefault();
    login(loginData.username, loginData.password)
    // login(loginData)

  }


  return (
    <div className='Login'>
      <form onSubmit={(e) => onSubmit(e)} className="login-container">
        <input
          type="text"
          placeholder='Username/Email'
          className='input'
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
        />

        <div className="container-input-logo">
          <input
            type={eye ? "password" : "text"}
            placeholder='Password'
            className='input'
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />

          {eye ?
            <FaEyeSlash className='eye' onClick={toggleEye} />
            :
            <FaEye className='eye' onClick={toggleEye} />
          }
        </div>

        <div className="buttons-container">
          {/* <button type="submit" className="login-btn">Login<button/> */}
          <button className='login-btn' type='submit'>Login</button>
          <button className="register-btn">Register</button>
        </div>
      </form>
    </div>
  );
}
