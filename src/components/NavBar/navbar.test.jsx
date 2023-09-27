import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import NavBar from '.'


describe("NavBar component", () => {

    beforeEach(() => {
        render(
        <MemoryRouter initialEntries={['/']}>
         <NavBar />
        </MemoryRouter>
        );
    });

    afterEach(() => {
        cleanup();
    })

    it("Displays a nav bar will have three children", () => {
        const nav = screen.getByTestId("navlinks")
        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(4)
    })

    it("Displays navigation links", () => {
        const navLinksContainer = screen.getByRole("navigation");
        const homeLink = screen.getByText("Home");
        const profileLink = screen.getByText("My Profile");
        const addRecipeLink = screen.getByText("Add Recipe");
    
        expect(navLinksContainer).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(addRecipeLink).toBeInTheDocument();
      });

    it("Navigates to Home page when home link is clicked", () => {
        const homeLink = screen.getByText("Home")
        userEvent.click(homeLink)
        expect(window.location.pathname).toBe('/')

    })

    // it("Navigates to Profile page when profile link is clicked", () => {
    //     const profileLink = screen.getByText("My Profile")
    //     userEvent.click(profileLink)
    //     expect(window.location.pathname).toBe('/profile')

    // })

    // it("Navigates to add recipe page when add recipe link is clicked", () => {
    //     const addRecipeLink = screen.getByText("Add Recipe")
    //     userEvent.click(addRecipeLink)
    //     expect(window.location.pathname).toBe('/addrecipe')

    // })

    it("Contains a footer", () => {
        const footer = screen.getByText("SzndChef 2023")
        expect(footer).toBeInTheDocument()
    })

})

