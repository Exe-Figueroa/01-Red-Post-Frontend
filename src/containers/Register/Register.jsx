import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../DataContext/DataContextProvider';

import './Register.css';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { base_url } from '../../../config/config';

export function Register() {
  const { failureRequest, successRequest } = useContext(DataContext);
  const [eye, setEye] = useState(true);
  const [data, setData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  function toggleEye() {
    setEye(!eye);
  };

  function onChange(id, value) {
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    console.log(data);
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log('submit');
    try {
      fetch(`${base_url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(async (res) => {
          const data = await res.json();
          if (res.ok) {
            successRequest('Successfully registered user')
          } else if (!res.ok && data.message) {
            failureRequest(data.message)
          }
        })

    } catch (error) {
      alert('no se envió');
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
          onChange={(e) => {
            onChange(e.target.id, e.target.value)
          }}
          id='name'
        />
        <input
          value={data.lastName}
          type="text"
          placeholder='Last name'
          className='input'
          onChange={(e) => {
            onChange(e.target.id, e.target.value)
          }}
          id='lastName'
        />
        <input
          value={data.username}
          type="text"
          placeholder='Username'
          className='input'
          onChange={(e) => {
            onChange(e.target.id, e.target.value)
          }}
          id='username'
        />
        <input
          value={data.email}
          type="text"
          placeholder='Email'
          className='input'
          onChange={(e) => {
            onChange(e.target.id, e.target.value)
          }}
          id='email'
        />

        <div className="container-input-password">
          <input
            value={data.password}
            type={eye ? "text" : "password"}
            placeholder='Password'
            className='input'
            onChange={(e) => {
              onChange(e.target.id, e.target.value)
            }}
            id='password'
          />
          {eye ?
            <FaEyeSlash className='eye' onClick={toggleEye} />
            :
            <FaEye className='eye' onClick={toggleEye} />
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
          <button className='register-btn' type='submit'>Register</button>
          <Link to='/login' className="login-btn">Login</Link>
        </div>
      </form>
    </div>
  );
};
