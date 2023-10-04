import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
import RecipeList from '.';

describe('RecipeList Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders RecipeList component with recipes', () => {
    // Define an array of mock recipes
    const recipes = [
      {
        id: 1,
        name: 'Recipe 1',
        description: 'Description 1',
      },
      {
        id: 2,
        name: 'Recipe 2',
        description: 'Description 2',
      },
    ];

    // Render the RecipeList component with the mock recipes
    render(<MemoryRouter><RecipeList recipes={recipes} /></MemoryRouter>);
    
    // Ensure that the RecipeCard components are rendered for each recipe
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('renders a message when recipes is an empty array', () => {
    // Define an empty array for recipes
    const recipes = [];

    // Render the RecipeList component with the empty array
    render(<MemoryRouter><RecipeList recipes={recipes} /></MemoryRouter>);
    
    // Ensure that the "No recipes found." message is displayed
    expect(screen.getByText('No recipes found.')).toBeInTheDocument();
  });

  it('renders a message when recipes is not provided', () => {
    // Render the RecipeList component without providing recipes
    render(<MemoryRouter><RecipeList recipes={[]} /></MemoryRouter>);
    
    // Ensure that the "No recipes found." message is displayed
    expect(screen.getByText('No recipes found.')).toBeInTheDocument();
  });
});
