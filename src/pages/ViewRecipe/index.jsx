import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { changeBGColour } from '../../actions/bgActions'
import { CommentBox, Comments, LikeButton, Loading } from '../../components'
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
    <body style={BGStyle} className="Recipe">
    <>
      {recipes.filter((r) => r.name.includes(name))
      .map((recipe, key) => (
        <div id="Information" key={key}>
          <div id="ImageBox">
            <img className="tw-max-w-none image" src={recipe.image}/>
          </div>
          <div id="Heading">
            <p>{name}</p>
            <p>{recipe.season}</p>
          </div>
          <div id="MainBody">
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
          <h3><b>Instructions: </b></h3>
            <div id="Instructions">
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <div id="LikeButton">
            <LikeButton/>
          </div>
        </div>
      ))}
      <div id="Comments">
        <Comments/>
      </div>
    </>
    </body>
  )
}

export default ViewRecipe
