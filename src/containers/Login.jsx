import {React, useState} from 'react';
import '../styles/Login.css';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export function Login() {
  const [eye, setEye] = useState(true);
  function toggleEye() {
    setEye(!eye)
  }
  return (
    <div className='Login'>
      <form  action='' className="login-container">
        <input type="text" placeholder='Username/Email' className='input'/>
          
        <div className="container-input-logo">
          <input type={eye?"password":"eye"} placeholder='Password' className='input'/>
          {eye?
          <FaEyeSlash className='eye' onClick={toggleEye}/>
          :
          <FaEye className='eye' onClick={toggleEye}/>
          }
        </div>

        <div className="buttons-container">
          <input type="submit" value="Login" className="login-btn"/>
          <button className="register-btn">Register</button>
        </div>
      </form>
    </div>
  );
}
