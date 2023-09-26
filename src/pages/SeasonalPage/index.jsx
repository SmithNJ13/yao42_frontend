import React, {useState, useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {CarouselComponent, RecipeCard} from "../../components"
import axios from "axios"

import "./style.css"
// Declaring seasons for useParams comparison
const seasons = ["spring", "summer", "autumn", "winter"]

const SeasonalPage = () => {
  const {season} = useParams()
  if(!seasons.includes(season)) {
    return <Navigate replace={true} to="/notfound" />
  }
  const [array,setArray] = useState(undefined)

  // Fetching recipes from backend
  async function getRecipes() {
    axios.get("https://lap-4-server.onrender.com/recipes")
    .then(resp => {
      const data = resp.data.recipes
      setArray(data)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])
  // Loading logic 
  if(!array) {
    return <div>Loading page!</div>
  } else {
    console.log(array)
  }


  return (
    <>
    <div id="Sidebanner" className={season}>
      <div className="Content">
      </div>
    </div>
    <div id="MainContent">
      <div id="Title" className={season}>
        {season}
      </div>
      <div id="Carousel" className={season}>
        <CarouselComponent />
      </div>
    </div>
    <div id="RecipeInfo">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
    </>
  )
}

export default SeasonalPage
