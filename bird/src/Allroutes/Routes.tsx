import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Diamonds from '../components/Diamonds'
import Game from '../components/game'
import Homepage from '../components/Homepage'
import LoginCard from '../components/LoginCard'
import Ownfile from '../components/Ownfile'
import SignupCard from '../components/signup'

type Props = {}

const AllRoutes = (props: Props) => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/game" element={<Ownfile/>}/>
        <Route path='/diamonds' element={<Diamonds/>}/>
        <Route path="/signup" element={<SignupCard/>}/>
        <Route path="/login" element={<LoginCard/>}/>
    </Routes>
        
    </div>
  )
}

export default AllRoutes