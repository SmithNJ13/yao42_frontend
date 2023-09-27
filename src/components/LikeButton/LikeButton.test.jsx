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

    it("Displays a solid heart when clicked", () => {
        const likeButton = screen.getByTestId("like-button")
        fireEvent.click(likeButton)
        expect(likeButton).toHaveClass('solid-heart')
    }
    )

    it("Displays a regular heart when clicked twice", () => {
        const likeButton = screen.getByTestId("like-button")
        fireEvent.click(likeButton)
        fireEvent.click(likeButton)
        expect(likeButton).toHaveClass('regular-heart')
    }
    )

    
});
