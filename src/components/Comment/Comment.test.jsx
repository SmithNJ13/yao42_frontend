import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Comment from '.'

describe("Comment component", () => {
    const username = 'Test User';

    beforeEach(() => {
        render(<Comment comment="Test Comment" username={username} />)
    })

    afterEach(() => {
        cleanup()
    })

    it('should render username and comment text', () => {
        const userNameElement = screen.getByText(`${username}:`);
        const commentTextElement = screen.getByText('Test Comment');
    
        expect(userNameElement).toBeInTheDocument();
        expect(commentTextElement).toBeInTheDocument();
    });

 
})
