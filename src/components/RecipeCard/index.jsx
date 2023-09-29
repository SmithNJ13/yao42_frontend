/* eslint-disable react/prop-types */
import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe, season}) => {
  const navigate = useNavigate()
  const name = recipe.name
  let cardColour = "";

  function handleClick() {
    navigate(`/recipe/${name}`)
  }
      switch(season) {
      case "spring":
        cardColour = "#edf6e0"
        break;
      case "summer":
        cardColour = "#fff8d2"
        break;
      case "autumn":
        cardColour = "#ffe8c0"
        break;
      case "winter":
        cardColour = "#e1f2fa"
        break;
    }

  return (
    <>
    <Card style={{ width: '20rem', backgroundColor: cardColour}} className={season}>
      <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button className="button" onClick={handleClick}>View recipe</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default RecipeCard

// Button on click should eventually have functionality
// to take you to another page where you can
// view the recipe in more detail?
