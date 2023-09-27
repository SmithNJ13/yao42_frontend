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
  const [recipes,setRecipes] = useState(undefined)
  const [ingredients, setIngredients] = useState(undefined)
  const seasonArray = []

  // Fetching recipes from backend
  async function getRecipes() {
    axios.get("https://lap-4-server.onrender.com/recipes")
    .then(resp => {
      const data = resp.data.recipes
      setRecipes(data)
    })
  }
  async function getIngredients() {
    axios.get("https://lap-4-server.onrender.com/ingredients")
    .then(resp => {
      const data = resp.data.ingredients
      setIngredients(data)
    })
  }

  useEffect(() => {
    getIngredients()
    getRecipes()
  }, [])
  // Loading logic 
  if(!recipes && !ingredients) {
    return <div className="loading">Loading page!</div>
  } else {
    try {
      // console.log(recipes)
      // console.log(ingredients)
      ingredients.filter((i) => i.season.toLowerCase().includes(season))
      .map(i => {console.log(i.season)})
    } catch (error) {
      console.log("Cannot filter ingredients!")
    }
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
          <RecipeCard recipe={recipe}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SeasonalPage
