import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./style.css"

const ViewRecipe = () => {
  const { name } = useParams()
  const [recipes, setRecipes] = useState()

  async function getRecipes() {
    await axios.get("https://lap-4-server.onrender.com/recipes")
      .then(resp => {
        const data = resp.data.recipes
        setRecipes(data)
      })
  }
  useEffect(() => {
    getRecipes()
  }, [])
  if(!recipes) {
    return <div className="loading">LOADING!</div>
  }

  return (
    <>
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
    </>
  )
}

export default ViewRecipe
