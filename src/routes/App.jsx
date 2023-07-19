import {React, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {io} from 'socket.io-client'

//views
import {Home} from '../containers/Home.jsx';
import {Login} from '../containers/Login.jsx';

//components
import { FooterMenu } from '../components/FooterMenu.jsx';
import { Register } from "../containers/Register.jsx";
import { User } from "../containers/User.jsx";

const socket = io('http://localhost:3000')

function App() {
  const [connect, setConnect] = useState(false);
  useEffect(()=>{
    socket.on('connect', (evento)=>{
      setConnect(true)
      socket.on('posts', (data)=>{
        console.log(data)
      })
    })
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    {connect? 'conectado': 'desconectado'}
      <FooterMenu/>
    </BrowserRouter>
  );
}

export default App;