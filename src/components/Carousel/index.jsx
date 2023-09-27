import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const CarouselComponent = () => {
  return (
    <>
    <Carousel>
      <CarouselItem>
        <img src="../src/assets/grapefruit.png" />
        <CarouselCaption>
          <h3>Ingredient Name[1]</h3>
          <p>This is a placeholder ingredient description</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src="../src/assets/pear.png" />
        <CarouselCaption>
          <h3>Ingredient Name[2]</h3>
          <p>This is a placeholder ingredient description</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src="../src/assets/grapefruit.png" />
        <CarouselCaption>
          <h3>Ingredient Name[3]</h3>
          <p>This is a placeholder ingredient description</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
    </>
  )
}

export default CarouselComponent
