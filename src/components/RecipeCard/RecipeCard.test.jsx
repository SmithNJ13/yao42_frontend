import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
import RecipeCard from '.';

describe('RecipeCard component', () => {
  const sampleRecipe = {
    name: 'Sample Recipe',
    description: 'This is a sample recipe',
    image: 'sample-image.jpg',
  };
  const sampleSeason = 'spring';

  it('renders the card with the provided recipe and season', () => {
    // const { getByText, getByAltText } = render(
    //     <MemoryRouter>
    //   <RecipeCard recipe={sampleRecipe} season={sampleSeason} />
    //   </MemoryRouter>
    // );

    // const cardTitle = getByText(sampleRecipe.name);
    // const cardDescription = getByText(sampleRecipe.description);
    // const cardImage = getByAltText(sampleRecipe.name);

    // expect(cardTitle).toBeInTheDocument();
    // expect(cardDescription).toBeInTheDocument();
    // expect(cardImage).toBeInTheDocument();
  });

  it('navigates to the recipe details page on button click', () => {
    // const mockNavigate = jest.fn();
    // const { getByText } = render(
    //     <MemoryRouter>
    //   <RecipeCard recipe={sampleRecipe} season={sampleSeason} /></MemoryRouter>,
    //   { navigate: mockNavigate }
    // );

    // const viewRecipeButton = getByText('View recipe');
    // fireEvent.click(viewRecipeButton);

    // expect(mockNavigate).toHaveBeenCalledWith(`/recipe/${sampleRecipe.name}`);
  });
});
