import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import NotFound from '.'


describe("NotFound page", () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
            <NotFound/>
            </MemoryRouter>
        )
    });

    afterEach(() => {
        cleanup();
    })

    it("displays h1 with specified text", () => {
        const h1 = screen.getByRole('heading', {level:1})
        expect(h1).toBeInTheDocument()
    })

    it("Contains a link to home", () => {
        const link = screen.getByRole('link')
        expect(link).toBeInTheDocument()
    })

    it("Navigates back to home after clicking the home link", () => {
        const link = screen.getByRole('link')
        userEvent.click(link)
        expect(window.location.pathname).toBe('/')
    })
})