import React from 'react';
import styles from './App.module.css';
import Signin from './Route/Signin';
import Signup from './Route/Signup';
import {ChakraProvider } from "@chakra-ui/react"
import Leaderboard from './Route/Leaderboard';

function App() {
  return (
    <div className={styles.App}>
      <ChakraProvider>
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Leaderboard /> */}
      </ChakraProvider>
    </div>
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/game';
import Button from "./components/Button";
import Homepage from './components/Homepage';
import Footer from './components/Footer';


import Ownfile from './components/Ownfile';
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
