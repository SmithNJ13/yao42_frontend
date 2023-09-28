import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Comment from '.'

describe("Comments component", () => {

    beforeEach(() => {
        render(<Comment comment="Test Comment" user_id={123} />)
    })

    afterEach(() => {
        cleanup()
    })

    it('should render user_id and comment text', () => {
        const userIdElement = screen.getByText('User Id: 123');
        const commentTextElement = screen.getByText('Test Comment');
    
        expect(userIdElement).toBeInTheDocument();
        expect(commentTextElement).toBeInTheDocument();
      });

      it('should render the LikeButton component', () => {
        const likeButton = screen.getByTestId("like-button");

        expect(likeButton).toBeInTheDocument();
      });
})