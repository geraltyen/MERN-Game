import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Homepage from './components/Homepage';
import Animated from './components/Animated';
import Footer from './components/Footer';
import AllRoutes from './Allroutes/Routes';


function App() {
  return (
    <>

      <Navbar/>
      <AllRoutes/>
      
      <Footer/>
      
    </>
  );
}

export default App;
