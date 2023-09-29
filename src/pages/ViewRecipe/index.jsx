import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { changeBGColour } from '../../actions/bgActions'
import axios from 'axios'
import "./style.css"

const ViewRecipe = () => {
  const { name } = useParams()
  const [recipes, setRecipes] = useState()
  const dispatch = useDispatch()
  const BGColour = useSelector((state) => state.BGColour)
  const BGStyle = {
    backgroundColor: BGColour,
  }

  const handleBG = (colour) => {
    dispatch(changeBGColour(colour))
  }

  async function getRecipes() {
    await axios.get("https://lap-4-server.onrender.com/recipes")
      .then(resp => {
        const data = resp.data.recipes
        setRecipes(data)
      })
  }
  useEffect(() => {
    getRecipes()
    handleBG("#F7F6FE")
  }, [])
  if(!recipes) {
    return <div className="loading">LOADING!</div>
  }

  return (
    <>
    <body style={BGStyle}>
      <div className="Sidebanner"/>
      {recipes.filter((r) => r.name.includes(name))
      .map((recipe, key) => (
        <div id="Information" key={key}>
          <div id="ImageBox">
            <img src={recipe.image}/>
          </div>
          <div id="Heading">
            <p>{name}</p>
            <p>{recipe.season}</p>
          </div>
          <div id="MainBody">
            <h1>{recipe.description}</h1>
            <h1>{recipe.ingredients}</h1>
          </div>
        </div>
      ))}
    </body>
    </>
  )
}

export default ViewRecipe
