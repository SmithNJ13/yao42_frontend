import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const CarouselComponent = ({ingredients, season}) => {
  return (
    <>
    <Carousel> {
      ingredients.filter((i) => i.season.toLowerCase().includes(season))
      .map((ingredient, index) => (
        <CarouselItem key={index}>
          <img src={ingredient.image} className='ingredient-image'/>
          <CarouselCaption>
            <h3>{ingredient.name}</h3>
            <p>{ingredient.description}</p>
          </CarouselCaption>
        </CarouselItem>
      ))
      }
    </Carousel>
    </>
  )
}

export default CarouselComponent

// For each ingredient that belongs to the season, render the ingredient
