import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { changeBGColour } from '../../actions/bgActions'
import { CommentBox, LikeButton } from '../../components'
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
    <body style={BGStyle}>
    <>
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
            <p>{recipe.description}</p>
            <p>{recipe.ingredients}</p>
          </div>
          <h3>Instructions: </h3>
          <div id="Instructions">
            <p>{recipe.instructions}</p>
          </div>
          <div id="LikeButton">
            <LikeButton/>
          </div>
        </div>
      ))}
      <div id="Comments">
        <CommentBox/>
      </div>
    </>
    </body>
  )
}

export default ViewRecipe
