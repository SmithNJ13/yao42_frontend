import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"

const RecipeCard = () => {
  return (
    <>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="src\assets\grapefruit-recipe.png" />
        <Card.Body>
          <Card.Title>Recipe Name</Card.Title>
          <Card.Text>
            This is a description of a recipe
          </Card.Text>
          <Button className="button">View recipe</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default RecipeCard
