import {React, useState} from 'react';
import '../styles/Register.css';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { base_url } from '../../../config/config';

export function Register() {
  const [eye, setEye] = useState(true);
  const [data, setData] = useState({});
  function toggleEye() {
    setEye(!eye);
  };

  function onChange(id, value) {
    setData({...data, [id]:value});
    console.log(data);
  };

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = fetch(`${base_url}/users`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      });
      alert('se envió')
    } catch (error) {
      alert(error);
      console.error(error)
    };
  };
  
  return (
    <div className='Register'>
      <form  
      onSubmit={onSubmit}
      className="register-container"
      >
        <input 
        value={data.name}
        type="text" 
        placeholder='Name' 
        className='input'
        onChange={(e)=>{
          onChange(e.target.id, e.target.value)
        }}
        id='name'
        />
        <input 
        value={data.lastName}
        type="text" 
        placeholder='Last name' 
        className='input'
        onChange={(e)=>{
          onChange(e.target.id, e.target.value)
        }}
        id='lastName'
        />
        <input 
        value={data.username}
        type="text" 
        placeholder='Username' 
        className='input'
        onChange={(e)=>{
          onChange(e.target.id, e.target.value)
        }}
        id='username'
        />
        <input 
        value={data.email}
        type="text" 
        placeholder='Email' 
        className='input'
        onChange={(e)=>{
          onChange(e.target.id, e.target.value)
        }}
        id='email'
        />
          
        <div className="container-input-password">
          <input 
          value={data.password}
          type={eye? "text":"password"} 
          placeholder='Password' 
          className='input'
          onChange={(e)=>{
            onChange(e.target.id, e.target.value)
          }}
          id='password'
          />
          {eye?
          <FaEyeSlash className='eye' onClick={toggleEye}/>
          :
          <FaEye className='eye' onClick={toggleEye}/>
          }
        </div>
        {/* <div className="container-input-password">
          <input 
          type={eye? "text":"password"} 
          placeholder='Check Password' 
          className='input'
          onChange={(e)=>{
            onChange(e.target.id, e.target.value)
          }}
          />
          {eye?
          <FaEyeSlash className='eye' onClick={toggleEye}/>
          :
          <FaEye className='eye' onClick={toggleEye}/>
          }
        </div> */}

        <div className="buttons-container">
          <input type="submit" value="Register" className="register-btn"/>
          <button className="login-btn">Login</button>
        </div>
      </form>
    </div>
  );
};
