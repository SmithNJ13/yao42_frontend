import React from 'react'
import { PostRecipe } from '../../components'
import './style.css'


const RecipePage = () => {
  return (
    <>
      <div id="Sidebanner"></div>
      <h1 id="title">Add a Recipe</h1>
      <PostRecipe />
    </>
  )
}

export default RecipePage
