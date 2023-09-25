import React, {useState} from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom"
import {SeasonalPage} from "./Pages/export"
import {NavBar} from './components'
import { NotFound, Profile } from "./pages" 
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
    {location.pathname!=="/" && 
      <NavBar />
    }
    <Routes>
      <Route path="/notfound" element={<NotFound />}></Route>
      <Route path="/" element={<div>
        <Link to="/spring">Spring</Link>
        <Link to="/summer">Summer</Link>
        <Link to="/autumn">Autumn</Link>
        <Link to="/winter">Winter</Link>
      </div>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/:season" element={<SeasonalPage/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
