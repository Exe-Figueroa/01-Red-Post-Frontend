import {React, useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//views
import {Home} from '../containers/Home.jsx';
import {Login} from '../containers/Login.jsx';

//components
import { FooterMenu } from '../components/FooterMenu.jsx';
import { Register } from "../containers/Register.jsx";
import { User } from "../containers/User.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <FooterMenu/>
      
    </BrowserRouter>
  );
}

export default App;