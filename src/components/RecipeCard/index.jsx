import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"

const RecipeCard = ({recipe, season}) => {
  const name = recipe.name
  const desc = recipe.description
  // console.log(recipe.name)
  return (
    <>
    <Card style={{ width: '20rem' }} className={season}>
      <Card.Img variant="top" src="src\assets\grapefruit-recipe.png" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
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
