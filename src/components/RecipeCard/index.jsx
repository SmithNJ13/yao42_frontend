import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"
import ViewRecipe from '../../pages/ViewRecipe'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe, season}) => {
  const navigate = useNavigate()
  const name = recipe.name
  function handleClick() {
    navigate("/"+name)
  }

  return (
    <>
    <Card style={{ width: '20rem' }} className={season}>
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
