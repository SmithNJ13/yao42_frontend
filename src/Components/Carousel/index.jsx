import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
  return (
    <>
    <Carousel>
      <CarouselItem>
        <img src="src\assets\grapefruit.png" />
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src="src\assets\grapefruit.png" />
        <CarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <img src="src\assets\grapefruit.png" />
        <CarouselCaption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
    </>
  )
}

export default CarouselComponent
