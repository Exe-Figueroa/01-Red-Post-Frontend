import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from '../containers/Home.jsx'
import { FooterMenu } from '../components/FooterMenu.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterMenu/>
    </BrowserRouter>
  );
}

export default App;