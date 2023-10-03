import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { cleanup, render, renderHook, screen, act } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
import ViewRecipe from '.';
import { Provider } from "react-redux"
import store from '../../store';



const mockRecipesData = 
    [{
      "id": 1,
      "name": "Vegetable Pasta",
      "description": "A light pasta dish with fresh spring vegetables.",
      "ingredients": "200g pasta, 100g asparagus, 100g peas, 1 lemon, 50g parmesan",
      "instructions": "",
      "budget": "£",
      "season": "Spring",
      "image": "https://images.immediate.co.uk/production/volatile/sites/2/2021/06/OnePotPasta-47b5b0a-a302cf0.jpg?quality=90&resize=556,505",
      "user_id": 1
    }]

const mockAxios = vi.spyOn(axios, 'get');

describe('ViewRecipe component', () => {

  afterEach(() => {
   cleanup();
  });

  it('renders loading when recipes are not available',() => {
    mockAxios.mockRejectedValueOnce({}); 


    render(
    <Provider store={store}>
        <ViewRecipe />
    </Provider> 
    )

    const loadingElement = screen.getByText('loading...');
    expect(loadingElement).toBeInTheDocument();
  });
  
  it('renders recipe details when recipes are available', async () => {
    vi.spyOn(React, 'useState').mockImplementation(() => mockRecipesData);
    mockAxios.mockResolvedValue({ data: { recipes: mockRecipesData } });
    
    render( <Provider store={store}>
        <ViewRecipe />
      </Provider> );

    await act(async () => {
      const recipeName = screen.getByText('Vegetable Pasta');
      const recipeDescription = screen.getByText('A light pasta dish with fresh spring vegetables.');
      const recipeIngredients = screen.getByText('200g pasta, 100g asparagus, 100g peas, 1 lemon, 50g parmesan');

      expect(recipeName).toBeInTheDocument();
      expect(recipeDescription).toBeInTheDocument();
      expect(recipeIngredients).toBeInTheDocument();
    });
  });
});
