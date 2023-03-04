import React from "react";
import { Route, Routes } from "react-router-dom";
import Game from "../components/game";
import Homepage from "../components/Homepage";

const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/start" element={<Game />} />
        </Routes>
    )
}

export default AllRoutes;