import { React, useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

//views
import { Home } from '../containers/Home/Home.jsx';
import { Login } from '../containers/Login/Login.jsx';
import { Register } from "../containers/Register/Register.jsx";
import { User } from "../containers/User/User.jsx";

//AuthRoute

import { AuthRoute, DataContextProvider } from "../DataContext/DataContextProvider.jsx";

//components
import { FooterMenu } from '../components/FooterMenu/FooterMenu.jsx';
import { SendPost } from "../components/SendPost/SendPost.jsx";


function App() {
  const [seeSendPost, setSeeSendPost] = useState(false);
  function toggleSendPost(isActive) {
    setSeeSendPost(isActive);
  };
  return (
    <HashRouter>
      <DataContextProvider>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            } />
          <Route path="/user"
            element={
              <AuthRoute>
                <User />
              </AuthRoute>
            } />
        </Routes>
        {seeSendPost && <SendPost
          toggleSendPost={toggleSendPost}
        />}
        <FooterMenu
          toggleSendPost={toggleSendPost}
        />
      </DataContextProvider>
    </HashRouter>
  );
}

export default App;