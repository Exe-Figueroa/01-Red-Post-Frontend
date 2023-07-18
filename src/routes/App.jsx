import {React, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {io} from 'socket.io-client'

import {Home} from '../containers/Home.jsx';
import {Login} from '../containers/Login.jsx';
import { FooterMenu } from '../components/FooterMenu.jsx';

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
    {connect? 'conectado': 'desconectado'}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterMenu/>
    </BrowserRouter>
  );
}

export default App;