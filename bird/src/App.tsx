import React from 'react';
import styles from './App.module.css';
import Signin from './Route/Signin';
import Signup from './Route/Signup';
import {ChakraProvider } from "@chakra-ui/react"
import Leaderboard from './Route/Leaderboard';
// import './App.css';
import Navbar from './Components/Navbar';
import Game from './Components/game';
import Button from "./Components/Button";
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';


import Ownfile from './Components/Ownfile';
import AllRoutes from './Allroutes/Routes';



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
