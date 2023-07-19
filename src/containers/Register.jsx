import {React, useState} from 'react';
import '../styles/Register.css';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export function Register() {
  const [eye, setEye] = useState(true);
  function toggleEye() {
    setEye(!eye)
  }
  return (
    <div className='Register'>
      <form  action='' className="register-container">
        <input type="text" placeholder='Name' className='input'/>
        <input type="text" placeholder='Last name' className='input'/>
        <input type="text" placeholder='Username' className='input'/>
        <input type="text" placeholder='Email' className='input'/>
          
        <div className="container-input-password">
          <input type={eye?"text":"password"} placeholder='Password' className='input'/>
          {eye?
          <FaEyeSlash className='eye' onClick={toggleEye}/>
          :
          <FaEye className='eye' onClick={toggleEye}/>
          }
        </div>
        <div className="container-input-password">
          <input type={eye?"text":"password"} placeholder='Check Password'
          value="" className='input'/>
          {eye?
          <FaEyeSlash className='eye' onClick={toggleEye}/>
          :
          <FaEye className='eye' onClick={toggleEye}/>
          }
        </div>

        <div className="buttons-container">
          <input type="submit" value="Register" className="register-btn"/>
          <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
}
