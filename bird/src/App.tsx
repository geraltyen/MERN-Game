import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Button from "./components/Button";
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import AllRoutes from './Allroutes/Routes';
import Ownfile from './components/Ownfile';


function App() {
  return (
    <>
      
      <Navbar/>
      <AllRoutes/>
      
    </>
  );
}

export default App;
