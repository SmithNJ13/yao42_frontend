import React, {useState} from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom"
import {SeasonalPage} from "./Pages/export"
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
    {/* {location.pathname!=="/" && 
      <div>NavBar</div>
    } */}
    <Routes>
      <Route path="/" element={<div>
        <Link to="/spring">Spring</Link>
        <Link to="/summer">Summer</Link>
        <Link to="/autumn">Autumn</Link>
        <Link to="/winter">Winter</Link>
      </div>} />
        <Route path="/:season" element={<SeasonalPage />}>
      </Route>
    </Routes>
    </>
  )
}

export default App
