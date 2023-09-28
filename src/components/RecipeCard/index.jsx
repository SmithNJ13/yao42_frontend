import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"
import ViewRecipe from '../../pages/ViewRecipe'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipe, season}) => {
  const name = recipe.name
  // console.log(recipe.name)

  return (
    <>
    <Card style={{ width: '20rem' }} className={season}>
      <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button className="button">View recipe</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default RecipeCard

// Button on click should eventually have functionality
// to take you to another page where you can
// view the recipe in more detail?
