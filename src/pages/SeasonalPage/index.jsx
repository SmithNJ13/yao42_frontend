import React, {useState, useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {CarouselComponent, RecipeCard} from "../../components"
import axios from "axios"
import "./style.css"
// Declaring seasons for useParams comparison
const seasons = ["spring", "summer", "autumn", "winter"]

const SeasonalPage = () => {
  const {season} = useParams()
  const displaySeason = season.toUpperCase()
  // Logic for if the current page paramater doesn't match any of the seasons 
  if(!seasons.includes(season)) {
    return <Navigate replace={true} to="/notfound" />
  }
  const [recipes,setRecipes] = useState()
  const [ingredients, setIngredients] = useState()

  // Fetching recipes from backend
  async function getRecipes() {
    await axios.get("https://lap-4-server.onrender.com/recipes")
      .then(resp => {
        const data = resp.data.recipes
        setRecipes(data)
      })
  }
  async function getIngredients() {
    await axios.get("https://lap-4-server.onrender.com/ingredients")
      .then(resp => {
        const data = resp.data.ingredients
        setIngredients(data)
      })
  }
  function setRootClass() {
    const root = document.getElementById("root")
    if(root) {
      root.className = season
    }
  }

  useEffect(() => {
    getIngredients()
    getRecipes()
  }, [])
  // Loading logic 
  if(!recipes || !ingredients) {
    setRootClass()
    return <div className="loading">Loading page!</div>
  }


  return (
    <>
    <div id="Sidebanner" className={season}>
      <div className="Content">
      </div>
    </div>
    <div id="MainContent">
      <div id="Title" className={season}>
        {displaySeason}
      </div>
      <div id="Carousel" className={season}>
        <CarouselComponent ingredients={ingredients} season={season}/>
      </div>
    </div>
    <div id="RecipeInfo">
      {recipes.map((recipe, index) => (
        <div key={index+1} id="card">
          <RecipeCard recipe={recipe} season={season}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SeasonalPage