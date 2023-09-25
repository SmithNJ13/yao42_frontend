import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import { userEvent} from '@testing-library/user-event'
import { MemoryRouter} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Profile from '.'

describe("Profile page", () => {
    
    beforeEach(() => {
        render(
            <MemoryRouter>
            <Profile/>
           </MemoryRouter>
        )
    });

    afterEach(() => {
        cleanup()
    })
})