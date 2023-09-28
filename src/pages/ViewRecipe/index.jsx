import React from 'react'
import {useParams}  from "react-router-dom"

const ViewRecipe = (recipe) => {
  const name = recipe.name
  useParams(name)
  return (
    <>
    <h1>{name}</h1>
    </>
  )
}

export default ViewRecipe
