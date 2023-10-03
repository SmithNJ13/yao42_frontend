import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import RecipeSearch from '.'

const mockSetSearchInput = vi.fn()
const mockHandleAddIngredient = vi.fn()


describe("RecipeSearch component", () => {

    beforeEach(() => {
        render(<MemoryRouter><RecipeSearch searchInput={''} setSearchInput={mockSetSearchInput} handleAddIngredient={mockHandleAddIngredient()} />
    </MemoryRouter>)})  

    afterEach(() => {
        cleanup()
    })

    it("Renders RecipeSearch component", () => {
        const inputBox = screen.getAllByPlaceholderText("Search for ingredients")
        const button = screen.getByTestId("button")

        expect(inputBox).toBeTruthy()
        expect(button).toBeTruthy()
    })

    it("Changes text on input", () => {
        const inputBox = screen.getByPlaceholderText('Search for ingredients');
        fireEvent.change(inputBox, {target: {value:'ok'}})
        expect(inputBox.value).toBe('ok')
    })

    it("Clicking button triggers function", () => {
        
        const HandleAddIngredient = {
            handleAddIngredient: () => 100
          }
         
      
          vi.spyOn(HandleAddIngredient, 'handleAddIngredient')
      
      
          const button = screen.getByTestId('button');
          fireEvent.click(button);  
      
          expect(mockHandleAddIngredient).toHaveBeenCalled()
    } )


})