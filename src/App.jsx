import React, {useState} from "react";
import {Routes, Route, Link, useLocation} from "react-router-dom"
import {NavBar} from './components'
import { NotFound, RegisterPage, Profile, SeasonalPage, MixingBowl } from "./pages" 
import './App.css'

function App() {
  const location = useLocation()
  return (
    <>
    {/* This renders the NavigationBar on ANY page that isn't the HomePage, we can adjust this as we see fit throughout the project */}
    {location.pathname!=="/" && 
      <NavBar />
    }
    <Routes>
      {/* NotFound page logic is being handled here, we don't need to do "*" endpoint anymore */}
      <Route path="/notfound" element={<NotFound />}></Route>
      <Route path="/mixingbowl" element={<MixingBowl />}></Route>
      <Route path="/" element={<div>
        <Link to="/spring">Spring</Link>
        <Link to="/summer">Summer</Link>
        <Link to="/autumn">Autumn</Link>
        <Link to="/winter">Winter</Link>
      </div>} />
        {/* If new pages are being added in, render them before /:season! */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path="/:season" element={<SeasonalPage/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App
