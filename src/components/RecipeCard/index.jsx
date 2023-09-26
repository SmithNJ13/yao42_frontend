import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"

const RecipeCard = (recipes) => {
  const name = recipes.recipes[0].name
  const desc = recipes.recipes[0].description
  console.log(recipes.recipes[0].name)
  return (
    <>
    <Card style={{ width: '20rem' }}>
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
