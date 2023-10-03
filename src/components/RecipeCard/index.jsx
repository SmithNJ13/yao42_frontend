/* eslint-disable react/prop-types */
import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./style.css"
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({ recipe, season }) => {
  const navigate = useNavigate();
  const name = recipe.name;
  let cardColour = "";
  let buttonColor = "";
  let buttonHoverColor = "";

  switch(season) {
    case "spring":
      cardColour = "#EDF6E0";
      buttonColor = "#BADC83";
      buttonHoverColor = "#B0D07D";
      break;
    case "summer":
      cardColour = "#FFF8D2";
      buttonColor = "#FFE448";
      buttonHoverColor = "#F8DE47";
      break;
    case "autumn":
      cardColour = "#FFE8C0";
      buttonColor = "#FEBB40";
      buttonHoverColor = "#F0B13E";
      break;
    case "winter":
      cardColour = "#E1F2FA";
      buttonColor = "#87CEEB";
      buttonHoverColor = "#81C3DE";
      break;
    default:
      cardColour = "#F0E3FB";
      buttonColor = "#D296EE";
      buttonHoverColor = "#C78FE1";
  }

  const handleClick = () => {
    navigate(`/recipe/${name}`);
  }

  return (
    <>
      <Card style={{ width: '20rem', height: '35rem', backgroundColor: cardColour }} className={season}>
        <Card.Img variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
          <Button
            className="button"
            onClick={handleClick}
            style={{
              backgroundColor: buttonColor,
              borderColor: buttonColor,
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonColor}
          >
            View recipe
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeCard;

// Button on click should eventually have functionality
// to take you to another page where you can
// view the recipe in more detail?
