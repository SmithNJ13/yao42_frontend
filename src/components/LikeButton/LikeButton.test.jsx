import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, fireEvent, getAllByTestId } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import LikeButton from '.'

const mockFetch = vi.fn();
const mockLocalStorage = {
  getItem: vi.fn(),
};

const userId = 123;
const recipeId = 456;


describe("LikeButton component", () => {

    beforeEach(() => {
        render(
        <MemoryRouter initialEntries={['/profile']}>
         <LikeButton />
        </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders without crashing', () => {
        render(<LikeButton />);
      });

    it("Displays a like button", () => {
        const likeButton = screen.getByTestId("like-button")
        expect(likeButton).toBeInTheDocument()
    });

    it('should render with the regular heart icon initially', () => {
        const likeButton = screen.getByTestId('like-button');
    
        expect(likeButton).toBeInTheDocument();
        expect(likeButton).toHaveClass('fa-heart');
        
      });

    it('should toggle to the solid heart icon when clicked', () => {
      const likeButton = screen.getByTestId('like-button');

      
      fireEvent.click(likeButton);

      expect(likeButton).toHaveClass('svg-inline--fa fa-heart likebutton');
      

      fireEvent.click(likeButton);
      expect(likeButton).toHaveClass('fa-heart');
      
    });
    

    // it('renders the likeButton as liked', async () => {
    //   mockLocalStorage.getItem.mockReturnValueOnce(userId);

    // // Mock the fetch function to return a response indicating a like
    // mockFetch.mockResolvedValueOnce({
    //   json: async () => ({ likes: [{ id: 1 }] }),
    // });

    // // Render the LikeButton with the mock user and recipe IDs
    // const { getByTestId } = render(<LikeButton recipe_id={recipeId} />);

    // // Wait for the component to update (e.g., useEffect)
    // //await vi.nextTick();

    // // Assert that the button is rendered as liked
    // const likeButton = getAllByTestId('like-button');
    // expect(likeButton[0]).toHaveClass('liked');
    // })





});



 



