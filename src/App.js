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
import AboutUs from './components/About';
import Article from './components/Article';
import Write from './components/Write';
import ContactUs from './components/Contact';

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
              <Route path=":id" element={<Article />}/>
          <Route path="/sports" element={<Sports />} />
          <Route path="/popculture" element={<PopCulture />} />
          <Route path="/gaming" element={<Gaming />} />
              <Route path="/:id" element={<Article />}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/write" element={<Write userProp={user} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element= {<Login/>}/>
          <Route path="/signup" element={<Signup />} />
          {Auth(user) }
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
