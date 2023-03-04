import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Diamonds from '../Components/Diamonds'
import Game from '../Components/game'
import Homepage from '../Components/Homepage'
import LoginCard from '../Components/LoginCard'
import Ownfile from '../Components/Ownfile'
import Leaderboard from '../Route/Leaderboard'
import Signin from '../Route/Signin'
// import SignupCard from '../Components/signup'
import Signup from '../Route/Signup'

type Props = {}

const AllRoutes = (props: Props) => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/game" element={<Ownfile/>}/>
        <Route path='/diamonds' element={<Diamonds/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
        
    </div>
  )
}

export default AllRoutes