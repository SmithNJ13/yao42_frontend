import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios'

const ViewRecipe = () => {
  const { name } = useParams()
  const [recipe, setRecipe] = useState()

  useEffect(() => {
    axios.get(`https://lap-4-server.onrender.com/recipes/${name}`)
    .then((resp) => {
      const data = resp.data.recipe
      setRecipe(data)
    })
    .catch(() => {
      setRecipe(null)
    })
  },[name])

  if(recipe === null) {
    return <Navigate replace={true} to="/notfound"/>
  }

  return (
    <>
    <h1>{recipe.name}</h1>
    </>
  )
}

export default ViewRecipe
