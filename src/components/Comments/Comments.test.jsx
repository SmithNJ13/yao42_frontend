import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers'
import axios from 'axios';
expect.extend(matchers)
import Comments from '.';


describe("Comments component", () => {
    beforeEach(() => {
        render(<Comments/>)
    })

    afterEach(() => {
        cleanup()
    })

    it("Fetches comments from the api", async () => {
        vi.spyOn(axios, "get").mockResolvedValueOnce({
            comments: [
            {
            "id": 1,
            "comment": "This recipe is amazing!",
            "recipe_id": 1,
            "user_id": 1
            }
            ]
            })
            await waitFor(() => {
                expect(screen.getByText("This recipe is amazing!")).toBeInTheDocument();
            });
        

    })

    
})