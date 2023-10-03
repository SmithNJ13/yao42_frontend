import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { changeBGColour } from '../../actions/bgActions'
import { Comments, LikeButton, Loading } from '../../components'
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
    return <Loading /> 
  }

  return (
    <body style={BGStyle} className="ViewRecipe">
    <>
      {recipes.filter((r) => r.name.includes(name))
      .map((recipe, key) => (
        <div id="Information" key={key}>
          <div className="top">
            <div id="ImageBox">
              <img className="tw-max-w-none image" src={recipe.image}/>
            </div>
            <div id="Headings">
              <div className="one">
                <p>{name}</p>
              </div>
              <div className="two">
                <p>{recipe.season}</p>
              </div>
            </div>
          </div>
          <div id="MainBody">
            <div id="Description">
              <h3><b>Description: </b></h3>
              <p>{recipe.description}</p>
            </div>
            <div id="Ingredients">
              <h3><b>Ingredients: </b></h3>
              <p>{recipe.ingredients}</p>
            </div>
            <div id="Instructions">
              <h3><b>Instructions: </b></h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <div className="bottom">
            <div id="LikeButton">
              <p>Like this recipe!</p>
              <div className="heart">
                <LikeButton recipe_id={recipe.id}/>
              </div>
            </div>
          </div>
        <div id="SideInfo">
          <div id="Comments">
            <Comments recipe_id={recipe.id}/>
          </div>
        </div>
        </div>
      ))}
    </>
    </body>
  )
}

export default ViewRecipe
