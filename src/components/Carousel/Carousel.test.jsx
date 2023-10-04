/* eslint-disable no-undef */
import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';

import Carousel from '.';

const ingredients = [
  {
    name: 'Apple',
    season: 'autumn',
    image: 'apple.jpg',
    description: 'A delicious fruit'
  },
  {
    name: 'Pumpkin',
    season: 'autumn',
    image: 'pumpkin.jpg',
    description: 'A seasonal vegetable'
  },
  {
    name: 'Strawberry',
    season: 'Summer',
    image: 'strawberry.jpg',
    description: 'A sweet fruit'
  }
];

describe('Carousel Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/autumn']}>
        <Carousel ingredients={ingredients} season="autumn" />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
  });

    it('renders a carousel', () => {
        const carousel = document.querySelector('.carousel');
        expect(carousel).toBeInTheDocument();
    });

    it('renders a carousel item', () => {
        const carouselItem = document.querySelector('.carousel-item');
        expect(carouselItem).toBeInTheDocument();
    });

    it('renders a carousel caption', () => {
        const carouselCaption = document.querySelector('.carousel-caption');
        expect(carouselCaption).toBeInTheDocument();
    });

    it('renders a carousel image', () => {
        const carouselImage = document.querySelector('.ingredient-image');
        expect(carouselImage).toBeInTheDocument();
    });

    it('renders a carousel caption with a title', () => {
        const carouselCaptionTitle = document.querySelector('.carousel-caption h3');
        expect(carouselCaptionTitle).toBeInTheDocument();
    });

    it('renders a carousel caption with a description', () => {
        const carouselCaptionDescription = document.querySelector('.carousel-caption p');
        expect(carouselCaptionDescription).toBeInTheDocument();
    });

    it('renders a carousel caption with a title that matches the ingredient name', () => {
        const carouselCaptionTitle = document.querySelector('.carousel-caption h3');
        expect(carouselCaptionTitle.textContent).toEqual('Apple');
    });

    it('renders a carousel caption with a description that matches the ingredient description', () => {
        const carouselCaptionDescription = document.querySelector('.carousel-caption p');
        expect(carouselCaptionDescription.textContent).toEqual('A delicious fruit');
    });


    it('renders a carousel image with an alt attribute', () => {
        const carouselImage = document.querySelector('.ingredient-image');
        expect(carouselImage.alt).toBeTruthy();
    });

    it('renders a carousel image with an alt attribute that matches the ingredient name', () => {
        const carouselImage = document.querySelector('.ingredient-image');
        expect(carouselImage.alt).toEqual('Apple');
    });

    it('renders a carousel image with a src attribute', () => {
        const carouselImage = document.querySelector('.ingredient-image');
        expect(carouselImage.src).toBeTruthy();
    });
});
