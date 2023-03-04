import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Button from "./components/Button";
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import AllRoutes from './Allroutes/Routes';


function App() {
  return (
    <>

      <Navbar/>
      <Button/>
      <Homepage/>
      
      <Game />
      <Footer/>
      
    </>
  );
}

export default App;
