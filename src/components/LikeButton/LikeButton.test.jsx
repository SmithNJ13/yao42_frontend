import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import LikeButton from '.'

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
    })

    it('renders without crashing', () => {
        render(<LikeButton />);
      });

    it("Displays a like button", () => {
        const likeButton = screen.getByTestId("like-button")
        expect(likeButton).toBeInTheDocument()
    }
    )

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

    
});



 



