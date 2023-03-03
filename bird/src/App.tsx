import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
