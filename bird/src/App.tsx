import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <>

      <Navbar/>
      {/* <Homepage/> */}
      {/* <Animated/> */}
      {/* <Game /> */}
      {/* <Footer/> */}
      <AllRoutes />
    </>
  );
}

export default App;
