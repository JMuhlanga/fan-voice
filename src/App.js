import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Sports from './components/Sports';
import PopCulture from './components/PopCulture';
import Gaming from './components/Gaming';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  const Auth = (user) => {
    if (!user){
      (<Route><Login onLogin={setUser} signup = {<Signup onLogin={setUser}/>} /></Route>)
    };
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/popculture" element={<PopCulture />} />
          <Route path="/gaming" element={<Gaming />} />
          {Auth(user) }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
