import React, {useState} from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom"
import {NavBar} from './components'
import { NotFound, RegisterPage, Profile, SeasonalPage } from "./pages" 
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
        <Route path='/register' element={<RegisterPage />}/>
        <Route path="/:season" element={<SeasonalPage/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
