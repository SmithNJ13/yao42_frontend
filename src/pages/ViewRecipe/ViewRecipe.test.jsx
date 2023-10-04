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
      "instructions": "1. Boil pasta according to package instructions. 2. Trim asparagus and cut into bite-sized pieces. 3. In the last 3 minutes of pasta boiling, add asparagus and peas. 4. Drain pasta and vegetables, reserving a cup of pasta water. 5. Zest and juice the lemon. Mix with drained pasta. 6. Sprinkle with grated parmesan. Add reserved pasta water if needed for sauce consistency.",
      "vegetarian": true,
      "vegan": false,
      "budget": "£",
      "season": "Spring",
      "image": "https://images.immediate.co.uk/production/volatile/sites/2/2021/06/OnePotPasta-47b5b0a-a302cf0.jpg?quality=90&resize=556,505",
      "user_id": 1
    },{
      "id": 98,
      "name": "Strawberry Spinach Sala34erw",
      "description": "A refreshing sal43rtead featuring fresh strawberries and spinach with a balsamic vinaigrette.",
      "ingredients": "150g fresh spin43rweach, 200g strawberries, 50g feta cheese, 50g pecans, balsamic vinaigrette",
      "instructions": "1. Wash spinach and 34rwstrawberries.\n2. Slice strawberries and mix with spinach in a bowl.\n3. Crumble feta cheese and sprinkle over salad.\n4. Add pecans.\n5. Drizzle with balsamic vinaigrette and toss well.",
      "vegetarian": true,
      "vegan": false,
      "budget": "£",
      "season": "Spring",
      "image": "34erw",
      "user_id": 1
      }]

const mockAxios = vi.spyOn(axios, 'get');

vi.mock('react-router-dom', () => ({
  useParams: () => ({
    name: 'Vegetable Pasta', 
  }),
}));

describe('ViewRecipe component', () => {
  beforeEach(() => {
    cleanup()
  })

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
    mockAxios.mockResolvedValue({ data: { recipes: mockRecipesData } });
    vi.spyOn(React, 'useState')
      .mockImplementationOnce(() => [mockRecipesData, () => {}]) 
      .mockImplementationOnce(() => [false, () => {}]); 


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
