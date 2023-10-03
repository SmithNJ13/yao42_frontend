import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import ViewRecipe from '.';
import { act } from 'react-dom/test-utils';
import { Provider } from "react-redux"
import store from '../../store';


const mockAxios = vi.spyOn(require('axios'), 'get');

const mockLocalStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),    
  };

const mockUseParams = vi.fn()
const setUsername = vi.fn();
const setEmail = vi.fn();



describe('ViewRecipe component', () => {
  beforeEach(() => {
    global.localStorage = mockLocalStorage
    
    
   localStorage.setItem('username', 'bob');
   localStorage.setItem('email', 'bob@bob')
    
   
    mockAxios.mockResolvedValue({ data: { recipes: [{
        "id": 1,
        "name": "Vegetable Pasta",
        "description": "A light pasta dish with fresh spring vegetables.",
        "ingredients": "200g pasta, 100g asparagus, 100g peas, 1 lemon, 50g parmesan",
        "instructions": "",
        "budget": "£",
        "season": "Spring",
        "image": "https://images.immediate.co.uk/production/volatile/sites/2/2021/06/OnePotPasta-47b5b0a-a302cf0.jpg?quality=90&resize=556,505",
        "user_id": 1
        }] } });
    
    
    mockUseParams.mockReturnValue({ name: 'Vegetable Pasta' });
  });

  afterEach(() => {
   cleanup();
  });

  it('fetches recipe on correct authentication', () => {
    setUsername.mockReturnValue(localStorage.getItem('username'));
    setEmail.mockReturnValue(localStorage.getItem('email'));
    

        render(<Provider store={store}><ViewRecipe/></Provider>)

    expect(setUsername).toHaveBeenCalledWith('bob');
    expect(setEmail).toHaveBeenCalledWith('bob@bob');

  })

  
});
