import React, {useState, useEffect} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {CarouselComponent, RecipeCard} from "../../components"
import { useDispatch, useSelector } from "react-redux"
import { changeBGColour } from '../../actions/bgActions'
import axios from "axios"
import "./style.css"
// Declaring seasons for useParams comparison
const seasons = ["spring", "summer", "autumn", "winter"]

const SeasonalPage = () => {
  const {season} = useParams()
  const [recipes,setRecipes] = useState()
  const [ingredients, setIngredients] = useState()
  const displaySeason = season.toUpperCase()
  const dispatch = useDispatch()
  const BGColour = useSelector((state) => state.BGColour)
  // Style variables 
  const BGStyle = {
    backgroundColor: BGColour,
  }

  const handleBG = (colour) => {
    dispatch(changeBGColour(colour))
  }
  // Logic for if the current page paramater doesn't match any of the seasons 
  if(!seasons.includes(season)) {
    return <Navigate replace={true} to="/notfound" />
  }

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

  useEffect(() => {
    getIngredients()
    getRecipes()
  }, [])
  // Loading logic 
  if(!recipes || !ingredients) {
    switch(season) {
      case "spring":
        handleBG("#fafcf8")
        break;
      case "summer":
        handleBG("#fffefa")
        break;
      case "autumn":
        handleBG("#fffcf8")
        break;
      case "winter":
        handleBG("#f9fcff")
        break;
    }
    return <div className="loading">Loading page!</div>
  }


  return (
    <>
    <body style={BGStyle}>
      <div id="MainContent">
        <div id="Title" className={season}>
          {displaySeason}
        </div>
        <div id="Carousel" className={season}>
          <CarouselComponent ingredients={ingredients} season={season}/>
        </div>
        <div id="RecipeInfo">
          {recipes.filter((r) => r.season.toLowerCase().includes(season))
          .map((recipe, index) => (
            <div key={index+1} id="card">
              <RecipeCard recipe={recipe} season={season}/>
            </div>
          ))}
        </div>
      </div>
    </body>
    </>
  )
}

export default SeasonalPage
