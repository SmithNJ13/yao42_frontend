import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { screen, render, cleanup, waitFor } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import axios from 'axios'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Register from '.'

vi.mock('axios')

describe("RegisterForm component", () => {
    beforeEach(() => {
        render(
        <MemoryRouter>
        <Register/>
        </MemoryRouter>
        )
    })

    afterEach(() => {
        cleanup()
        //axios.post.mockRestore();

    })

    

    it("Renders the registration form", () => {
        
        expect(screen.getByText("Register")).toBeInTheDocument();
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
        expect(screen.getByText("Sign-Up")).toBeInTheDocument();
    });

    // it("Handles form input and submission", async () => {
        
    //     userEvent.type(screen.getByLabelText("Username"), "testuser1");
    //     userEvent.type(screen.getByLabelText("Email"), "test1@example.com");
    //     userEvent.type(screen.getByLabelText("Password"), "password123");
    //     userEvent.type(screen.getByLabelText("Confirm Password"), "password123");

       

    //     axios.post.mockResolvedValue({
    //         data: {
    //             "username": "testuser1",
    //             "email": "test1@example.com",
    //             "password": "password123"
    //         }
    //     });


    //     userEvent.click(screen.getByText("Sign-Up"));

    //     //await vi.waitFor(() => screen.getByText("Need an account? "));
    //     await vi.waitFor(() => {
    //         expect(axios.post).toHaveBeenCalledTimes(1);
    //         expect(axios.post).toHaveBeenCalledWith(
    //             'https://lap-4-server.onrender.com/register',
    //             {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     username: "testuser1",
    //                     email: "test1@example.com",
    //                     password: "password123",
    //                 }),
    //             }
    //         );
    //     });
        
        
    // });
});
    