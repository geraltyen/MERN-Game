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
  );
}

export default App;
