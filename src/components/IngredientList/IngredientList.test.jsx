import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import IngredientList from '.';

describe('IngredientList Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the IngredientList component with selected ingredients', () => {
    const selectedIngredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'];

    render(<IngredientList selectedIngredients={selectedIngredients} handleRemoveIngredient={() => {}} />);

    selectedIngredients.forEach((ingredient) => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
  });

  it('calls handleRemoveIngredient when clicking the trash icon', () => {
    const mockHandleRemoveIngredient = vi.fn();

   
    const selectedIngredients = ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'];

  
    render(<IngredientList selectedIngredients={selectedIngredients} handleRemoveIngredient={mockHandleRemoveIngredient} />);
    
  
    fireEvent.click(screen.getAllByTestId('trash-icon')[0]);

    expect(mockHandleRemoveIngredient).toHaveBeenCalledWith(selectedIngredients[0]);
  });

  it('renders no ingredients when selectedIngredients is an empty array', () => {

    const selectedIngredients = [];

    
    render(<IngredientList selectedIngredients={selectedIngredients} handleRemoveIngredient={() => {}} />);
    
    expect(screen.queryByText('Ingredient 1')).toBeNull();
    expect(screen.queryByText('Ingredient 2')).toBeNull();
    expect(screen.queryByText('Ingredient 3')).toBeNull();
  });
});
