import React from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
};

export default App;

  

 