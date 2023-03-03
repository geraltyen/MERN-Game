import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Button from "./components/Button";
import Homepage from './components/Homepage';
import Animated from './components/Animated';
import Footer from './components/Footer';


function App() {
  return (
    <>

      <Navbar/>
      <Button/>
      <Homepage/>
      <Animated/>
      <Game />
      <Footer/>
      
    </>
  );
}

export default App;
